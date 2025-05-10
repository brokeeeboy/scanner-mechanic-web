
import { BarChart2, Wrench, Car, Settings } from "lucide-react";
import { useEffect, useRef } from "react";

const ServicesSection = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
  // Función para animación de entrada con intersección observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Aplicar las clases de animación a cada tarjeta
          const cards = document.querySelectorAll('.service-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-in');
            }, index * 150); // Efecto escalonado
          });
        }
      });
    }, { threshold: 0.2 });
    
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <BarChart2 className="h-12 w-12" />,
      title: "Diagnóstico por Scanner",
      description: "Lectura completa de códigos de error del vehículo mediante equipos de diagnóstico profesionales."
    },
    {
      icon: <Wrench className="h-12 w-12" />,
      title: "Reparación Electrónica",
      description: "Solución de problemas relacionados con la electrónica y sistemas computarizados de tu automóvil."
    },
    {
      icon: <Car className="h-12 w-12" />,
      title: "Mantenimiento Preventivo",
      description: "Detección temprana de posibles fallas para prevenir daños mayores en tu vehículo."
    },
    {
      icon: <Settings className="h-12 w-12" />,
      title: "Reprogramación ECU",
      description: "Actualización y reprogramación de la unidad de control electrónico para un rendimiento óptimo."
    }
  ];

  return (
    <section id="servicios" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="relative overflow-hidden pb-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              NUESTROS SERVICIOS
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-jocars-yellow/0 via-jocars-yellow to-jocars-yellow/0 transform translate-y-1 animate-pulse"></div>
            </h2>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            En JOCARS ofrecemos servicios especializados de diagnóstico y solución de problemas para tu vehículo utilizando equipos de última tecnología.
          </p>
        </div>
        
        <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card opacity-0 translate-y-8 transition-all duration-700"
            >
              <div className="service-icon group animate-float">
                {service.icon}
                <div className="absolute -inset-2 bg-jocars-yellow/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 blur-md"></div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-jocars-yellow relative z-10">{service.title}</h3>
              
              <p className="text-gray-300 mb-4 relative z-10 flex-grow">{service.description}</p>
              
              <a href="#contacto" className="inline-flex items-center text-jocars-yellow hover:text-yellow-400 transition-colors relative z-10 group">
                <span className="group-hover:translate-x-1 transition-transform duration-300">Saber más</span>
                <svg 
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
