import { motion } from "framer-motion";
import BookingButton from "@/components/BookingButton";
import BookingForm from "@/components/BookingForm";
import { useState } from "react";

const countries = [
  {
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    description: "World-renowned universities with rich academic heritage",
  },
  {
    name: "Canada",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    description: "High quality education with excellent post-study opportunities",
  },
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    description: "Top-ranked universities in vibrant multicultural cities",
  },
];

const Countries = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="text-center mb-16">
            <span className="text-[#8B5CF6] font-semibold">Featured Destinations</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">Study Abroad Destinations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-xl"
              >
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">{country.name}</h3>
                  <p className="text-white text-base font-medium drop-shadow-md">{country.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BookingButton onClick={() => setIsBookingOpen(true)} />
      <BookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default Countries;
