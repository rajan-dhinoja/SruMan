import mysql, { Pool } from "mysql2/promise";

declare global {
  // eslint-disable-next-line no-var
  var mysqlPool: Pool | undefined;
}

function createPool(): Pool {
  return mysql.createPool({
    host: process.env.MYSQL_HOST || "srv1859.hstgr.io",
    port: parseInt(process.env.MYSQL_PORT || "3306", 10),
    user: process.env.MYSQL_USER || "u153430321_sruman",
    password: process.env.MYSQL_PASSWORD || "SruMan27022027",
    database: process.env.MYSQL_DATABASE || "u153430321_sruman_db",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 5000,
    enableKeepAlive: true,
    keepAliveInitialDelay: 10000,
    charset: "utf8mb4",
    ssl: { rejectUnauthorized: false },
  });
}

const pool = globalThis.mysqlPool || createPool();

if (process.env.NODE_ENV !== "production") {
  globalThis.mysqlPool = pool;
}

export default pool;
