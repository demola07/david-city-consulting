import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ContactButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Scroll to the contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on a different page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        const homeContactSection = document.getElementById('contact');
        if (homeContactSection) {
          homeContactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 rounded-full p-4 h-14 w-14 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      variant="default"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default ContactButton; 