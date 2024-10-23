import React from 'react';
import { Button } from '@/components/ui/button';
import MainNav from './MainNav';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

const Header = () => {
  const emailSubject = encodeURIComponent("I want to discuss a new website");
  const emailBody = encodeURIComponent("Hi Ellen,\n\nI am interested in discussing how you can help me improve my website. I am [Your Name] and I want [Desired Features].\n\nHave a nice day!\n\nBest regards,\n[Your Name]");
  const mailtoLink = `mailto:ellen@websaite.tech?subject=${emailSubject}&body=${emailBody}`;

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-6">
        <div className="flex items-center space-x-8">
          <Link to="/" className="hover:opacity-80 transition-opacity flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-400" />
            <h1 className="text-2xl font-bold text-white">websaite</h1>
          </Link>
          <MainNav />
        </div>
        <div className="flex items-center space-x-4">
          <a href={mailtoLink} className="text-white hover:text-white/80 bg-transparent hover:bg-white/10 flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground border border-purple-500">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;