
import { MessageCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";

const WhatsAppButton = ({ phoneNumber, message = "Hola, me interesa su servicio de scanner automotriz" }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  // Efecto de pulsación automática para llamar la atención
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);

    return () => clearInterval(pulseInterval);
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    toast({
      title: "¡WhatsApp abierto!",
      description: "Te estamos redirigiendo para contactarnos vía WhatsApp.",
    });
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className={`fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 
                  transition-all duration-300 z-50 group
                  ${isAnimating ? 'animate-bounce shadow-green-500/50' : ''}
                  hover:shadow-xl hover:shadow-green-500/30`}
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute -inset-2 bg-green-400 rounded-full opacity-30 blur-md animate-pulse"></div>
      <MessageCircle className="h-6 w-6 relative z-10 group-hover:scale-110 transition-transform" />
      <span 
        className="absolute right-full mr-3 bg-black/80 text-white text-sm py-1 px-3 rounded 
                  opacity-0 group-hover:opacity-100 transition-all duration-300 
                  translate-x-2 group-hover:translate-x-0 whitespace-nowrap"
      >
        Contáctanos
      </span>
    </button>
  );
};

export default WhatsAppButton;
