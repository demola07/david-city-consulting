import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { GraduationCap, Globe, BookOpen, Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

  const DestinationsList = () => (
    <ul className="space-y-4">
      {destinations.map((destination) => (
        <li key={destination.href}>
          <Link
            to={destination.href}
            className="flex flex-col space-y-1 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 border border-gray-100"
          >
            <div className="text-base font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {destination.title}
            </div>
            <p className="text-sm text-gray-600">
              {destination.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );

  const DesktopNav = () => (
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
                <div className="w-[400px] md:w-[500px] lg:w-[600px] p-4 bg-white rounded-xl shadow-xl">
                  <DestinationsList />
                </div>
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

  const MobileNav = () => (
    <div className="bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto h-20 flex items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2.5 rounded-lg">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            EduGlobal
          </span>
        </Link>

        <Sheet>
          <SheetTrigger className="p-2">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 mt-8">
              <div className="space-y-4">
                <h2 className="text-lg font-semibold mb-2">Study Destinations</h2>
                <DestinationsList />
              </div>

              <Link 
                to="/tourism-conferences"
                className="inline-flex items-center justify-center px-6 py-3 font-medium text-white rounded-full shadow-md bg-gradient-to-r from-orange-500 to-pink-500"
              >
                <Globe className="w-5 h-5 mr-2" />
                Tourism & Conferences
              </Link>

              <Link 
                to="/tutorials"
                className="inline-flex items-center justify-center px-6 py-3 font-medium text-white rounded-full shadow-md bg-gradient-to-r from-teal-500 to-emerald-500"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Tutorials
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );

  return isMobile ? <MobileNav /> : <DesktopNav />;
};

export default Navigation;