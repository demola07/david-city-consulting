import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const CyprusStudy = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[60vh] overflow-hidden">
        <img
          // Replace with a relevant Cyprus image URL if available
          src="https://images.unsplash.com/photo-1589098165169-c54f1a7650c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Cyprus Coastal University View" // Updated Alt Text
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Study in Cyprus</h1> // Updated Title
            <p className="text-xl max-w-2xl mx-auto">
              Affordable European education in a beautiful Mediterranean setting // Updated Subtitle
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
            <h2 className="text-3xl font-bold mb-6">Why Study in Cyprus?</h2> // Updated Section Title
            {/* Updated Benefit Points */}
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p>Affordable tuition fees and living costs compared to mainland Europe</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p>High standard of education with programs taught in English</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p>Safe, sunny Mediterranean lifestyle with rich history and culture</p>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                <p>Gateway to Europe with opportunities for travel and exploration</p>
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
              // Replace with another relevant Cyprus image URL if available
              src="https://images.unsplash.com/photo-1600956968781-TR748d5c40f1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cyprus Historical Site near Coast" // Updated Alt Text
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

export default CyprusStudy; 