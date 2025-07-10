// db.js
import pkg from 'pg';
const { Pool } = pkg;
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

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
