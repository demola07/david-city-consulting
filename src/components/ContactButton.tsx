import { MessageSquare, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const ContactButton = () => {
  const location = useLocation();
  const path = location.pathname;

  // Only show button on these routes (same as BookingButton)
  if (!['/', '/tourism-conferences', '/study/australia', '/study/canada', '/study/europe', '/study/uk', '/study/usa', '/tutorials'].includes(path)) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 left-8 z-50 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl flex items-center space-x-2 animate-bounce"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="font-semibold">Contact Us</span>
        </motion.button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[70%!important] max-w-[70%!important] overflow-y-auto mx-auto">
        <SheetHeader>
          <SheetTitle>Contact Us</SheetTitle>
          <SheetDescription>
            Choose your preferred messaging platform to get in touch with us.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          <Button
            onClick={() => window.open('https://wa.me/YOUR_WHATSAPP_NUMBER', '_blank')}
            className="w-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center gap-2 h-12"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </Button>
          <Button
            onClick={() => window.open('https://t.me/YOUR_TELEGRAM_USERNAME', '_blank')}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2 h-12"
          >
            <Send className="w-5 h-5" />
            Chat on Telegram
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ContactButton;