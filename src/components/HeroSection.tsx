
import { BarChart2, Car } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="parallax-bg"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-jocars-dark to-jocars-dark z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="gradient-text">DIAGNÓSTICO PROFESIONAL</span>
              <br />PARA TU AUTOMÓVIL
            </h1>
            
            <p className="text-xl text-gray-300">
              Tu auto habla y nosotros lo entendemos. Servicio especializado de diagnóstico mediante scanner automotriz.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#servicios" className="btn-primary">
                <BarChart2 className="mr-2 h-5 w-5" />
                Nuestros Servicios
              </a>
              
              <a href="#contacto" className="btn-outline">
                <Car className="mr-2 h-5 w-5" />
                Agendar Diagnóstico
              </a>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div>
                <p className="text-4xl font-bold text-jocars-red">5+</p>
                <p className="text-sm text-gray-400">Años de experiencia</p>
              </div>
              
              <div>
                <p className="text-4xl font-bold text-jocars-red">500+</p>
                <p className="text-sm text-gray-400">Vehículos diagnosticados</p>
              </div>
              
              <div>
                <p className="text-4xl font-bold text-jocars-red">100%</p>
                <p className="text-sm text-gray-400">Clientes satisfechos</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-jocars-red/20 blur-2xl rounded-full animate-pulse-slow"></div>
              <img 
                src="/jocars-logo-new.jpg" 
                alt="JOCARS Logo" 
                className="relative z-10 h-96 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <a 
          href="#servicios" 
          className="flex flex-col items-center text-white hover:text-jocars-red transition-colors"
          aria-label="Ver más"
        >
          <span className="text-sm font-medium mb-2">Ver Más</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-current rounded-full animate-bounce mt-1"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
