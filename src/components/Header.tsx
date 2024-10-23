import React from 'react';
import { Button } from '@/components/ui/button';
import MainNav from './MainNav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#0f1116]/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-12">
          <Link to="/" className="text-2xl font-bold text-white">websaite</Link>
          <MainNav />
        </div>
        <div>
          <Button variant="outline" className="text-white border-white hover:bg-white/10">
            Get in touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;