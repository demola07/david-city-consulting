import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BookOpen, ClipboardCopy } from "lucide-react"; // Changed icon
import { toast } from "@/components/ui/use-toast";

const email = "davidcityconsulting247@gmail.com";

// --- Reusable Copy Function --- 
const copyEmail = (setCopiedState: React.Dispatch<React.SetStateAction<boolean>>) => {
  navigator.clipboard.writeText(email).then(() => {
    setCopiedState(true);
    toast({ title: "Email address copied!" });
    setTimeout(() => setCopiedState(false), 2000);
  }).catch(err => {
    console.error('Failed to copy email: ', err);
    toast({ title: "Failed to copy", description: "Could not copy email address.", variant: "destructive" });
  });
};

// --- Email Copy Component ---
const EmailCopySection = ({ introText }: { introText: string }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="py-4 space-y-4 text-sm">
      <p>{introText}</p>
      <div className="flex items-center gap-2 p-2 rounded bg-muted">
        <p className="font-semibold text-primary break-all flex-1">{email}</p>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" onClick={() => copyEmail(setCopied)} aria-label="Copy email address">
              <ClipboardCopy className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copy</p>
          </TooltipContent>
        </Tooltip>
      </div>
      {copied && <span className="text-xs text-green-600">Copied!</span>}
    </div>
  );
};

// --- Main Component ---
export const IELTSInfo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-auto w-full">
          <BookOpen className="mr-2 h-4 w-4" /> Apply for IELTS Classes
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <DialogTitle>IELTS Class Application</DialogTitle>
          <DialogDescription>
            Please provide the following information and documents via email.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 text-sm max-h-[70vh] overflow-y-auto pr-4">
          {/* Email Section */}
          <EmailCopySection introText="Send all details and documents as attachments to:" />
          
          {/* Required Information Section */}
          <div>
            <h4 className="font-semibold mb-2 text-gray-800">Required Information:</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Full Name</li>
              <li>Date of Birth (D.O.B)</li>
              <li>IELTS General or Academic?</li>
              <li>Online or Physical classes preference?</li>
              <li>When is your exam scheduled (if known)?</li>
              <li>What is your targeted score?</li>
              <li>Are you readily available for online classes?</li>
            </ul>
          </div>
          
          {/* Required Documents Section */}
          <div>
            <h4 className="font-semibold mb-2 text-gray-800">Required Documents (Attach to Email):</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Data page of your international passport</li>
              <li>Recent passport-size photograph</li>
            </ul>
          </div>

           <p className="text-xs text-gray-500 italic">We will review your details and contact you regarding class schedules and fees.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}; 