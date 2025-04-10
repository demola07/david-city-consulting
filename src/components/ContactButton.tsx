import { MessageSquare, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
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
  const isMobile = useIsMobile();

  if (!['/', '/tourism-conferences', '/study/australia', '/study/canada', '/study/europe', '/study/uk', '/study/usa', '/tutorials'].includes(path)) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`fixed bottom-8 left-4 z-50 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center ${
            isMobile ? 'w-12 h-12 p-0' : 'px-6 py-4 space-x-2'
          } animate-bounce`}
        >
          <MessageSquare className={`${isMobile ? 'w-5 h-5' : 'w-5 h-5'}`} />
          {!isMobile && <span className="font-semibold">Contact Us</span>}
        </motion.button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[400px] max-w-[90vw] sm:w-[350px]">
        <SheetHeader className="text-center">
          <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
            Get in Touch
          </SheetTitle>
          <SheetDescription className="text-sm text-gray-600">
            We're here to help! Choose your preferred platform
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 space-y-4 px-2">
          <Button
            onClick={() => window.open('https://wa.me/+2348162495328', '_blank')}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white flex items-center justify-center gap-3 h-14 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="font-medium">WhatsApp</span>
          </Button>
          <Button
            onClick={() => window.open('https://t.me/Davidcity01', '_blank')}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white flex items-center justify-center gap-3 h-14 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Send className="w-6 h-6" />
            <span className="font-medium">Telegram</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ContactButton;