
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);
  
  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);
  
  return (
    <Card className="overflow-hidden bg-white shadow-lg rounded-xl">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {destination.images.map((image, index) => (
              <div className="flex-[0_0_100%] min-w-0" key={index}>
                <div className="relative h-64 md:h-80">
                  <img 
                    src={image} 
                    alt={`${destination.name} - Image ${index + 1}`} 
                    className="absolute w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <Button 
          onClick={scrollPrev} 
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 h-10 w-10 rounded-full bg-white/60 hover:bg-white/80 text-gray-800 backdrop-blur-sm z-10"
          variant="ghost"
          size="icon"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button 
          onClick={scrollNext} 
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 h-10 w-10 rounded-full bg-white/60 hover:bg-white/80 text-gray-800 backdrop-blur-sm z-10"
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
      </div>
    </Card>
  );
};

export default DestinationCarousel;
