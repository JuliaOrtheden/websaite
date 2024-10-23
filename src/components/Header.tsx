import React from 'react';
import { Button } from '@/components/ui/button';
import MainNav from './MainNav';
import { Link } from 'react-router-dom';

const Header = () => {
  const emailSubject = encodeURIComponent("I want to discuss a new website");
  const emailBody = encodeURIComponent("Hi Ellen,\n\nI am interested in discussing how you can help me improve my website. I am [Your Name] and I want [Desired Features].\n\nHave a nice day!\n\nBest regards,\n[Your Name]");
  const mailtoLink = `mailto:ellen@websaite.tech?subject=${emailSubject}&body=${emailBody}`;

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-6">
        <div className="flex items-center space-x-8">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-2xl font-bold text-white">websaite</h1>
          </Link>
          <MainNav />
        </div>
        <div className="flex items-center space-x-4">
          <a href={mailtoLink}>
            <Button 
              variant="ghost" 
              className="text-white/80 hover:text-white/60 border border-white/80 hover:scale-105 hover:shadow-lg transform transition-all duration-200 ease-in-out"
            >
              Get in touch
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;