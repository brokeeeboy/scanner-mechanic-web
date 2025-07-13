import { Phone, MessageCircle, MessageSquare } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {

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
          <ContactForm />
          
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
                    <a href="tel:+56937002417" className="text-gray-300 hover:text-jocars-yellow transition-colors">+56 9 3700 2417</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-jocars-yellow rounded-full p-3 mr-4">
                    <MessageCircle className="h-5 w-5 text-jocars-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Correo Electrónico</h4>
                    <a href="mailto:jocarscl@gmail.com" className="text-gray-300 hover:text-jocars-yellow transition-colors">jocarscl@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-jocars-yellow rounded-full p-3 mr-4">
                    <MessageSquare className="h-5 w-5 text-jocars-dark" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">WhatsApp</h4>
                    <a href="https://wa.me/56937002417" className="text-gray-300 hover:text-jocars-yellow transition-colors">+56 9 3700 2417</a>
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
                  <p className="text-gray-500 font-medium">No atendemos</p>
                </div>
              </div>
              
              <div className="mt-6">
                <p className="text-gray-400 text-sm">
                  Ofrecemos servicios a domicilio y atención de emergencias previa coordinación.
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
