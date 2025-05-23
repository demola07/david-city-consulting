import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

interface DestinationInfo {
  name: string;
  description: string;
  highlights: string[];
  images: string[];
}

interface DestinationCarouselProps {
  destination: DestinationInfo;
}

const DestinationCarousel = ({ destination }: DestinationCarouselProps) => {
  const navigationPrevRef = React.useRef<HTMLButtonElement>(null);
  const navigationNextRef = React.useRef<HTMLButtonElement>(null);
  
  return (
    <Card className="overflow-hidden bg-white shadow-lg rounded-xl">
      <div className="relative">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ 
            delay: 5000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          loop={true}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          touchRatio={1.5}
          resistance={true}
          resistanceRatio={0.85}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== 'boolean') {
              const navigation = swiper.params.navigation;
              if (navigation) {
                navigation.prevEl = navigationPrevRef.current;
                navigation.nextEl = navigationNextRef.current;
              }
            }
          }}
          className="w-full"
        >
          {destination.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-64 md:h-80">
                <img 
                  src={image} 
                  alt={`${destination.name} - Image ${index + 1}`} 
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <Button 
          ref={navigationPrevRef}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 h-10 w-10 rounded-full bg-white/60 hover:bg-white/80 text-gray-800 backdrop-blur-sm z-10 hidden md:flex"
          variant="ghost"
          size="icon"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button 
          ref={navigationNextRef}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 h-10 w-10 rounded-full bg-white/60 hover:bg-white/80 text-gray-800 backdrop-blur-sm z-10 hidden md:flex"
          variant="ghost"
          size="icon"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900">{destination.name}</h3>
        <p className="mt-2 text-gray-600">{destination.description}</p>
        
        <div className="mt-4">
          <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
          <ul className="space-y-1">
            {destination.highlights.map((highlight, index) => (
              <li 
                key={index}
                className="flex items-center space-x-2"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <a 
            href="https://forms.gle/ou5TYYPN9z2zCiW16"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 flex items-center justify-center gap-2 py-4 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02]">
              <Globe className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Book This Destination</span>
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
    </Card>
  );
};

export default DestinationCarousel;
