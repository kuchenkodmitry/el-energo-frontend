// db.js
import pkg from 'pg';
const { Pool } = pkg;
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve('../.env') });

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
});

export async function initDB() {
  const schema = fs.readFileSync(new URL('./schema.sql', import.meta.url), 'utf-8');
  await pool.query(schema);
}

export default pool;
