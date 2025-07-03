// db.js
import { Pool } from 'pg';

const pool = new Pool({
    user: 'penis',           // ваш PostgreSQL пользователь
    host: 'localhost',
    database: 'electrojor',          // название вашей базы данных
    password: 'povar',        // ваш пароль
    port: 5432,                       // порт, на котором работает PostgreSQL
});

export default pool;
