import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // Configurar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Manejar preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Solo permitir métodos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { name, email, phone, car, message } = req.body;

  // Validar campos requeridos
  if (!name || !email || !message) {
    return res.status(400).json({ 
      error: 'Faltan campos requeridos: nombre, email y mensaje son obligatorios' 
    });
  }

  // Validar que existe la API key
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY no está configurada');
    return res.status(500).json({ 
      error: 'Error de configuración del servidor' 
    });
  }

  try {
    const emailData = await resend.emails.send({
      from: 'JOCARS <onboarding@resend.dev>', // Usar el dominio por defecto de Resend
      to: ['jocarscl@gmail.com'], // Email donde quieres recibir los mensajes
      subject: `Nuevo mensaje de contacto - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FFCC00; border-bottom: 2px solid #FFCC00; padding-bottom: 10px;">
            Nuevo mensaje desde JOCARS
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Información del contacto:</h3>
            
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
            <p><strong>Vehículo:</strong> ${car || 'No especificado'}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #FFCC00; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #11101a; color: white; border-radius: 8px;">
            <p style="margin: 0;">Este mensaje fue enviado desde el formulario de contacto de JOCARS</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #ccc;">
              Fecha: ${new Date().toLocaleString('es-CL')}
            </p>
          </div>
        </div>
      `,
    });

    console.log('Email enviado exitosamente:', emailData);
    
    return res.status(200).json({ 
      success: true, 
      message: 'Mensaje enviado correctamente',
      id: emailData.data?.id 
    });

  } catch (error: any) {
    console.error('Error al enviar email:', error);
    
    // Proporcionar más detalles del error para debugging
    const errorMessage = error?.message || 'Error desconocido';
    const errorCode = error?.code || 'UNKNOWN_ERROR';
    
    return res.status(500).json({ 
      error: 'Error al enviar el email',
      details: process.env.NODE_ENV === 'development' ? {
        message: errorMessage,
        code: errorCode,
        stack: error?.stack
      } : undefined
    });
  }
}