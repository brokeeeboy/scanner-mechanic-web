
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-jocars-dark/90 backdrop-blur-sm py-2 shadow-lg" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/faedce22-0a8c-48e3-b8f8-d065792939e8.png" 
            alt="JOCARS" 
            className="h-12 md:h-14"
          />
        </a>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-white hover:text-jocars-yellow transition-colors">Inicio</a>
          <a href="#servicios" className="text-white hover:text-jocars-yellow transition-colors">Servicios</a>
          <a href="#nosotros" className="text-white hover:text-jocars-yellow transition-colors">Nosotros</a>
          <a href="#contacto" className="text-white hover:text-jocars-yellow transition-colors">Contacto</a>
          <a 
            href="#contacto" 
            className="btn-primary"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Agendar Cita
          </a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-jocars-dark/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#inicio" className="text-white hover:text-jocars-yellow transition-colors py-2 border-b border-jocars-yellow/20" onClick={() => setIsMenuOpen(false)}>Inicio</a>
              <a href="#servicios" className="text-white hover:text-jocars-yellow transition-colors py-2 border-b border-jocars-yellow/20" onClick={() => setIsMenuOpen(false)}>Servicios</a>
              <a href="#nosotros" className="text-white hover:text-jocars-yellow transition-colors py-2 border-b border-jocars-yellow/20" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
              <a href="#contacto" className="text-white hover:text-jocars-yellow transition-colors py-2 border-b border-jocars-yellow/20" onClick={() => setIsMenuOpen(false)}>Contacto</a>
              <a href="#contacto" className="btn-primary" onClick={() => setIsMenuOpen(false)}>
                Agendar Cita
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
