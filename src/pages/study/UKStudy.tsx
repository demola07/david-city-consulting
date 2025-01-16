import { motion } from "framer-motion";

const UKStudy = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9"
          alt="UK University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Study in the United Kingdom</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Experience world-class education in one of the most historic and culturally rich countries
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Why Study in the UK?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p>World-renowned universities with centuries of academic excellence</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p>Shorter course duration compared to other countries, saving time and money</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p>Diverse multicultural environment with students from around the world</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p>Post-study work opportunities through the Graduate Route visa</p>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625"
              alt="UK University Life"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UKStudy;