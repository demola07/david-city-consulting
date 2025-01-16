import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-primary-500 bg-white rounded-full">
            Your Journey Begins Here
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Future with International Education
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Expert guidance for studying abroad, tourism, and educational services
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:bg-primary-hover transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;