import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

const ReferenceCases = () => {
  return (
    <div className="min-h-screen bg-[#0f1116]">
      <Header />
      
      {/* Case 1 */}
      <section className="h-screen relative">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c"
          alt="Modern office space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/20">
          <h1 className="text-5xl font-bold mb-2">Company A</h1>
          <p className="text-xl mb-2">200% Productivity Increase</p>
          <p className="text-lg mb-8">Transform your workspace by December 2024</p>
          <div className="flex gap-4">
            <Button variant="default" size="lg" className="bg-white text-black hover:bg-white/90">
              Learn More
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              Case Study
            </Button>
          </div>
        </div>
      </section>

      {/* Case 2 */}
      <section className="h-screen relative">
        <img
          src="https://images.unsplash.com/photo-1664575602554-2087b04935a5"
          alt="Modern office interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/20">
          <h1 className="text-5xl font-bold mb-2">Company B</h1>
          <p className="text-xl mb-2">50% Cost Reduction</p>
          <p className="text-lg mb-8">Revolutionize your business operations</p>
          <div className="flex gap-4">
            <Button variant="default" size="lg" className="bg-white text-black hover:bg-white/90">
              Learn More
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              Case Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReferenceCases;