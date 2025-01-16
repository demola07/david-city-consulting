import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
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
    <NavigationMenu className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <Link to="/" className="mr-8 font-semibold text-xl text-[#8B5CF6] hover:text-[#7C3AED]">
          Study Abroad
        </Link>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-[#8B5CF6] text-white hover:bg-[#7C3AED]">
              Destinations
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
    </NavigationMenu>
  );
};

export default Navigation;