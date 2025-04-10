
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Globe, GraduationCap, Languages, Calculator, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import TutorialBookingForm from "@/components/TutorialBookingForm";

// This would typically come from an API, but for now we'll use localStorage
const getTutorialCategories = () => {
  const storedCategories = localStorage.getItem("tutorialCategories");
  if (!storedCategories) {
    return [
      {
        title: "IELTS Preparation",
        description: "Comprehensive IELTS training covering all test sections",
        icon: Languages,
        color: "text-blue-500"
      },
      {
        title: "Common Entrance",
        description: "Preparation for various common entrance examinations",
        icon: GraduationCap,
        color: "text-purple-500"
      },
      {
        title: "PUTME",
        description: "Post-UTME preparation for Nigerian universities",
        icon: BookOpen,
        color: "text-green-500"
      },
      {
        title: "Languages",
        description: "Learn multiple languages with native speakers",
        icon: Globe,
        color: "text-red-500"
      },
      {
        title: "Literature",
        description: "In-depth study of various literary works and analysis",
        icon: BookOpen,
        color: "text-yellow-500"
      },
      {
        title: "Mathematics",
        description: "From basic to advanced mathematics concepts",
        icon: Calculator,
        color: "text-indigo-500"
      },
      {
        title: "Sciences",
        description: "Physics, Chemistry, and Biology tutorials",
        icon: BookOpen,
        color: "text-teal-500"
      }
    ];
  }
  return JSON.parse(storedCategories);
};

const TutorialsPage = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [tutorialCategories, setTutorialCategories] = useState(getTutorialCategories());

  useEffect(() => {
    const handleStorageChange = () => {
      setTutorialCategories(getTutorialCategories());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const getIconComponent = (iconName: string) => {
    const icons = {
      Languages,
      GraduationCap,
      BookOpen,
      Globe,
      Calculator
    };
    return icons[iconName as keyof typeof icons] || BookOpen;
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 animate-fade-up">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Tutorials & Test Preparation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of online and physical tutorial sessions. Book your preferred time slots and start learning with expert tutors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tutorialCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${category.color} bg-opacity-10`}>
                    {React.createElement(getIconComponent(category.icon.name), {
                      className: `h-6 w-6 ${category.color}`
                    })}
                  </div>
                  <div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>Flexible Timing</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Our Tutorials?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-teal-100 mb-4">
                  <GraduationCap className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Expert Tutors</h3>
                <p className="text-sm text-gray-600">Learn from experienced and qualified tutors</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-teal-100 mb-4">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Flexible Schedule</h3>
                <p className="text-sm text-gray-600">Choose times that work best for you</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-teal-100 mb-4">
                  <Globe className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="font-semibold mb-2">Online & Physical</h3>
                <p className="text-sm text-gray-600">Choose between online or in-person sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <TutorialBookingForm isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default TutorialsPage;
