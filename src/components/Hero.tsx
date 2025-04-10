import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from "framer-motion";
import * as React from 'react';

const HERO_IMAGES = [
  '/images/hero/hero1.jpg',
  '/images/hero/hero2.jpg',
  '/images/hero/hero3.jpg',
  '/images/hero/hero4.jpg',
  '/images/hero/hero5.jpg'
];

// Add custom styles for the navigation arrows
const customSwiperStyles = `
  .hero-swiper .swiper-button-next,
  .hero-swiper .swiper-button-prev {
    color: white;
    background: rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
  }
  
  .hero-swiper .swiper-button-next:after,
  .hero-swiper .swiper-button-prev:after {
    font-size: 20px;
  }
  
  .hero-swiper .swiper-pagination-bullet {
    background: white;
    opacity: 0.7;
  }
  
  .hero-swiper .swiper-pagination-bullet-active {
    background: white;
    opacity: 1;
  }
`;

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={{
            enabled: true,
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{ 
            clickable: true,
            el: '.swiper-pagination'
          }}
          grabCursor={true}
          simulateTouch={true}
          className="w-full h-full hero-swiper"
        >
          {HERO_IMAGES.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Hero background ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
          
          {/* Explicitly add navigation buttons */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          
          {/* Explicitly add pagination */}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
      
      {/* Overlay - Keep it above the images but below the navigation */}
      <div className="absolute inset-0 z-[11] bg-black/60 pointer-events-none" />
      
      {/* Text Content - Increased z-index to be above Swiper navigation */}
      <div className="container relative z-[30] px-4 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold bg-primary text-white rounded-full shadow-lg pointer-events-auto">
            Your Journey Begins Here
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Global Education and tourism at its peak.
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 drop-shadow-md">
            The expert guidance for studying abroad, tourism and educational services
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold rounded-lg shadow-xl transition-colors pointer-events-auto"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;