import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const BookingButton = ({ onClick }: { onClick: () => void }) => {
  const location = useLocation();
  const path = location.pathname;

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
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl flex items-center space-x-2 animate-bounce"
    >
      <Calendar className="w-5 h-5" />
      <span className="font-semibold">{buttonText}</span>
    </motion.button>
  );
};

export default BookingButton;