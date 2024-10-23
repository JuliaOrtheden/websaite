import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Header from './Header';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1116] via-[#1E1B3C] to-[#6B46C1] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side content */}
          <div className="flex-1 text-left space-y-6 max-w-2xl">
            <div className="inline-block px-4 py-2 bg-black/30 rounded-full text-blue-400 mb-4">
              Introducing AI-Powered Website Creation
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Create websites your customers will love
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl">
              websAIte powers your entire website creation process, using AI to generate content with speed, 
              launch customizations with confidence, and deliver experiences of the highest quality.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get started
              </Button>
              <Button size="lg" variant="outline" className="text-white">
                See how it works <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side with circular diagram */}
          <div className="flex-1 relative">
            <div className="relative w-[500px] h-[500px] mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/20 animate-[spin_20s_linear_infinite]">
                {['Analyze', 'Plan', 'Create', 'Store', 'Globalize', 'Layout', 'Deliver', 'Personalize'].map((text, index) => (
                  <div
                    key={text}
                    className="absolute bg-blue-500 text-white rounded-full p-4 w-24 h-24 flex items-center justify-center text-sm font-medium"
                    style={{
                      transform: `rotate(${index * 45}deg) translateY(-200px) rotate(-${index * 45}deg)`,
                    }}
                  >
                    {text}
                  </div>
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-2xl font-bold text-white">
                    websAIte
                    <div className="text-blue-400 text-lg">One</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 200" className="w-full">
          <path
            fill="#000"
            fillOpacity="0.2"
            d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;