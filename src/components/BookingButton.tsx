import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const BookingButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl flex items-center space-x-2 animate-bounce"
    >
      <Calendar className="w-5 h-5" />
      <span className="font-semibold">Book Appointment</span>
    </motion.button>
  );
};

export default BookingButton;