import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const transporter = nodemailer.createTransport({
    host: "ssl0.ovh.net",
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const body = await readBody(event);

  try {
    await transporter.sendMail({
      from: `'${body.name}' <${body.email}>`,
      to: process.env.EMAIL_TO,
      subject: "Formularz kontaktowy",
      html: `
        <b>Imię i nazwisko</b>
        <p>${body.name}</p><br />
        <b>Wiadomość</b>
        <p>${body.message}</p>
        `,
    });
    return {};
  } catch (error) {
    return error;
  }
});
