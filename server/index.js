import express from "express";
import cors from 'cors';
import nodemailer from 'nodemailer'
import https from 'https'
import path from 'path'
import dotenv from 'dotenv'
import pool, { initDB } from './db.js'

dotenv.config({ path: path.resolve('../.env') })

const app = express();

// app.use(cors());

initDB().catch(err => console.error('DB init error', err));


const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });



app.use(express.json()); // Объясняем приложению, что мы используем JSON
app.use(cors());
app.post("/api/send-email/", async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.EMAIL_TO,
        subject: `Новый клиент ${name}`, // Тема
        text: message, // Текст письма
      });
  
      res.status(200).send("Заявка принята!");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    }
  });
app.post('/api/send-telegram', async (req, res) => {
  const { name, phone, email } = req.body;
  const text = `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}`;
  const token = process.env.TELEGRAM_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const options = {
    hostname: 'api.telegram.org',
    path: `/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`,
    method: 'GET'
  };
  const tgReq = https.request(options, tgRes => {
    tgRes.on('data', () => {});
    tgRes.on('end', () => res.status(200).json({ message: 'Сообщение отправлено' }));
  });
  tgReq.on('error', err => {
    console.error('Telegram error:', err);
    res.status(500).json({ message: 'Ошибка отправки' });
  });
  tgReq.end();
});
app.use('/images', express.static('uploads')); // Говорим Express проверять в папке uploads для пути /images

// PostgreSQL based posts
app.get('/api/postsdb/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM posts WHERE category=$1 ORDER BY id DESC', [category]);
    res.json(rows.map(r => ({ ...r, details: r.details || {} })));
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'db error' });
  }
});

app.post('/api/postsdb', async (req, res) => {
  const { category, title, description, image, url, details } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO posts(category,title,description,image,url,details) VALUES($1,$2,$3,$4,$5,$6) RETURNING *',
      [category, title, description, image, url, details || null]
    );
    res.json(rows[0]);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'db error' });
  }
});

const PORT = process.env.SERVER_PORT || 4000;
// Запускаем сервер на порту
app.listen(PORT, (err) => {
    if (err) {
        return console.log("Не запускается сервер: ", err);
    }
    console.log("Server OK on port", PORT);
});
