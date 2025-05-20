
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Contact Us</h2>
        </div>
        
        <div className="max-w-3xl mx-auto"> 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8 bg-white p-8 rounded-xl shadow-md"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-gray-600">+2348077157332</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-600">davidcityconsulting247@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Address</h3>
                <p className="text-gray-600 leading-relaxed">
                  RC3X+373, Loburo 110113, Ogun State<br />
                  Located at: Lagos - Ibadan Expy, Pakuro 110113, Ogun State
                </p>
                <a 
                  href="https://maps.app.goo.gl/QY7K7QLaiq2cUTKr5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  <span>View on Google Maps</span>
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
