import express from "express";
import mongoose from "mongoose";
import { registerValidaton, loginValidaton, postCreateValidation,contactCreateValidation } from "./validations.js";
import checkAuth from "./utils/checkAuth.js";
import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostContoller.js';
import * as ExampleContoller from "./controllers/exampleContoller.js";
import * as ContactController from './controllers/contactController.js'
import multer from "multer";
import handleValidationErrors from "./utils/handleErrors.js";
import cors from 'cors';
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser'
import https from 'https'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: path.resolve('../.env') })

const app = express();

// app.use(cors());


const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'uploads');  // Указываем директорию для хранения загруженных файлов
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);  // Сохраняем файл с оригинальным именем
    },
});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connected"))
    .catch(err => console.error("DB connection error:", err));


const upload = multer({ storage });


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

app.post("/api/contact", loginValidaton, contactCreateValidation, ContactController.create); 
app.patch("/api/contact/:id", loginValidaton, contactCreateValidation, ContactController.update);
app.get("/api/contact/", contactCreateValidation, ContactController.getAll);

app.post("/api/auth/login", loginValidaton, handleValidationErrors, UserController.login);
app.post('/api/auth/register', registerValidaton, handleValidationErrors, UserController.register);
app.get("/api/auth/me", checkAuth, UserController.getMe);
app.post("/api/posts", checkAuth, postCreateValidation, PostController.create);
app.get("/api/posts", PostController.getAll);
app.get('/api/posts/:id', PostController.getOne);
app.delete("/api/posts/:id", checkAuth, PostController.remove);
app.patch("/api/posts/:id", checkAuth, postCreateValidation, handleValidationErrors, PostController.update);

app.post("/api/example", checkAuth, postCreateValidation, ExampleContoller.create);
app.get("/api/example", ExampleContoller.getAll);
app.get('/api/example/:id', ExampleContoller.getOne);
app.delete("/api/example/:id", checkAuth, ExampleContoller.remove);
app.patch("/api/example/:id", checkAuth, postCreateValidation, handleValidationErrors, ExampleContoller.update);

app.post('/api/uploads', checkAuth, upload.single("image"), (req, res) => {
    res.json({
        url: `/images/${req.file.originalname}`,  // Отправляем URL с новым путём для доступа к изображению
    });
});

const PORT = process.env.SERVER_PORT || 4000;
// Запускаем сервер на порту
app.listen(PORT, (err) => {
    if (err) {
        return console.log("Не запускается сервер: ", err);
    }
    console.log("Server OK on port", PORT);
});
