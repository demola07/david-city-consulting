import { GraduationCap, Globe, Book } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad",
    description: "Expert guidance for international education in top destinations worldwide.",
  },
  {
    icon: Globe,
    title: "Tourism",
    description: "Discover amazing destinations and create unforgettable memories.",
  },
  {
    icon: Book,
    title: "Tutorials",
    description: "Professional tutoring for IELTS, entrance exams, and academic subjects.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">What We Offer</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;