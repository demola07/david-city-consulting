import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { GraduationCap, Globe, BookOpen } from "lucide-react";

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
    <NavigationMenu className="bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto h-24 flex items-center justify-between gap-8 px-6 lg:px-12">
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3.5 rounded-lg transform transition-transform group-hover:scale-105">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <span className="font-bold text-2xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            EduGlobal
          </span>
        </Link>
        
        <div className="flex-1 flex items-center justify-end gap-6">
          <NavigationMenuList className="flex items-center gap-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Globe className="w-5 h-5 mr-2 inline-block" />
                Study Destinations
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-xl shadow-xl">
                  {destinations.map((destination) => (
                    <li key={destination.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={destination.href}
                          className={cn(
                            "flex flex-col space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors",
                            "hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 border border-gray-100",
                            "active:scale-[0.98]"
                          )}
                        >
                          <div className="text-base font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                            {destination.title}
                          </div>
                          <p className="line-clamp-2 text-sm text-gray-600">
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
                className="inline-flex items-center justify-center px-8 py-3 font-medium text-white rounded-full shadow-md transition-all duration-200 hover:shadow-lg bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
              >
                <Globe className="w-5 h-5 mr-2" />
                Tourism & Conferences
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link 
                to="/tutorials"
                className="inline-flex items-center justify-center px-8 py-3 font-medium text-white rounded-full shadow-md transition-all duration-200 hover:shadow-lg bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
              >
                <BookOpen className="w-5 h-5 mr-2" />
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