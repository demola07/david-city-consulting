import React, { useState } from "react";
import { GraduationCap, Globe, Book, Info, ClipboardCopy, DollarSign, BookOpen, Calendar } from "lucide-react";
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
  },
  {
    icon: Globe,
    title: "Tourism",
    description: "Discover amazing destinations and create unforgettable memories.",
    action: "tourism_link",
  },
  {
    icon: BookOpen,
    title: "Get a Tutor",
    description: "Expert tutoring in languages, sciences, mathematics, accounting, literature, and exam preparation for common entrance, UTME, P.UTME, and more.",
    action: "tutoring_info",
  },
  {
    icon: BookOpen,
    title: "IELTS Classes",
    description: "David City Tutors (private or on-site tutorials) for IELTS preparation.",
    action: "ielts_info",
  },
  {
    icon: Globe,
    title: "Passport Processing",
    description: "Let's help you process your international passports.",
    action: "passport_info",
  },
  {
    icon: DollarSign,
    title: "Proof of Fund",
    description: "Assistance with securing the necessary proof of funds for your applications.",
    action: "proof_of_fund_info",
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
              
              {service.title === 'Study Abroad' && (
                <StudyAbroadApplicationInfo />
              )}

              {service.action === 'tourism_link' && (
                <Link to="/tourism-conferences" className="mt-auto">
                  <Button className="w-full">
                    <Globe className="mr-2 h-4 w-4" /> Explore Destinations
                  </Button>
                </Link>
              )}

              {service.action === 'ielts_info' && (
                 <IELTSInfo />
              )}
              {service.action === 'passport_info' && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="mt-auto">
                      <Info className="mr-2 h-4 w-4" /> View Instructions
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Passport Processing Instructions</DialogTitle>
                      <DialogDescription>
                        Please gather the required information and send it to us via email.
                      </DialogDescription>
                    </DialogHeader>
                    <PassportInfoDialogContent />
                  </DialogContent>
                </Dialog>
              )}
              {service.action === 'proof_of_fund_info' && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="mt-auto">
                      <Info className="mr-2 h-4 w-4" /> Contact Us
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Proof of Fund Assistance</DialogTitle>
                      <DialogDescription>
                         Contact us via email to discuss your proof of fund requirements.
                      </DialogDescription>
                    </DialogHeader>
                    <ProofOfFundInfoDialogContent />
                  </DialogContent>
                </Dialog>
              )}
              {service.action === 'tutoring_info' && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="mt-auto">
                      <Calendar className="mr-2 h-4 w-4" /> Schedule Sessions
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Schedule Tutoring Sessions</DialogTitle>
                      <DialogDescription>
                        Please provide your details to schedule tutoring sessions.
                      </DialogDescription>
                    </DialogHeader>
                    <TutoringInfoDialogContent />
                  </DialogContent>
                </Dialog>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
