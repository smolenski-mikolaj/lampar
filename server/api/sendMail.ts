import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const body = await readBody(event);

  try {
    await transporter.sendMail({
      from: `'LAMPAR.COM.PL' <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Formularz kontaktowy",
      html: `
        <b>Imię i nazwisko</b>
        <p>${body.name}</p><br />
        <b>Email</b>
        <p>${body.email}</p><br />
        <b>Wiadomość</b>
        <p>${body.message}</p>
        `,
    });
    return {};
  } catch (error) {
    return error;
  }
});
