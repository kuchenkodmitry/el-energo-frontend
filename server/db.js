// db.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve('../.env') });

const dbPromise = open({
  filename: process.env.DB_FILE || path.resolve('database.sqlite'),
  driver: sqlite3.Database,
});

export async function initDB() {
  const db = await dbPromise;
  await db.exec(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category TEXT NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      image TEXT,
      url TEXT,
      details TEXT
    );
  `);
}

export default dbPromise;
