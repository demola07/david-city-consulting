
import * as React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AboutUs = () => {
  return (
    <div className="container max-w-5xl mx-auto py-12 px-4 md:px-6">
      <div className="space-y-6 animate-fade-in">
        {/* Hero Section */}
        <div className="text-center space-y-4 mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">About David City Consulting Firm</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A passion-driven organization helping students and professionals achieve their global aspirations
          </p>
          <Separator className="mt-6 mx-auto w-24 bg-purple-500 h-1" />
        </div>

        {/* Our Story */}
        <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">Our Story</h2>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed">
              David City Consulting Firm is an organization born out of passion and desire to help both students and all men (business, ministry or career men) get to their desired destinations globally and become transformed by obtaining international upgrades through quality education.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We are a conglomerate and we venture into mainly study abroad processing into the United Kingdom, Europe, North America and Africa. We also deal with all forms and processing of travels, tourism, conferences, proof of funds, international passports and ECOWAS certificates processing, yellow fever cards processing, newspaper publications, birth tourism, etc.
            </p>
          </CardContent>
        </Card>

        {/* Our Services */}
        <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">Our Services</h2>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed">
              We take IELTS classes (general and academic) and instruct students in sciences, English language and literatures, Mathematics, accounting, common entrances, UTME, P.UTME, prepare students for WAEC, NECO, NABTEB, music classes and trainings, etc.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our Passion for raising a better society is what makes us invest into children and teenagers, especially by having an Online but excellent Bible Club for children in diaspora and within Nigeria.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              In addition, we help you book the best flights and places in any country based on your financial capacities.
            </p>
          </CardContent>
        </Card>

        {/* Our Commitment */}
        <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">Our Commitment</h2>
          </div>
          <CardContent className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Overtime, we have been involved in some processing or applications for work abroad via a third party that didn't go well and other route that promises you Heaven and earth but failed to deliver after collecting so much money from our clients. It is with this understanding that we decided to stick to what works and what we can really account for overtime.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We love to keep our client's trust in us and help them become who God has written about them or what they desire, while getting paid for all our services. We are very transparent, committed, accountable and dedicated to seeing all our clients rejoice with great smiles on their faces at the end of each applications.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Our considerably low service fees and high success rates also put us as second to none in delivering what was paid for, especially when our clients cooperate well with us by giving us all the documents and resources needed.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              You are just a click, call or text away from getting any of these services we offer. We promise to always give you excellent and well detailed services.
            </p>
          </CardContent>
        </Card>

        {/* Why Choose Us */}
        <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4">
            <h2 className="text-xl md:text-2xl font-semibold text-white">Why Choose Us?</h2>
          </div>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                <p className="ml-4 text-gray-700 leading-relaxed">
                  Considerably low to average service fees, giving you more value than you paid for.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                <p className="ml-4 text-gray-700 leading-relaxed">
                  Advice on the best possible routes, regardless of clients' past refusals.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                <p className="ml-4 text-gray-700 leading-relaxed">
                  Rare refusals from universities, organizations, or embassies with full client cooperation.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                <p className="ml-4 text-gray-700 leading-relaxed">
                  Excellent delivery at top level, at the right time with effective communication.
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 mt-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                <p className="ml-4 text-gray-700 leading-relaxed">
                  Careful selection of services that we can handle or influence well professionally.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-8 text-center mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-white opacity-90 mb-6">Contact us today to learn more about how we can help you achieve your goals.</p>
          <button 
            className="px-6 py-3 bg-white text-purple-700 rounded-lg font-medium shadow-md hover:bg-gray-100 transition-colors duration-200"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
