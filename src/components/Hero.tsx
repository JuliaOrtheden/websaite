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
              Zero-Effort Website Creation
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Your perfect website, created by AI in minutes
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl">
              Sit back and let AI do the work. No coding, no design skills needed. 
              Just tell us your vision, and we'll create a fully customizable website 
              that's ready to launch in minutes, not months.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Create your website
              </Button>
              <Button size="lg" variant="outline" className="text-white">
                Watch demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side with new animation */}
          <div className="flex-1 relative">
            <div className="relative w-[500px] h-[500px] mx-auto">
              {/* Pie Chart */}
              <div className="absolute top-0 left-0 w-32 h-32 animate-float">
                <div className="w-full h-full rounded-full border-4 border-blue-500 bg-blue-900/30 relative overflow-hidden">
                  <div className="absolute inset-0 origin-center animate-[spin_3s_linear_infinite]">
                    <div className="w-1/2 h-full bg-blue-500 origin-right"></div>
                  </div>
                </div>
              </div>

              {/* Browser Window V1 */}
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-64 animate-float-delayed">
                <div className="bg-blue-500/20 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                  <div className="flex gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 w-12 bg-white/10 rounded"></div>
                    <div className="h-2 w-full bg-white/10 rounded"></div>
                    <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Browser Window V2 */}
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-64 animate-float-more-delayed">
                <div className="bg-emerald-500/20 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/30">
                  <div className="flex gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-16 bg-white/10 rounded"></div>
                    <div className="h-16 bg-white/10 rounded"></div>
                    <div className="h-16 bg-white/10 rounded"></div>
                    <div className="h-2 w-full bg-white/10 rounded col-span-3"></div>
                    <div className="h-2 w-2/3 bg-white/10 rounded col-span-2"></div>
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path
                    d="M10,50 Q50,50 90,50"
                    stroke="rgb(59, 130, 246)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-draw-line"
                  />
                  <path
                    d="M90,50 L85,45 M90,50 L85,55"
                    stroke="rgb(59, 130, 246)"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
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