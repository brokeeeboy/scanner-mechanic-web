
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/60 backdrop-blur-sm border-t border-jocars-yellow/20 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="inline-block mb-6">
              <img 
                src="/logo jocars 2.jpg" 
                alt="JOCARS" 
                className="h-10"
              />
            </a>
            
            <p className="text-gray-400 mb-6">
              Servicio de diagnóstico automotriz especializado. Tu auto habla y nosotros lo entendemos.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-jocars-yellow transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              
              <a href="https://www.instagram.com/jocars.cl/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-jocars-red transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              
              <a href="#" className="text-gray-400 hover:text-jocars-red transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Enlaces Rápidos</h3>
            
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-jocars-red transition-colors">Inicio</a>
              </li>
              
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-jocars-red transition-colors">Servicios</a>
              </li>
              
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-jocars-red transition-colors">Nosotros</a>
              </li>
              
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-jocars-red transition-colors">Contacto</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Servicios</h3>
            
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-jocars-red transition-colors">Diagnóstico por Scanner</a>
              </li>
              
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-jocars-red transition-colors">Inspección Pre-Compra</a>
              </li>
              
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-jocars-red transition-colors">Mantenimiento Preventivo</a>
              </li>
              
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-jocars-red transition-colors">Regeneración DPF</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
            
            <address className="not-italic text-gray-400 space-y-3">
              <p>Región Metropolitana</p>
              
              <p>Teléfono: <a href="tel:+123456789" className="hover:text-jocars-yellow transition-colors">+56 9 3700 2417</a></p>
              <p>Teléfono: <a href="tel:+123456789" className="hover:text-jocars-red transition-colors">+56 9 3700 2417</a></p>
              <p>Email: <a href="mailto:contacto@jocars.com" className="hover:text-jocars-red transition-colors">jocarscl@gmail.com</a></p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} JOCARS. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-jocars-red transition-colors text-sm">Política de Privacidad</a>
            <a href="#" className="text-gray-500 hover:text-jocars-red transition-colors text-sm">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
