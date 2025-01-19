import React from 'react';
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
  const [isOpen, setIsOpen] = React.useState(false);

  const handleNavigation = () => {
    setIsOpen(false);
  };

  const DestinationsList = () => (
    <ul className="space-y-3">
      {destinations.map((destination) => (
        <li key={destination.href}>
          <Link
            to={destination.href}
            onClick={handleNavigation}
            className="flex flex-col space-y-1 p-2.5 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 border border-gray-100"
          >
            <div className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {destination.title}
            </div>
            <p className="text-xs text-gray-600">
              {destination.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );

  const DesktopNav = () => (
    <NavigationMenu className="bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto h-20 flex items-center justify-between gap-6 px-4 lg:px-8">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2.5 rounded-lg transform transition-transform group-hover:scale-105">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            EduGlobal
          </span>
        </Link>
        
        <div className="flex-1 flex items-center justify-end gap-4">
          <NavigationMenuList className="flex items-center gap-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Globe className="w-4 h-4 mr-2 inline-block" />
                Study Destinations
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[300px] md:w-[400px] lg:w-[500px] p-4 bg-white rounded-xl shadow-xl">
                  <DestinationsList />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link 
                to="/tourism-conferences"
                className="inline-flex items-center justify-center px-6 py-2 font-medium text-white rounded-full shadow-md transition-all duration-200 hover:shadow-lg bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
              >
                <Globe className="w-4 h-4 mr-2" />
                Tourism & Conferences
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link 
                to="/tutorials"
                className="inline-flex items-center justify-center px-6 py-2 font-medium text-white rounded-full shadow-md transition-all duration-200 hover:shadow-lg bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Tutorials
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </div>
    </NavigationMenu>
  );

  const MobileNav = () => (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto h-16 flex items-center justify-between px-4">
        <Link to="/" onClick={handleNavigation} className="flex items-center space-x-2.5">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-2 rounded-lg">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            EduGlobal
          </span>
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="p-2 hover:bg-gray-100 rounded-lg">
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-[400px] p-0">
            <nav className="flex flex-col h-full">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold mb-1">Menu</h2>
                <p className="text-sm text-gray-500">Explore our services</p>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-500">Study Destinations</h3>
                    <DestinationsList />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-500">Other Services</h3>
                    <Link 
                      to="/tourism-conferences"
                      onClick={handleNavigation}
                      className="flex items-center space-x-2 w-full p-2.5 font-medium text-white rounded-lg bg-gradient-to-r from-orange-500 to-pink-500"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Tourism & Conferences</span>
                    </Link>

                    <Link 
                      to="/tutorials"
                      onClick={handleNavigation}
                      className="flex items-center space-x-2 w-full p-2.5 font-medium text-white rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Tutorials</span>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );

  return isMobile ? <MobileNav /> : <DesktopNav />;
};

export default Navigation;