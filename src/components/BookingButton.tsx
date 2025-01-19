import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const BookingButton = ({ onClick }: { onClick: () => void }) => {
  const location = useLocation();
  const path = location.pathname;
  const isMobile = useIsMobile();

  // Only show button on these routes
  if (!['/', '/tourism-conferences', '/study/australia', '/study/canada', '/study/europe', '/study/uk', '/study/usa', '/tutorials'].includes(path)) {
    return null;
  }

  // Show "Book Tutorial" only on tutorials page
  const buttonText = path === '/tutorials' ? 'Book Tutorial' : 'Book Appointment';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`fixed bottom-8 right-4 z-50 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center ${
        isMobile ? 'w-12 h-12 p-0' : 'px-6 py-4 space-x-2'
      } animate-bounce`}
    >
      <Calendar className={`${isMobile ? 'w-5 h-5' : 'w-5 h-5'}`} />
      {!isMobile && <span className="font-semibold">{buttonText}</span>}
    </motion.button>
  );
};

export default BookingButton;