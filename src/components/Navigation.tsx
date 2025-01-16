import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
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

            <NavigationMenuItem>
              <Link 
                to="/tourism-conferences"
                className="inline-flex items-center justify-center px-6 py-2 font-medium text-white rounded-full shadow-md transition-all duration-200 active:scale-95 bg-gradient-to-r from-[#F97316] to-[#FB923C] hover:from-[#F97316] hover:to-[#FB923C] hover:shadow-lg"
              >
                Tourism & Conferences
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link 
                to="/tutorials"
                className="inline-flex items-center justify-center px-6 py-2 font-medium text-white rounded-full shadow-md transition-all duration-200 active:scale-95 bg-gradient-to-r from-[#2DD4BF] to-[#14B8A6] hover:shadow-lg"
              >
                Tutorials
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </div>
    </NavigationMenu>
  );
};

export default Navigation;