import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar campos requeridos
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios marcados con *",
        variant: "destructive"
      });
      return;
    }

    // Crear el contenido del email
    const emailSubject = `Consulta JOCARS - ${formData.name}`;
    
    const emailBody = `Hola JOCARS,

Mi nombre es ${formData.name} y me gustaría contactarlos para una consulta.

INFORMACIÓN DE CONTACTO:
- Nombre: ${formData.name}
- Email: ${formData.email}
- Teléfono: ${formData.phone || 'No proporcionado'}
- Vehículo: ${formData.car || 'No especificado'}

MENSAJE:
${formData.message}

---
Este mensaje fue generado desde el formulario de contacto de jocars.cl

Saludos cordiales,
${formData.name}`;

    // Crear el enlace mailto
    const mailtoLink = `mailto:jocarscl@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Abrir el cliente de email
    window.location.href = mailtoLink;

    // Mostrar mensaje de éxito
    toast({
      title: "¡Cliente de email abierto!",
      description: "Se ha abierto tu cliente de email con el mensaje pre-llenado. Solo tienes que enviarlo.",
    });

    // Limpiar formulario después de un momento
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        car: "",
        message: ""
      });
    }, 1000);
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
          className="btn-primary w-full flex justify-center items-center"
        >
          📧 Abrir mi Email
        </button>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Los campos marcados con <span className="text-jocars-yellow">*</span> son obligatorios
        </p>
        
        <p className="text-gray-500 text-xs mt-2 text-center">
          Al hacer clic se abrirá tu cliente de email con el mensaje pre-llenado
        </p>
      </form>
    </div>
  );
};

export default ContactForm;