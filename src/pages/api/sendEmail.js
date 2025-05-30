// pages/api/sendEmail.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { name, email, phone, car, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Faltan campos requeridos." });
  }

  try {
    const data = await resend.emails.send({
      from: "Formulario Jocars <form@tu-dominio-verificado.com>",
      to: "tucorreo@ejemplo.com",
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Vehículo:</strong> ${car}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return res.status(500).json({ error: "Error al enviar el correo" });
  }
}
