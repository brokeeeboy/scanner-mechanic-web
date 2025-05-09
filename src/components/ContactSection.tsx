
import { useState } from "react";
import { Phone, MessageCircle, Whatsapp } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Te responderemos a la brevedad.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        car: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">CONTÁCTANOS</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            ¿Tienes preguntas o necesitas agendar un diagnóstico? Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-black/40 backdrop-blur-sm border border-jocars-yellow/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Envíanos un mensaje</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-jocars-dark border border-jocars-yellow/30 rounded-lg p-3 text-white focus:outline-none focus:border-jocars-yellow"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-jocars-dark border border-jocars-yellow/30 rounded-lg p-3 text-white focus:outline-none focus:border-jocars-yellow"
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
                    required
                    className="w-full bg-jocars-dark border border-jocars-yellow/30 rounded-lg p-3 text-white focus:outline-none focus:border-jocars-yellow"
                  />
                </div>
                
                <div>
                  <label htmlFor="car" className="block text-gray-300 mb-2">Vehículo (Marca, Modelo, Año)</label>
                  <input
                    type="text"
                    id="car"
                    name="car"
                    value={formData.car}
                    onChange={handleChange}
                    className="w-full bg-jocars-dark border border-jocars-yellow/30 rounded-lg p-3 text-white focus:outline-none focus:border-jocars-yellow"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-jocars-dark border border-jocars-yellow/30 rounded-lg p-3 text-white focus:outline-none focus:border-jocars-yellow"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-jocars-dark" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensaje"
                )}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-jocars-yellow rounded-full p-3 mr-4">
                    <Phone className="h-5 w-5 text-jocars-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Teléfono</h4>
                    <a href="tel:+123456789" className="text-gray-300 hover:text-jocars-yellow transition-colors">+1 (234) 567-890</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-jocars-yellow rounded-full p-3 mr-4">
                    <MessageCircle className="h-5 w-5 text-jocars-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Correo Electrónico</h4>
                    <a href="mailto:contacto@jocars.com" className="text-gray-300 hover:text-jocars-yellow transition-colors">contacto@jocars.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-jocars-yellow rounded-full p-3 mr-4">
                    <Whatsapp className="h-5 w-5 text-jocars-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">WhatsApp</h4>
                    <a href="https://wa.me/123456789" className="text-gray-300 hover:text-jocars-yellow transition-colors">+1 (234) 567-890</a>
                    <p className="text-gray-400 text-sm mt-1">Disponible de 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm border border-jocars-yellow/20 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-white">Horario de Atención</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <p className="text-gray-300">Lunes - Viernes</p>
                  <p className="text-jocars-yellow font-medium">8:00 AM - 8:00 PM</p>
                </div>
                
                <div className="flex justify-between">
                  <p className="text-gray-300">Sábados</p>
                  <p className="text-jocars-yellow font-medium">9:00 AM - 5:00 PM</p>
                </div>
                
                <div className="flex justify-between">
                  <p className="text-gray-300">Domingos</p>
                  <p className="text-gray-500 font-medium">Cerrado</p>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-gray-400 text-sm">
                  También ofrecemos servicios a domicilio y atención de emergencias previa coordinación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
