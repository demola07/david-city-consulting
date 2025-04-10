
import { Card } from "@/components/ui/card";

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

const TourismConferences = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#F5F3FF] to-white pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-[#6D28D9] mb-8">Tourism & Conferences</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {tourismDestinations.map((destination, index) => (
              <Card key={index} className="overflow-hidden group transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative h-64">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-white text-2xl font-bold mb-2">{destination.title}</h3>
                    <p className="text-white/90">{destination.description}</p>
                  </div>
                </div>
              </Card>
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
      </div>
    </>
  );
};

export default TourismConferences;
