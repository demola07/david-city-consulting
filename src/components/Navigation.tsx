import * as React from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { GraduationCap, Globe, BookOpen, Menu, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const destinations = [
  {
    title: "United Kingdom",
    href: "/study/uk",
    description: "World-class education with rich cultural heritage"
  },
  {
    title: "Cyprus",
    href: "/study/cyprus",
    description: "Affordable European education in a beautiful Mediterranean setting",
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
  },
  {
    title: "Canada",
    href: "/study/canada",
    description: "World-class education and vibrant multicultural cities"
  }
];

const Navigation = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const handleNavigation = () => {
    setIsOpen(false);
  };

  // Get the appropriate background color based on the current route
  const getNavBackground = () => {
    if (location.pathname.startsWith('/study')) {
      return 'bg-gradient-to-r from-purple-600 to-indigo-600';
    } else if (location.pathname === '/tourism-conferences') {
      return 'bg-gradient-to-r from-orange-500 to-pink-500';
    } else if (location.pathname === '/tutorials') {
      return 'bg-gradient-to-r from-teal-500 to-emerald-500';
    }
    return 'bg-gradient-to-r from-purple-600 to-indigo-600'; // Default color
  };

  const DestinationsList = () => (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4">
      {destinations.map((destination) => (
        <li key={destination.href}>
          <Link
            to={destination.href}
            onClick={handleNavigation}
            className="flex flex-col space-y-1 p-3 rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 border border-gray-100 transition-all duration-200 hover:shadow-md"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600" />
              <div className="text-sm font-semibold text-gray-900">
                {destination.title}
              </div>
            </div>
            <p className="text-xs text-gray-600 pl-4">
              {destination.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );

  const DesktopNav = () => (
    <NavigationMenu className={`fixed top-0 left-0 right-0 z-50 ${getNavBackground()} text-white`}>
      <div className="w-full h-16 flex items-center justify-between gap-6 px-4 lg:px-8">
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src="/images/logo1.png" 
            alt="David City Consulting Firm Logo" 
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <span className="font-bold text-xl text-white">
            David City Consulting
          </span>
        </Link>
        
        <div className="flex-1 flex items-center justify-end gap-6">
          <NavigationMenuList className="flex items-center gap-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger 
                className="group flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200"
              >
                <Globe className="w-4 h-4 text-white" />
                Study Destinations
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[600px] bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="p-4 border-b">
                    <h3 className="font-semibold text-gray-900">Popular Study Destinations</h3>
                    <p className="text-sm text-gray-500">Choose your ideal study destination</p>
                  </div>
                  <DestinationsList />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link 
                to="/tourism-conferences"
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200"
              >
                <Globe className="w-4 h-4" />
                Tourism & Conferences
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link 
                to="/tutorials"
                className="flex items-center gap-2 text-white hover:text-white/80 transition-colors duration-200"
              >
                <BookOpen className="w-4 h-4" />
                Tutorials
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </div>
    </NavigationMenu>
  );

  const MobileNav = () => (
    <div className={`fixed top-0 left-0 right-0 z-50 ${getNavBackground()} text-white`}>
      <div className="w-full h-16 flex items-center justify-between px-4">
        <Link to="/" onClick={handleNavigation} className="flex items-center space-x-2.5">
          <img 
            src="/images/logo1.png" 
            alt="David City Consulting Firm Logo" 
            className="h-9 w-auto object-contain" 
          />
          <span className="font-bold text-lg text-white">
            David City Consulting
          </span>
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
            <Menu className="h-5 w-5 text-white" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-[400px] p-0">
            <nav className="flex flex-col h-full">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <p className="text-sm text-gray-500">Explore our services</p>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-500">Study Destinations</h3>
                    <DestinationsList />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-500">Other Services</h3>
                    <div className="space-y-2">
                      <Link 
                        to="/tourism-conferences"
                        onClick={handleNavigation}
                        className="flex items-center space-x-2 w-full p-3 font-medium text-gray-700 rounded-lg hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200"
                      >
                        <Globe className="w-4 h-4" />
                        <span>Tourism & Conferences</span>
                      </Link>

                      <Link 
                        to="/tutorials"
                        onClick={handleNavigation}
                        className="flex items-center space-x-2 w-full p-3 font-medium text-gray-700 rounded-lg hover:bg-teal-50 hover:text-teal-500 transition-colors duration-200"
                      >
                        <BookOpen className="w-4 h-4" />
                        <span>Tutorials</span>
                      </Link>
                    </div>
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
