import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Header from './Header';

const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1116] via-[#1E1B3C] to-[#6B46C1] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
      <Header />

      <div className="container mx-auto px-4 pt-48 pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
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
              <Button size="lg" variant="outline" className="text-white">
                Watch demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side with animation */}
          <div className="flex-1 relative">
            <div className="relative w-[600px] h-[400px] mx-auto">
              {/* Browser Window V1 */}
              <div className="absolute left-0 bottom-0 w-64 animate-float">
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
              <div className="absolute right-0 bottom-0 w-64 animate-float-delayed">
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

              {/* Browser Window V3 - Design Tool */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 animate-float-more-delayed">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30 shadow-xl">
                  {/* Window Controls */}
                  <div className="flex gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                  </div>
                  
                  {/* Design Tool Interface */}
                  <div className="relative">
                    {/* Main Canvas */}
                    <div className="bg-white/10 rounded-lg p-3">
                      {/* Grid Layout */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-white/20 rounded"></div>
                        <div className="h-16 bg-white/20 rounded"></div>
                      </div>
                      
                      {/* Moving Pen */}
                      <div className="absolute w-3 h-3 bg-white rounded-full animate-moving-pen">
                        <div className="absolute -top-1 -right-1 w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      
                      {/* Resize Handles */}
                      <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                      
                      {/* Guidelines */}
                      <div className="absolute inset-0 border-2 border-blue-400 rounded pointer-events-none"></div>
                    </div>
                    
                    {/* Numbered List Overlay */}
                    <div className="absolute -left-32 top-1/2 -translate-y-1/2 bg-purple-600 rounded-lg p-3 shadow-lg">
                      <div className="space-y-2 text-left text-white/90">
                        <div className="flex items-center gap-2 opacity-0 animate-fade-in-1">
                          <span className="text-sm">1</span>
                          <div className="h-2 w-20 bg-white/30 rounded"></div>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 animate-fade-in-2">
                          <span className="text-sm">2</span>
                          <div className="h-2 w-16 bg-white/30 rounded"></div>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 animate-fade-in-3">
                          <span className="text-sm">3</span>
                          <div className="h-2 w-24 bg-white/30 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved transition at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 200"
          className="w-full transform translate-y-1"
          preserveAspectRatio="none"
          fill="#0f1116"
        >
          <path
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
