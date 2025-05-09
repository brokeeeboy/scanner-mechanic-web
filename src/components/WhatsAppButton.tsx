
import { MessageCircle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton = ({ phoneNumber, message = "Hola, me interesa su servicio de scanner automotriz" }: WhatsAppButtonProps) => {
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
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 bg-black/80 text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Contáctanos
      </span>
    </button>
  );
};

export default WhatsAppButton;
