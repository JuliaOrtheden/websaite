import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold">YourStartup</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="flex items-center">
                  Reference cases <ChevronDown className="ml-1 h-4 w-4" />
                </a>
              </li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Plans</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button>Get in touch</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;