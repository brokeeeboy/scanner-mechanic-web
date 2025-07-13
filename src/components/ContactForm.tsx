import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  car: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    car: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Configuración de EmailJS
      const serviceId = 'service_jocars'; // Reemplaza con tu Service ID
      const templateId = 'template_jocars'; // Reemplaza con tu Template ID
      const publicKey = 'tu_public_key_aqui'; // Reemplaza con tu Public Key

      // Parámetros del template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'No proporcionado',
        car: formData.car || 'No especificado',
        message: formData.message,
        to_email: 'jocarscl@gmail.com', // Tu email donde quieres recibir los mensajes
      };

      // Enviar email usando EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "¡Mensaje enviado exitosamente!",
        description: "Gracias por contactarnos. Te responderemos a la brevedad.",
      });

      // Limpiar formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        car: "",
        message: ""
      });

    } catch (error: any) {
      console.error("Error al enviar mensaje:", error);
      
      toast({
        title: "Error al enviar mensaje",
        description: "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente o contáctanos por WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black/40 backdrop-blur-sm border border-jocars-yellow/20 rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-white">Envíanos un mensaje</h3>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-2">
              Nombre <span className="text-jocars-yellow">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-jocars-dark border border-jocars-yellow/30 rounded-lg p-3 text-white focus:outline-none focus:border-jocars-yellow transition-colors"
              placeholder="Tu nombre completo"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-2">
              Correo Electrónico <span className="text-jocars-yellow">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-jocars-dark border border-jocars-yellow/30 rounded-lg p-3 text-white focus:outline-none focus:border-jocars-yellow transition-colors"
              placeholder="tu@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="phone" className="block text-gray-300 mb-2">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-jocars-dark border border-jocars-yellow/30 rounded-lg p-3 text-white focus:outline-none focus:border-jocars-yellow transition-colors"
              placeholder="+56 9 1234 5678"
            />
          </div>

          <div>
            <label htmlFor="car" className="block text-gray-300 mb-2">Vehículo</label>
            <input
              type="text"
              id="car"
              name="car"
              value={formData.car}
              onChange={handleChange}
              className="w-full bg-jocars-dark border border-jocars-yellow/30 rounded-lg p-3 text-white focus:outline-none focus:border-jocars-yellow transition-colors"
              placeholder="Ej: Toyota Corolla 2020"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Mensaje <span className="text-jocars-yellow">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-jocars-dark border border-jocars-yellow/30 rounded-lg p-3 text-white focus:outline-none focus:border-jocars-yellow transition-colors resize-none"
            placeholder="Describe tu consulta o el problema que tienes con tu vehículo..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-jocars-dark" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando mensaje...
            </>
          ) : (
            "Enviar Mensaje"
          )}
        </button>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Los campos marcados con <span className="text-jocars-yellow">*</span> son obligatorios
        </p>
      </form>
    </div>
  );
};

export default ContactForm;