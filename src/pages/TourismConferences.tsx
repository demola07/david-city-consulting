import { useEffect } from "react";
import Contact from "@/components/Contact";
import DestinationCarousel from "@/components/DestinationCarousel";

const destinationsData = [
  {
    name: "Australia",
    description: "A land of stunning natural beauty and vibrant cities, offering world-class conference facilities alongside unique cultural experiences.",
    highlights: [
      "Iconic Sydney Opera House venues",
      "Great Barrier Reef team activities",
      "Modern conference centers",
      "Unique wildlife experiences"
    ],
    images: [
      "/images/destinations/australia.jpg",
      "/images/destinations/australia1.jpg"
    ]
  },
  {
    name: "Cyprus",
    description: "A Mediterranean paradise offering excellent conference facilities, beautiful beaches, and a rich cultural heritage.",
    highlights: [
      "Beachfront conference venues",
      "Ancient archaeological sites",
      "Mediterranean cuisine experiences",
      "Year-round pleasant climate"
    ],
    images: [
      "/images/destinations/cyprus.jpg",
      "/images/destinations/cyprus1.jpg",
      "/images/destinations/cyprus2.jpg"
    ]
  },
  {
    name: "United Kingdom",
    description: "A perfect blend of historic charm and modern innovation, offering world-class conference facilities in iconic locations.",
    highlights: [
      "Historic venue options",
      "Cultural heritage experiences",
      "Modern conference centers",
      "Efficient transportation"
    ],
    images: [
      "/images/destinations/uk.jpg",
      "/images/destinations/uk1.jpg",
      "/images/destinations/uk2.JPG"
    ]
  },
  {
    name: "USA",
    description: "A diverse destination offering cutting-edge conference facilities and unique experiences across its vibrant cities.",
    highlights: [
      "State-of-the-art venues",
      "World-class infrastructure",
      "Diverse cultural experiences",
      "Innovative meeting spaces"
    ],
    images: [
      "/images/destinations/usa.jpg",
      "/images/destinations/usa1.jpg",
      "/images/destinations/usa2.jpg",
      "/images/destinations/usa3.jpg"
    ]
  },
  {
    name: "Japan",
    description: "The perfect fusion of ancient traditions and futuristic innovation, offering unique cultural experiences alongside cutting-edge conference facilities.",
    highlights: [
      "High-tech conference centers",
      "Traditional Japanese cultural experiences",
      "Efficient public transportation",
      "Unique team-building activities"
    ],
    images: [
      "/images/destinations/japan.jpg",
      "/images/destinations/japan1.jpg",
      "/images/destinations/japan3.jpg",
      "/images/destinations/japan4.jpg"
    ]
  },
  {
    name: "Malaysia",
    description: "A vibrant Southeast Asian hub offering world-class conference facilities, cultural diversity, and impressive modern architecture at affordable rates.",
    highlights: [
      "Twin Towers conference experience",
      "Multicultural team activities",
      "Value-for-money luxury venues",
      "Tropical retreat options nearby"
    ],
    images: [
      "/images/destinations/Malaysia.jpg",
      "/images/destinations/Malaysia2.jpg",
      "/images/destinations/Malaysia3.jpg"
    ]
  },
  {
    name: "France",
    description: "Experience the charm of French countryside with picturesque towns, vineyards, and unique venues perfect for intimate conferences and retreats.",
    highlights: [
      "Vineyard conference spaces",
      "Medieval town exploration",
      "Wine tasting team activities",
      "Rustic French countryside experience"
    ],
    images: [
      "/images/destinations/france.jpg",
      "/images/destinations/france1.jpg",
      "/images/destinations/france3.jpg",
      "/images/destinations/france4.jpg",
      "/images/destinations/france5.jpg"
    ]
  },
  {
    name: "Dubai",
    description: "A futuristic waterfront development offering state-of-the-art conference facilities with stunning architecture and luxury accommodations.",
    highlights: [
      "Ultramodern conference centers",
      "Luxury yacht networking events",
      "Beachfront corporate gatherings",
      "World-class shopping experiences"
    ],
    images: [
      "/images/destinations/Dubai.jpg",
      "/images/destinations/dubai2.jpg",
      "/images/destinations/dubai3.jpg"
    ]
  },
  {
    name: "Singapore",
    description: "A global business hub offering impeccable efficiency, cutting-edge facilities, and a unique blend of cultures in a clean, green urban environment.",
    highlights: [
      "World-class MICE facilities",
      "Gardens by the Bay events",
      "Multicultural team experiences",
      "Efficient business infrastructure"
    ],
    images: [
      "/images/destinations/Singapore.jpg",
      "/images/destinations/singapore1.jpg",
      "/images/destinations/singapore3.jpg",
      "/images/destinations/singapore5.jpg",
      "/images/destinations/singapore6.jpg",
      "/images/destinations/singapore7.jpg"
    ]
  },
  {
    name: "Qatar",
    description: "A modern Middle Eastern hub offering world-class conference facilities and luxury accommodations in a rapidly developing business environment.",
    highlights: [
      "State-of-the-art conference centers",
      "Luxury hotel accommodations",
      "Cultural heritage experiences",
      "Modern business infrastructure"
    ],
    images: [
      "/images/destinations/Qatar.jpg",
      "/images/destinations/qatar1.jpg",
      "/images/destinations/qatar2.jpg"
    ]
  },
  {
    name: "Mauritius",
    description: "A tropical paradise offering unique conference venues with stunning beachfront locations and luxury resort facilities.",
    highlights: [
      "Beachfront conference venues",
      "Luxury resort accommodations",
      "Water sports activities",
      "Cultural island experiences"
    ],
    images: [
      "/images/destinations/Mauritius.jpg",
      "/images/destinations/Mauritius1.jpg",
      "/images/destinations/Mauritius2.jpg"
    ]
  },
  {
    name: "Rwanda",
    description: "A unique African destination offering conference facilities amidst stunning natural beauty and rich cultural heritage.",
    highlights: [
      "Eco-friendly conference venues",
      "Wildlife safari experiences",
      "Cultural heritage tours",
      "Sustainable tourism initiatives"
    ],
    images: [
      "/images/destinations/rwanda.png",
      "/images/destinations/rwanda1.jpg",
      "/images/destinations/rwanda3.jpg"
    ]
  }
];

const TourismConferences = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#F5F3FF] to-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#6D28D9] mb-4">
              Tourism & Conferences
            </h1>
            <p className="text-gray-600 text-lg">
              Explore our handpicked destinations that blend business excellence with unforgettable experiences. 
              From ultramodern cities to cultural treasures, we offer comprehensive conference and tourism services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {destinationsData.map((destination, index) => (
              <DestinationCarousel key={index} destination={destination} />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-[#6D28D9] mb-6">Tourism Services</h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#F97316] rounded-full"></span>
                  <span>Guided Tours & Excursions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#F97316] rounded-full"></span>
                  <span>Cultural Experiences</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#F97316] rounded-full"></span>
                  <span>Adventure Travel Packages</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#F97316] rounded-full"></span>
                  <span>Luxury Getaways</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-[#6D28D9] mb-6">Conference Services</h2>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#0EA5E9] rounded-full"></span>
                  <span>Business Events & Meetings</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#0EA5E9] rounded-full"></span>
                  <span>Technology Summits</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#0EA5E9] rounded-full"></span>
                  <span>Academic Conferences</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-[#0EA5E9] rounded-full"></span>
                  <span>Trade Shows & Exhibitions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default TourismConferences;
