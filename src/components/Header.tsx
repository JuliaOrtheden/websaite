import React from 'react';
import { Button } from '@/components/ui/button';
import MainNav from './MainNav';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold">YourStartup</h1>
          <MainNav />
        </div>
        <div className="flex items-center space-x-4">
          <Button>Get in touch</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;