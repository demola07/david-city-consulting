import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const USAStudy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694"
            alt="Study in USA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Study in USA</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Unlock endless possibilities with American higher education
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Study in USA?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg bg-white"
            >
              <h3 className="text-xl font-semibold mb-4">Academic Excellence</h3>
              <p>Home to many of the world's top-ranked universities and programs.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg bg-white"
            >
              <h3 className="text-xl font-semibold mb-4">Research Opportunities</h3>
              <p>Access to cutting-edge research facilities and opportunities.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg shadow-lg bg-white"
            >
              <h3 className="text-xl font-semibold mb-4">Career Prospects</h3>
              <p>Strong connections to industry leaders and global corporations.</p>
            </motion.div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">Click below to begin your application process.</p>
            <div className="flex justify-center">
              <a 
                href="https://forms.gle/M7j54aidfz3LmAnv8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs group"
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 flex items-center justify-center gap-2 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02]">
                  <GraduationCap className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Start Your Application</span>
                  <svg 
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default USAStudy;