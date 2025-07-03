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

const app = express();

// app.use(cors());


const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465, // Используйте 587, если хотите использовать TLS
    secure: true, // true для 465, false для других портов
    auth: {
      user: "e-17215083@yandex.ru", // Замените на ваш email
      pass: "dgtjsruoummkbzoh", // Пароль приложения
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

mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connected"))
    .catch(err => console.error("DB connection error:", err));


const upload = multer({ storage });


app.use(express.json()); // Объясняем приложению, что мы используем JSON
app.use(cors());
app.post("/api/send-email/", async (req, res) => {
    const { name, email, message } = req.body;
  
    try {
      await transporter.sendMail({
        from: 'e-17215083@yandex.ru', // От кого
        to: "elenergo34@yandex.ru", // Кому
        subject: `Новый клиент ${name}`, // Тема
        text: message, // Текст письма
      });
  
      res.status(200).send("Заявка принята!");
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    }
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

// Запускаем сервер на порту 4000
app.listen(4000, (err) => {
    if (err) {
        return console.log("Не запускается сервер: ", err);
    }
    console.log("Server OK");
});