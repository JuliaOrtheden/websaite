import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Hero background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-6xl font-bold mb-4">Your Product Name</h1>
        <p className="text-2xl mb-8">Revolutionizing the industry</p>
        <div className="space-x-4">
          <Button size="lg" variant="default">Learn More</Button>
          <Button size="lg" variant="outline">Get a Demo</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;