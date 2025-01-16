import { motion } from "framer-motion";

const CanadaStudy = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1569534403589-5a5f4b0e4f8d"
          alt="Canadian University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Study in Canada</h1>
            <p className="text-xl max-w-2xl mx-auto">
              High-quality education and excellent post-graduation opportunities in a welcoming country
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
            <h2 className="text-3xl font-bold mb-6">Why Study in Canada?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p>Affordable education with high academic standards</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p>Post-graduation work permit for up to 3 years</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p>Safe and welcoming environment for international students</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p>Bilingual country with opportunities to learn French</p>
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
              src="https://images.unsplash.com/photo-1569534402275-9f6c7209f7c5"
              alt="Canadian Campus Life"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CanadaStudy;