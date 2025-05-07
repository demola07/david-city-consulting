import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { motion } from "framer-motion";

const Pricing = () => {
  const studyServices = [
    { destination: "Canada 🇨🇦", price: "$900", details: "Study route" },
    { destination: "United States of America", price: "$900", details: "Study route" },
    { destination: "United Kingdom", price: "$350", details: "Study route" },
    { 
      destination: "Any part of Europe", 
      price: "$1300", 
      details: "Includes Malta, Italy, Portugal, Luxembourg, Cyprus, Poland, Lithuania, Latvia, Sweden, Ukraine, Switzerland, etc." 
    },
  ];
  
  const tourismServices = [
    { destination: "Canada 🇨🇦", price: "$1100", details: "Tourism route (Visa/biometrics fee inclusive)" },
    { destination: "United States of America", price: "$1100", details: "Tourism/Conferences (Visa fees inclusive)" },
    { destination: "United Kingdom", price: "$1000", details: "Tourism/Conferences route (Visa fee inclusive)" },
    { destination: "European Countries", price: "$1250", details: "Conferences/tourism to any European country" },
    { 
      destination: "Other Destinations", 
      price: "$600", 
      details: "Tourism/Conferences to Dubai, Malaysia, Rwanda, Mauritius, Seychelles, Qatar, etc. (Tentatively - Visa fees inclusive where applicable)" 
    },
  ];

  const passportServices = [
    { validity: "5 years", type: "New/renewals fast track", price: "₦108,500" },
    { validity: "5 years", type: "New/Renewal normal time", price: "₦90,500" },
    { validity: "10 years", type: "New/Renewal fast track", price: "₦165,400" },
    { validity: "10 years", type: "New/Renewal normal time", price: "₦139,500" },
  ];

  const otherServices = [
    { service: "IELTS CLASSES", price: "$125" },
    { service: "Online Bible Club for children in Diaspora", price: "$40 monthly" },
    { service: "Proof of funds", price: "3.6% to 4.3% monthly interest, depending on banks" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container px-4 py-12 mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Our Services & Pricing
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          These fees include application fees, service fees, consultations, SOP/CV and recommendation letters corrections/writings, 
          accommodation/flight reservations, administrative fees, and more.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
      >
        {/* Study Services Card */}
        <motion.div variants={itemVariants} className="col-span-1">
          <Card className="h-full bg-gradient-to-br from-white to-indigo-50 border-indigo-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold">Study Abroad Services</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Destination</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {studyServices.map((service, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{service.destination}</TableCell>
                      <TableCell className="font-bold text-indigo-600">{service.price}</TableCell>
                      <TableCell>{service.details}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">
                * All study services include comprehensive application support
              </p>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Tourism Services Card */}
        <motion.div variants={itemVariants} className="col-span-1">
          <Card className="h-full bg-gradient-to-br from-white to-orange-50 border-orange-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold">Tourism & Conference Services</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Destination</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tourismServices.map((service, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{service.destination}</TableCell>
                      <TableCell className="font-bold text-orange-600">{service.price}</TableCell>
                      <TableCell>{service.details}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">
                * Most tourism packages include visa application fees
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
      >
        {/* Passport Services Card */}
        <motion.div variants={itemVariants} className="col-span-1">
          <Card className="h-full bg-gradient-to-br from-white to-teal-50 border-teal-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold">International Passport Processing</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Validity</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {passportServices.map((service, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{service.validity}</TableCell>
                      <TableCell>{service.type}</TableCell>
                      <TableCell className="font-bold text-teal-600">{service.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">
                * Prices are tentative and subject to change
              </p>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Other Services Card */}
        <motion.div variants={itemVariants} className="col-span-1">
          <Card className="h-full bg-gradient-to-br from-white to-blue-50 border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold">Other Services</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {otherServices.map((service, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{service.service}</TableCell>
                      <TableCell className="font-bold text-blue-600">{service.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <p className="text-sm text-gray-500">
                * Additional services are charged accordingly
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>

      {/* Payment Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded-xl shadow-lg border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Information</h2>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <p className="text-gray-700 mb-2">Account payment should be made to:</p>
          <p className="font-bold text-gray-900">UNITED BANK FOR AFRICA - UBA</p>
          <p className="text-lg font-semibold text-indigo-600 my-2">1024629138</p>
          <p className="font-bold text-gray-900">DAVID CITY CONSULTING FIRM</p>
        </div>
        <div className="mt-6 text-center">
          <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-2">
            Contact Us For More Information
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;
