
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 mt-20">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          David City Consulting is a virtual company with physical presence @ Mainland Lagos State Nigeria.
        </p>
        <p className="text-sm mb-4">
          We operate virtually but schedule physical appointments when necessary.
        </p>
        
        <div className="mb-4">
          <Link 
            to="/privacy-policy" 
            className="text-sm text-gray-400 hover:text-white transition-colors duration-200 underline"
          >
            Privacy Policy
          </Link>
        </div>
        
        <p className="text-xs mt-4">
          &copy; {new Date().getFullYear()} David City Consulting Firm <span className="font-bold">Ltd</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
