import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Dna, Rocket } from 'lucide-react';

const ReferenceCases = () => {
  return (
    <div className="min-h-screen bg-[#0f1116]">
      <Header />
      
      {/* Envue Technologies Case */}
      <section className="h-screen relative">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c"
          alt="Advanced laboratory environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 flex flex-col items-center justify-center text-center text-white">
          <div className="flex items-center gap-4 mb-4">
            <Dna className="w-8 h-8" />
            <h1 className="text-5xl font-bold">Envue Technologies</h1>
            <Rocket className="w-8 h-8" />
          </div>
          <p className="text-2xl mb-2">Revolutionizing Molecular Analysis</p>
          <p className="text-xl mb-2">200% Increase in Research Efficiency</p>
          <p className="text-lg mb-8 max-w-2xl">
            Groundbreaking patent-pending technology enabling unprecedented visualization of single nano-objects
          </p>
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