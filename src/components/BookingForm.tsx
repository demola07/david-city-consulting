import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingForm = ({ isOpen, onClose }: BookingFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    state: "",
    serviceType: "",
    preferredCountry: "",
    document: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Submitted!",
      description: "We'll get back to you shortly to confirm your appointment.",
      duration: 5000,
    });
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[90vw] overflow-y-auto">
        <div className="mx-auto w-full max-w-6xl">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Book Your Appointment
            </SheetTitle>
          </SheetHeader>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    required
                    placeholder="+1234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input
                    id="country"
                    required
                    placeholder="Your Country"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input
                    id="state"
                    required
                    placeholder="Your State"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="serviceType">Service Type</Label>
                  <Select
                    value={formData.serviceType}
                    onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="study">Study Abroad</SelectItem>
                      <SelectItem value="tourism">Tourism</SelectItem>
                      <SelectItem value="conference">Conference</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredCountry">Preferred Destination</Label>
                  <Input
                    id="preferredCountry"
                    required
                    placeholder="Preferred Country"
                    value={formData.preferredCountry}
                    onChange={(e) => setFormData({ ...formData, preferredCountry: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="document">Supporting Document</Label>
                  <Input
                    id="document"
                    type="file"
                    onChange={(e) => {
                      const file = e.target.files?.[0] || null;
                      setFormData({ ...formData, document: file });
                    }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  required
                  placeholder="Your full address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="min-h-[100px]"
                />
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  className="px-6"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6"
                >
                  Submit Booking
                </Button>
              </div>
            </form>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BookingForm;