
import { useEffect } from "react";
import Contact from "@/components/Contact";
import DestinationCarousel from "@/components/DestinationCarousel";

const destinationsData = [
  {
    name: "Sydney, Australia",
    description: "A vibrant metropolis with iconic landmarks and beautiful beaches, offering world-class conference facilities alongside breathtaking natural beauty.",
    highlights: [
      "Sydney Opera House tours",
      "Harbor Bridge Climb experience",
      "Corporate events with harbor views",
      "World-class conference centers"
    ],
    images: [
      "/lovable-uploads/7655a913-694b-4bfe-84a7-b7f4b0f9aac3.png"
    ]
  },
  {
    name: "Limassol, Cyprus",
    description: "A Mediterranean gem combining European culture with Middle Eastern influence, offering excellent conference facilities alongside stunning seaside views.",
    highlights: [
      "Beachfront conference venues",
      "Ancient archaeological sites",
      "Mediterranean cuisine experiences",
      "Year-round pleasant climate"
    ],
    images: [
      "/lovable-uploads/c8810df7-cbc5-4bf5-8acb-5577e9bc78db.png"
    ]
  },
  {
    name: "Dubai Desert, UAE",
    description: "Experience luxury amidst golden sands, where traditional Arabian hospitality meets cutting-edge modernity in unique desert conference settings.",
    highlights: [
      "Desert safari experiences",
      "Luxury tent conferences",
      "Traditional Bedouin entertainment",
      "Off-road adventure activities"
    ],
    images: [
      "/lovable-uploads/056c5af5-87cd-4e46-9bb8-e982b067a930.png"
    ]
  },
  {
    name: "Dubai Marina, UAE",
    description: "A futuristic waterfront development offering state-of-the-art conference facilities with stunning architecture and luxury accommodations.",
    highlights: [
      "Ultramodern conference centers",
      "Luxury yacht networking events",
      "Beachfront corporate gatherings",
      "World-class shopping experiences"
    ],
    images: [
      "/lovable-uploads/c2f5bf08-cba5-43a0-b827-a2d96a244664.png",
      "/lovable-uploads/0f5dabce-1058-4f9e-8cd2-3394f8bf0ec2.png"
    ]
  },
  {
    name: "Paris, France",
    description: "The City of Light offers a perfect blend of romance, culture, and sophistication for unforgettable conferences and business events.",
    highlights: [
      "Historic conference venues",
      "World-renowned cuisine",
      "Cultural team-building activities",
      "Iconic landmark visits"
    ],
    images: [
      "/lovable-uploads/83a92f4b-ad39-4cc2-8499-60dff343336d.png",
      "/lovable-uploads/7011f76d-c27a-435d-b98f-c202fd0bfab1.png",
      "/lovable-uploads/32bc94a9-47ad-4e51-96e1-222dcddaaef0.png"
    ]
  },
  {
    name: "Alsace, France",
    description: "Experience the charm of French countryside with picturesque towns, vineyards, and unique venues perfect for intimate conferences and retreats.",
    highlights: [
      "Vineyard conference spaces",
      "Medieval town exploration",
      "Wine tasting team activities",
      "Rustic French countryside experience"
    ],
    images: [
      "/lovable-uploads/826c492c-aeba-46df-9f7e-9f5d96c6d4ca.png"
    ]
  },
  {
    name: "Tokyo, Japan",
    description: "The perfect fusion of ancient traditions and futuristic innovation, offering unique cultural experiences alongside cutting-edge conference facilities.",
    highlights: [
      "High-tech conference centers",
      "Traditional Japanese cultural experiences",
      "Efficient public transportation",
      "Unique team-building activities"
    ],
    images: [
      "/lovable-uploads/153acab3-4890-48cc-ad91-7457f2d7bf23.png",
      "/lovable-uploads/2e1ff3c9-2534-422c-b610-7c684f3ac937.png"
    ]
  },
  {
    name: "Kuala Lumpur, Malaysia",
    description: "A vibrant Southeast Asian hub offering world-class conference facilities, cultural diversity, and impressive modern architecture at affordable rates.",
    highlights: [
      "Twin Towers conference experience",
      "Multicultural team activities",
      "Value-for-money luxury venues",
      "Tropical retreat options nearby"
    ],
    images: [
      "/lovable-uploads/9ecceb38-a524-4c12-8b9c-9106a27b0abd.png",
      "/lovable-uploads/a5bd56f0-4d0c-4341-9d55-bb3fffcdf307.png"
    ]
  },
  {
    name: "Batu Caves, Malaysia",
    description: "Combine business with cultural exploration at this unique destination offering spiritual heritage alongside modern meeting facilities.",
    highlights: [
      "Cultural immersion experiences",
      "Unique cave venue possibilities",
      "Team-building climbing activities",
      "Hindu temple guided tours"
    ],
    images: [
      "/lovable-uploads/dcb16aba-9a28-40e1-877a-533d1dd1c5ae.png"
    ]
  },
  {
    name: "Kobe, Japan",
    description: "A scenic port city offering impressive mountain views, renowned cuisine, and excellent conference facilities with Japanese efficiency.",
    highlights: [
      "Harbor-view conference venues",
      "Famous Kobe beef dining experiences",
      "Mount Rokko excursions",
      "Hot spring team retreats"
    ],
    images: [
      "/lovable-uploads/f6dcb811-2140-4de6-8c40-c9c0c448a403.png"
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
      "/lovable-uploads/26b6e5de-da2a-4e80-a3fd-c6fcd60cc8d1.png"
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
