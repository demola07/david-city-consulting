
import { Whatsapp, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const FloatingContactButtons = () => {
  // WhatsApp and Telegram contact information
  const whatsappNumber = "+2348077157332";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`;
  const telegramLink = "https://t.me/Davidcity01";

  return (
    <motion.div 
      className="fixed bottom-6 right-6 flex flex-col gap-3 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <TooltipProvider>
        {/* WhatsApp Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
              aria-label="Contact us on WhatsApp"
            >
              <Whatsapp size={24} />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat on WhatsApp</p>
          </TooltipContent>
        </Tooltip>

        {/* Telegram Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <a 
              href={telegramLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0088cc] hover:bg-[#0077b5] text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110"
              aria-label="Contact us on Telegram"
            >
              <MessageCircle size={24} />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat on Telegram</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};

export default FloatingContactButtons;
