
const AboutSection = () => {
  return (
    <section id="nosotros" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-jocars-dark via-black/80 to-jocars-dark z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              ¿POR QUÉ ELEGIRNOS?
            </h2>
            
            <p className="text-gray-300 mb-6">
              En JOCARS nos especializamos en el diagnóstico y reparación de sistemas electrónicos automotrices. Nuestra pasión es entender lo que tu auto quiere decirte y brindar soluciones efectivas.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-jocars-red rounded-full p-2 mr-4">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Experiencia y Profesionalismo</h3>
                  <p className="text-gray-400">Contamos con más de 5 años de experiencia en el diagnóstico automotriz.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-jocars-red rounded-full p-2 mr-4">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Diagnóstico Preciso</h3>
                  <p className="text-gray-400">Equipos de diagnóstico de última generación para identificar el problema con exactitud.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-jocars-red rounded-full p-2 mr-4">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Servicio Garantizado</h3>
                  <p className="text-gray-400">Todos nuestros servicios cuentan con garantía y seguimiento post-reparación.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-jocars-red/20 to-transparent rounded-lg blur-xl opacity-70"></div>
            <div className="relative bg-black/40 backdrop-blur-sm border border-jocars-red/20 rounded-xl overflow-hidden shadow-xl">
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <img 
                    src="/logo jocars normal.jpg" 
                    alt="JOCARS" 
                    className="h-16"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-center text-white mb-6">TU AUTO HABLA Y NOSOTROS LO ENTENDEMOS</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="h-1 w-1 bg-jocars-red rounded-full mr-2"></div>
                    <p className="text-gray-300">Diagnóstico electrónico multimarca</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-1 w-1 bg-jocars-red rounded-full mr-2"></div>
                    <p className="text-gray-300">Soluciones rápidas y efectivas</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-1 w-1 bg-jocars-red rounded-full mr-2"></div>
                    <p className="text-gray-300">Personal certificado y experimentado</p>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="h-1 w-1 bg-jocars-red rounded-full mr-2"></div>
                    <p className="text-gray-300">Servicio a domicilio disponible</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <a href="#contacto" className="btn-primary">
                    Contáctanos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
