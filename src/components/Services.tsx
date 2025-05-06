import React, { useState } from "react";
import { GraduationCap, Globe, Book, Info, ClipboardCopy, DollarSign, BookOpen, Calendar, Plane, Hotel, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { 
  Tooltip, 
  TooltipContent, 
  TooltipTrigger, 
} from "@/components/ui/tooltip";
import { toast } from "@/components/ui/use-toast";
import { StudyAbroadApplicationInfo } from "./StudyAbroadApplicationInfo";
import { IELTSInfo } from "./IELTSInfo";

const email = "davidcityconsulting247@gmail.com";

const PassportInfoDialogContent = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      toast({ title: "Email address copied!" });
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy email: ', err);
      toast({ title: "Failed to copy", variant: "destructive" });
    });
  };
  return (
    <div className="space-y-4 text-sm">
      <p>To begin your international passport processing, please send the following details via email to:</p>
      <div className="flex items-center gap-2 p-2 rounded bg-muted">
        <p className="font-semibold text-primary break-all flex-1">{email}</p>
        <Tooltip>
          <TooltipTrigger asChild>
             <Button variant="ghost" size="icon" onClick={handleCopy} aria-label="Copy email address">
               <ClipboardCopy className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent><p>Copy</p></TooltipContent>
        </Tooltip>
      </div>
      {copied && <span className="text-xs text-green-600">Copied!</span>}
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>Your Full Name</li>
        <li>Indicate if it's a New Passport or Renewal</li>
        <li>Name exactly as it appears on your NIN</li>
        <li>Your Phone Number</li>
        <li>Your Email Address</li>
        <li>Your Full Residential Address</li>
      </ul>
      <p>We will review your details and contact you with the next steps.</p>
    </div>
  );
};

const ProofOfFundInfoDialogContent = () => {
   const [copied, setCopied] = useState(false);
   const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => { setCopied(true); toast({ title: "Email copied!" }); setTimeout(() => setCopied(false), 2000); }).catch(err => { console.error(err); toast({ title: "Copy failed", variant: "destructive" }); });
   }
  return (
    <div className="space-y-4 text-sm">
      <p>In need of Proof of Fund?</p>
       <p>Contact us via the email below for more information:</p>
       <div className="flex items-center gap-2 p-2 rounded bg-muted">
        <p className="font-semibold text-primary break-all flex-1">{email}</p>
        <Tooltip>
          <TooltipTrigger asChild>
             <Button variant="ghost" size="icon" onClick={handleCopy} aria-label="Copy email address">
               <ClipboardCopy className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent><p>Copy</p></TooltipContent>
        </Tooltip>
      </div>
      {copied && <span className="text-xs text-green-600">Copied!</span>}
    </div>
  );
};

const TutoringInfoDialogContent = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      toast({ title: "Email address copied!" });
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Failed to copy email: ', err);
      toast({ title: "Failed to copy", variant: "destructive" });
    });
  };
  return (
    <div className="space-y-4 text-sm">
      <p>To schedule tutoring sessions, please send the following details via email to:</p>
      <div className="flex items-center gap-2 p-2 rounded bg-muted">
        <p className="font-semibold text-primary break-all flex-1">{email}</p>
        <Tooltip>
          <TooltipTrigger asChild>
             <Button variant="ghost" size="icon" onClick={handleCopy} aria-label="Copy email address">
               <ClipboardCopy className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent><p>Copy</p></TooltipContent>
        </Tooltip>
      </div>
      {copied && <span className="text-xs text-green-600">Copied!</span>}
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li>Your Full Name</li>
        <li>Subject(s) of Interest</li>
        <li>Preferred Schedule (Online/On-site)</li>
        <li>Your Phone Number</li>
        <li>Your Email Address</li>
        <li>Your Location (for on-site sessions)</li>
      </ul>
      <p>We will review your details and contact you to arrange the sessions.</p>
    </div>
  );
};

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad",
    description: "Expert guidance for international education in top destinations worldwide.",
    action: "study_abroad_form"
  },
  {
    icon: Globe,
    title: "Tourism",
    description: "Discover amazing destinations and create unforgettable memories.",
    action: "tourism_form",
  },
  {
    icon: BookOpen,
    title: "Get a Tutor",
    description: "Expert tutoring in languages, sciences, mathematics, accounting, literature, and exam preparation for common entrance, UTME, P.UTME, and more.",
    action: "tutoring_form",
  },
  {
    icon: BookOpen,
    title: "IELTS Classes",
    description: "David City Tutors (private or on-site tutorials) for IELTS preparation.",
    action: "ielts_form",
  },
  {
    icon: Globe,
    title: "Passport Processing",
    description: "Let's help you process your international passports.",
    action: "passport_form",
  },
  {
    icon: DollarSign,
    title: "Proof of Fund",
    description: "Assistance with securing the necessary proof of funds for your applications.",
    action: "proof_of_fund_info",
  },
  {
    icon: Plane,
    title: "Flight & Accommodation",
    description: "Expert assistance with flight bookings and accommodation arrangements for your travel needs.",
    action: "flight_accommodation_form",
  },
  {
    icon: Users,
    title: "Children in Diaspora Bible Club",
    description: "Join our vibrant community for children's spiritual growth and development.",
    action: "bible_club_form",
  },
];

const Services = () => {
  return (
    <section id="services-section" className="py-20 bg-accent">
      <div className="container px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">What We Offer</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 flex-grow mb-6">{service.description}</p>
              
              {service.action === 'study_abroad_form' && (
                <a 
                  href="https://forms.gle/M7j54aidfz3LmAnv8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto group"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 flex items-center justify-center gap-2 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02]">
                    <GraduationCap className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Start Your Journey</span>
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </a>
              )}

              {service.action === 'tourism_form' && (
                <a 
                  href="https://forms.gle/ou5TYYPN9z2zCiW16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto group"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 flex items-center justify-center gap-2 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02]">
                    <Globe className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Explore Destinations</span>
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </a>
              )}

              {service.action === 'tutoring_form' && (
                <a 
                  href="https://forms.gle/fqwiphWuTk3jRE9A6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto group"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 flex items-center justify-center gap-2 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02]">
                    <BookOpen className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Schedule Sessions</span>
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </a>
              )}

              {service.action === 'ielts_form' && (
                <a 
                  href="https://forms.gle/8gFgpHm86EemS8rv7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto group"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 flex items-center justify-center gap-2 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02]">
                    <BookOpen className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Register for Classes</span>
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </a>
              )}

              {service.action === 'passport_form' && (
                <a 
                  href="https://forms.gle/9APcyFhzfmho1zsx7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto group"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 flex items-center justify-center gap-2 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02]">
                    <Globe className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Apply for Passport</span>
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </a>
              )}

              {service.action === 'proof_of_fund_info' && (
                <a 
                  href="https://forms.gle/2pRUfzvP7btzwbpt6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto group"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 flex items-center justify-center gap-2 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02]">
                    <DollarSign className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Apply Now</span>
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </a>
              )}

              {service.action === 'flight_accommodation_form' && (
                <a 
                  href="https://forms.gle/X7iyAt8ykY5RoE5LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto group"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 flex items-center justify-center gap-2 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02]">
                    <div className="flex items-center gap-1">
                      <Plane className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      <Hotel className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <span>Book Now</span>
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </a>
              )}

              {service.action === 'bible_club_form' && (
                <a 
                  href="https://forms.gle/cDHkSGBvBVgqtqgi6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto group"
                >
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white transition-all duration-300 flex items-center justify-center gap-2 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:scale-[1.02]">
                    <Users className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Join the Club</span>
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
