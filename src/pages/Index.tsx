import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RoleCategories from '@/components/RoleCategories';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <RoleCategories />
    </div>
  );
};

export default Index;