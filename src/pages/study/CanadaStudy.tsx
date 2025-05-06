import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const CanadaStudy = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/images/destinations/canada1.jpg"
          alt="Canada Cityscape"
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
              World-class education, multicultural cities, and breathtaking landscapes await you in Canada.
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
                <p>Top-ranked universities and colleges recognized globally</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p>Safe, welcoming, and multicultural environment</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p>Work opportunities during and after your studies</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p>Stunning natural beauty and vibrant city life</p>
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
              src="/images/destinations/canada2.jpg"
              alt="Canada Night Skyline"
              className="w-full h-[400px] object-cover"
            />
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

      </section>
    </div>
  );
};

export default CanadaStudy; 