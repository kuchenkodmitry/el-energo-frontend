import { Email } from "./smtp";
import { SMTPClient } from "smtp-client";
// import {nodemailer} from "nodemailer";
// const nodemailer = require("nodemailer");

export const sendMail = () => {
  console.log("Sending...");
  Email.send({
    Host: "smtp.elasticemail.com",
        Username: "elenergo34@gmail.com",
        Password: "3E5AC02565E51C89D2B8DB44B11779986186",
        To: "dmitry.kuchenko@yandex.ru",
        From: "elenergo34@gmail.com",
        Subject: "Новый клиент",
        Body: "Последняя проверка qwe"
  }).then((message) => alert("mail sent successfully"));
};

export const sendMailClient = () => {
  let s = new SMTPClient({
    host: "smtp.office365.com",
    port: 587
  });

  (async function () {
    await s.connect();
    await s.greet({ hostname: "smtp.office365.com" }); // runs EHLO command or HELO as a fallback
    await s.authPlain({
      username: "email-host",
      password: "pass"
    }); // authenticates a user
    await s.mail({ from: "email-host" }); // runs MAIL FROM command
    await s.rcpt({ to: "..." }); // runs RCPT TO command (run this multiple times to add more recii)
    await s.data("Hola mundo mail source"); // runs DATA command and streams email source
    await s.quit(); // runs QUIT command
  })().catch(console.error);
};

// export const sendNodemailer = () => {
//   let transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "put_your_username_here",
//       pass: "put_your_password_here"
//     }
//   });
//   const message = {
//     from: "elonmusk@tesla.com", // Sender address
//     to: "to@email.com", // List of recipients
//     subject: "Design Your Model S | Tesla", // Subject line
//     text: "Have the most fun you can in a car. Get your Tesla today!" // Plain text body
//   };
//   transport.sendMail(message, function (err, info) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(info);
//     }
//   });
// };
