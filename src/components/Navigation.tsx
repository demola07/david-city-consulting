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
    <NavigationMenu className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="mr-8 font-semibold text-xl text-[#8B5CF6] hover:text-[#7C3AED]">
            Study Abroad
          </Link>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-[#8B5CF6] text-white hover:bg-[#7C3AED]">
                Study Destinations
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white shadow-xl rounded-xl border border-gray-100">
                  {destinations.map((destination) => (
                    <li key={destination.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={destination.href}
                          className={cn(
                            "block select-none space-y-1 rounded-lg p-4 leading-none no-underline outline-none transition-colors",
                            "hover:bg-[#F5F3FF] hover:text-[#8B5CF6]",
                            "focus:bg-[#F5F3FF] focus:text-[#8B5CF6]"
                          )}
                        >
                          <div className="text-base font-semibold leading-none text-gray-900">{destination.title}</div>
                          <p className="mt-2 line-clamp-2 text-sm leading-snug text-gray-600">
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
        </div>

        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white hover:from-[#FF5252] hover:to-[#FF7043]">
              Tourism & Conferences
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[800px] p-6 bg-white shadow-xl rounded-xl border border-gray-100">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Popular Destinations</h3>
                <Carousel className="w-full">
                  <CarouselContent>
                    {tourismDestinations.map((destination, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="relative group overflow-hidden rounded-lg">
                          <img
                            src={destination.image}
                            alt={destination.title}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-4">
                            <h4 className="text-white font-semibold mb-1 text-lg">{destination.title}</h4>
                            <p className="text-white/90 text-sm">{destination.description}</p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                <div className="grid grid-cols-2 gap-8 mt-8">
                  <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
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
                  <div className="space-y-3 bg-gray-50 p-4 rounded-lg">
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
    </NavigationMenu>
  );
};

export default Navigation;