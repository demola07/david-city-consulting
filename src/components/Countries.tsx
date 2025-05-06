import { motion } from "framer-motion";
import { useState } from "react";
import BookingButton from "@/components/BookingButton";
import BookingForm from "@/components/BookingForm";

const countries = [
  {
    name: "United Kingdom",
    image: "/images/destinations/uk.jpg",
    description: "World-renowned universities with rich academic heritage",
    href: "/study/uk",
  },
  {
    name: "Cyprus",
    image: "/images/destinations/cyprus.jpg",
    description: "Affordable European education in a Mediterranean setting",
    href: "/study/cyprus",
  },
  {
    name: "Australia",
    image: "/images/destinations/australia.jpg",
    description: "Top-ranked universities in vibrant multicultural cities",
    href: "/study/australia",
  },
  {
    name: "USA",
    image: "/images/destinations/usa.jpg",
    description: "Leading research institutions and innovative programs",
    href: "/study/usa",
  },
  {
    name: "Europe",
    image: "/images/destinations/europe.jpg",
    description: "Diverse educational opportunities across historic institutions",
    href: "/study/europe",
  },
  {
    name: "Canada",
    image: "/images/destinations/canada1.jpg",
    description: "World-class education and vibrant multicultural cities",
    href: "/study/canada",
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-xl aspect-w-3 aspect-h-4"
              >
                <a href={country.href} aria-label={`Learn more about studying in ${country.name}`}>
                  <img
                    src={country.image}
                    alt={`Study in ${country.name}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 drop-shadow-lg">{country.name}</h3>
                    <p className="text-white text-base font-medium drop-shadow-md">{country.description}</p>
                  </div>
                </a>
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
