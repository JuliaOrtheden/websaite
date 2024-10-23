import React from 'react';
import { Button } from '@/components/ui/button';
import MainNav from './MainNav';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-6">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold text-white">websaite</h1>
          <MainNav />
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="text-white border-white hover:bg-white/10">Get in touch</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;