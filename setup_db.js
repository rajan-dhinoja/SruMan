const mysql = require('mysql2/promise');
const fs = require('fs');

async function setupDatabase() {
  const connectionConfig = {
    host: process.env.MYSQL_HOST || 'srv1859.hstgr.io',
    port: parseInt(process.env.MYSQL_PORT || '3306', 10),
    user: process.env.MYSQL_USER || 'u153430321_sruman',
    password: process.env.MYSQL_PASSWORD || 'SruMan27022027',
    database: process.env.MYSQL_DATABASE || 'u153430321_sruman_db',
    charset: 'utf8mb4',
    ssl: { rejectUnauthorized: false }
  };

  let connection;
  try {
    connection = await mysql.createConnection(connectionConfig);
    console.log("Connected to MySQL");

    // Create table
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS wishes (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        date VARCHAR(255),
        theme VARCHAR(50) DEFAULT 'gold',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
    console.log("Created/verified table 'wishes'");
  } catch (error) {
    console.error("Error setting up database:", error);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

setupDatabase();
