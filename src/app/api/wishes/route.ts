import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { RowDataPacket, ResultSetHeader } from "mysql2";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface WishRow extends RowDataPacket {
  id: string;
  name: string;
  message: string;
  date: string | null;
  theme: string | null;
  created_at: Date;
}

// Resilient query wrapper that auto-retries once on socket/network drops
async function queryWithRetry<T>(sql: string, params: (string | number | null)[] = []): Promise<[T, unknown]> {
  try {
    return await pool.query(sql, params) as unknown as [T, unknown];
  } catch (err: unknown) {
    const error = err as { code?: string };
    if (error?.code === "ECONNRESET" || error?.code === "PROTOCOL_CONNECTION_LOST") {
      console.warn("MySQL connection reset by host, automatically retrying query...");
      return await pool.query(sql, params) as unknown as [T, unknown];
    }
    throw err;
  }
}

export async function GET() {
  try {
    const [rows] = await queryWithRetry<WishRow[]>(
      "SELECT id, name, message, date, theme, created_at FROM wishes ORDER BY created_at DESC"
    );
    return NextResponse.json(rows || []);
  } catch (error) {
    console.error("Error fetching wishes from MySQL:", error);
    return NextResponse.json([]);
  }
}

export async function POST(request: NextRequest) {
  try {
    const newWish = await request.json();

    if (!newWish.name || !newWish.message) {
      return NextResponse.json(
        { error: "Name and message are required" },
        { status: 400 }
      );
    }

    const wish = {
      id: newWish.id || String(Date.now()),
      name: newWish.name,
      message: newWish.message,
      date: newWish.date || "હમણાં જ",
      theme: newWish.theme || "gold",
    };

    await queryWithRetry<ResultSetHeader>(
      `INSERT INTO wishes (id, name, message, date, theme)
       VALUES (?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE 
         name = VALUES(name),
         message = VALUES(message),
         date = VALUES(date),
         theme = VALUES(theme)`,
      [wish.id, wish.name, wish.message, wish.date, wish.theme]
    );

    const [rows] = await queryWithRetry<WishRow[]>(
      "SELECT id, name, message, date, theme, created_at FROM wishes WHERE id = ? LIMIT 1",
      [wish.id]
    );

    const result = rows[0] || wish;
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error in POST wish:", error);
    return NextResponse.json({ error: "Failed to add wish" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const wishId = searchParams.get("id");

    if (!wishId) {
      return NextResponse.json({ error: "Wish ID is required" }, { status: 400 });
    }

    await queryWithRetry<ResultSetHeader>("DELETE FROM wishes WHERE id = ?", [wishId]);

    return NextResponse.json({ success: true, wishId });
  } catch (error) {
    console.error("Error in DELETE wish:", error);
    return NextResponse.json({ error: "Failed to delete wish" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedWish = await request.json();

    // If an array is sent, handle list reordering or batch update
    if (Array.isArray(updatedWish)) {
      for (const item of updatedWish) {
        if (item && item.id) {
          await queryWithRetry<ResultSetHeader>(
            `INSERT INTO wishes (id, name, message, date, theme)
             VALUES (?, ?, ?, ?, ?)
             ON DUPLICATE KEY UPDATE 
               name = VALUES(name),
               message = VALUES(message),
               date = VALUES(date),
               theme = VALUES(theme)`,
            [item.id, item.name, item.message, item.date || "હમણાં જ", item.theme || "gold"]
          );
        }
      }
      return NextResponse.json(updatedWish);
    }

    if (!updatedWish.id) {
      return NextResponse.json({ error: "Wish ID is required" }, { status: 400 });
    }

    const updates: string[] = [];
    const values: (string | null)[] = [];

    if (updatedWish.name !== undefined) {
      updates.push("name = ?");
      values.push(updatedWish.name);
    }
    if (updatedWish.message !== undefined) {
      updates.push("message = ?");
      values.push(updatedWish.message);
    }
    if (updatedWish.theme !== undefined) {
      updates.push("theme = ?");
      values.push(updatedWish.theme);
    }
    if (updatedWish.date !== undefined) {
      updates.push("date = ?");
      values.push(updatedWish.date);
    }

    if (updates.length > 0) {
      values.push(updatedWish.id);
      await queryWithRetry<ResultSetHeader>(
        `UPDATE wishes SET ${updates.join(", ")} WHERE id = ?`,
        values
      );
    }

    const [rows] = await queryWithRetry<WishRow[]>(
      "SELECT id, name, message, date, theme, created_at FROM wishes WHERE id = ? LIMIT 1",
      [updatedWish.id]
    );

    return NextResponse.json(rows[0] || updatedWish);
  } catch (error) {
    console.error("Error in PUT wish:", error);
    return NextResponse.json({ error: "Failed to update wish" }, { status: 500 });
  }
}
