import { motion } from "framer-motion";

const EuropeStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b"
            alt="Europe Education"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Study in Europe</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Experience world-class education in the heart of cultural diversity
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Study in Europe?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg bg-white"
            >
              <h3 className="text-xl font-semibold mb-4">Cultural Diversity</h3>
              <p>Experience diverse cultures and languages in the heart of Europe.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg bg-white"
            >
              <h3 className="text-xl font-semibold mb-4">Academic Excellence</h3>
              <p>Access to some of the world's oldest and most prestigious universities.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg bg-white"
            >
              <h3 className="text-xl font-semibold mb-4">Travel Opportunities</h3>
              <p>Easy access to multiple countries and cultural experiences.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EuropeStudy;