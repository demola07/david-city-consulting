import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const destinations = [
  {
    title: "United Kingdom",
    href: "/study/uk",
    description: "World-class education with rich cultural heritage"
  },
  {
    title: "Canada",
    href: "/study/canada",
    description: "High-quality education in a multicultural environment"
  },
  {
    title: "Europe",
    href: "/study/europe",
    description: "Diverse educational opportunities across historic institutions"
  },
  {
    title: "Australia",
    href: "/study/australia",
    description: "Top-ranked universities in a vibrant setting"
  },
  {
    title: "USA",
    href: "/study/usa",
    description: "Leading research institutions and innovative programs"
  }
];

const tourismDestinations = [
  {
    title: "Paris, France",
    description: "Experience the city of lights and romance",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027"
  },
  {
    title: "Tokyo, Japan",
    description: "Immerse in culture and technology",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716"
  },
  {
    title: "Dubai, UAE",
    description: "Luxury conferences and modern architecture",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67"
  },
  {
    title: "Singapore",
    description: "Leading business conference destination",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
  }
];

const Navigation = () => {
  return (
    <NavigationMenu className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-2xl text-[#8B5CF6] transition-colors duration-200">
          Study Abroad
        </Link>
        
        <div className="flex items-center space-x-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="bg-[#8B5CF6] text-white font-medium px-6 py-2 rounded-full shadow-md transition-transform duration-200 active:scale-95"
              >
                Study Destinations
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-4 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-xl shadow-xl">
                  {destinations.map((destination) => (
                    <li key={destination.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={destination.href}
                          className={cn(
                            "block space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-colors",
                            "bg-white hover:bg-[#F5F3FF] border border-gray-100",
                            "active:scale-[0.98] active:bg-[#EDE9FE]"
                          )}
                        >
                          <div className="text-base font-semibold leading-none text-[#6D28D9]">
                            {destination.title}
                          </div>
                          <p className="mt-2 text-sm leading-snug text-gray-600">
                            {destination.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>

          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white font-medium px-6 py-2 rounded-full shadow-md transition-transform duration-200 active:scale-95"
              >
                Tourism & Conferences
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[800px] p-6 bg-white rounded-xl shadow-xl">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">Popular Destinations</h3>
                  <Carousel className="w-full mb-8">
                    <CarouselContent>
                      {tourismDestinations.map((destination, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                          <div className="relative overflow-hidden rounded-xl shadow-md group">
                            <img
                              src={destination.image}
                              alt={destination.title}
                              className="w-full h-48 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 flex flex-col justify-end">
                              <h4 className="text-white font-semibold text-lg">{destination.title}</h4>
                              <p className="text-white/90 text-sm">{destination.description}</p>
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <h4 className="font-semibold text-gray-900 text-lg">Tourism</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#FF6B6B] rounded-full"></span>
                          <span>Guided Tours</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#FF6B6B] rounded-full"></span>
                          <span>Cultural Experiences</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#FF6B6B] rounded-full"></span>
                          <span>Adventure Travel</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#FF6B6B] rounded-full"></span>
                          <span>Luxury Getaways</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <h4 className="font-semibold text-gray-900 text-lg">Conferences</h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#FF8E53] rounded-full"></span>
                          <span>Business Events</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#FF8E53] rounded-full"></span>
                          <span>Tech Summits</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#FF8E53] rounded-full"></span>
                          <span>Academic Conferences</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-[#FF8E53] rounded-full"></span>
                          <span>Trade Shows</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </div>
    </NavigationMenu>
  );
};

export default Navigation;