import React from 'react';
import { Button } from '@/components/ui/button';
import MainNav from './MainNav';
import { Link } from 'react-router-dom';

const Header = () => {
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
          <Button variant="outline" className="text-white border-blue-500 bg-gradient-to-br from-[#0f1116] via-[#1E1B3C] to-[#6B46C1] hover:bg-gradient-to-br hover:from-[#0f1116]/80 hover:via-[#1E1B3C]/80 hover:to-[#6B46C1]/80">Get in touch</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;