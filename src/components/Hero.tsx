
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ExternalLink } from "lucide-react";
import * as React from 'react';

const HERO_IMAGES = [
  '/images/hero/hero1.jpg',
  '/images/hero/hero2.jpg',
  '/images/hero/hero3.jpg',
  '/images/hero/hero4.jpg',
  '/images/hero/hero5.jpg',
  '/images/hero/hero6.jpg'
];

// Add custom styles for the navigation arrows with improved visibility
const customSwiperStyles = `
  .hero-swiper .swiper-button-next,
  .hero-swiper .swiper-button-prev {
    color: white;
    background: rgba(0, 0, 0, 0.5);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 50;
    transition: all 0.3s ease;
  }
  
  .hero-swiper .swiper-button-next:hover,
  .hero-swiper .swiper-button-prev:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: scale(1.05);
  }
  
  .hero-swiper .swiper-button-next:after,
  .hero-swiper .swiper-button-prev:after {
    font-size: 22px;
  }
  
  .hero-swiper .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: white;
    opacity: 0.7;
    transition: all 0.3s ease;
  }
  
  .hero-swiper .swiper-pagination-bullet-active {
    background: white;
    opacity: 1;
    transform: scale(1.2);
  }
`;

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Add custom styles */}
      <style>{customSwiperStyles}</style>
      
      {/* Swiper Carousel Container */}
      <div className="absolute inset-0 z-10">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          effect="fade"
          speed={1500}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ 
            clickable: true,
          }}
          grabCursor={true}
          simulateTouch={true}
          className="w-full h-full hero-swiper"
        >
          {HERO_IMAGES.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={src}
                  alt={`Hero background ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Text Content - Increased z-index to be above Swiper navigation */}
      <div className="container relative z-[30] px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-5 py-2 mb-6 text-sm font-bold tracking-wider bg-[#8B5CF6] text-white rounded-full shadow-lg uppercase">
              Your Journey Begins Here
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Global Education <span className="text-[#8B5CF6] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">&</span> Tourism at its Peak
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Expert guidance for studying abroad, tourism and educational services tailored to your dreams and aspirations
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button 
              size="lg"
              onClick={scrollToServices}
              className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-xl transition-all hover:translate-y-[-2px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              Get Started
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <a 
              href="https://forms.gle/zbwtdTnGrh1HQJj17" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold transition-all h-[52px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              Become a Tutor
              <ExternalLink className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scrolldown indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        onClick={scrollToServices}
        style={{ cursor: 'pointer' }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2 font-medium">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ 
                y: [0, 15, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
