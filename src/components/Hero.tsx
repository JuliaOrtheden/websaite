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

          {/* Right side with animation */}
          <div className="flex-1 relative">
            <div className="relative w-[800px] h-[600px] mx-auto">
              {/* Browser Window V1 */}
              <div className="absolute left-0 bottom-0 w-80 animate-float">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex gap-4 items-center">
                      <div className="h-12 w-12 bg-white/10 rounded-lg"></div>
                      <div className="space-y-2 flex-1">
                        <div className="h-3 w-24 bg-white/10 rounded"></div>
                        <div className="h-3 w-32 bg-white/10 rounded"></div>
                      </div>
                    </div>
                    <div className="h-3 w-full bg-white/10 rounded"></div>
                    <div className="h-3 w-3/4 bg-white/10 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Browser Window V2 */}
              <div className="absolute right-0 bottom-0 w-80 animate-float-delayed">
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 backdrop-blur-lg rounded-2xl p-6 border border-emerald-400/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-20 bg-white/10 rounded-lg"></div>
                    <div className="h-20 bg-white/10 rounded-lg"></div>
                    <div className="h-20 bg-white/10 rounded-lg"></div>
                    <div className="h-3 w-full bg-white/10 rounded col-span-3"></div>
                    <div className="h-3 w-2/3 bg-white/10 rounded col-span-2"></div>
                  </div>
                </div>
              </div>

              {/* Browser Window V3 - Design Tool */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 animate-float-more-delayed">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-400/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  </div>
                  <div className="relative">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-16 bg-white/10 rounded-lg"></div>
                        <div className="h-16 bg-white/10 rounded-lg"></div>
                      </div>
                      
                      <div className="absolute w-3 h-3 bg-white rounded-full animate-moving-pen">
                        <div className="absolute -top-1 -right-1 w-1 h-1 bg-white rounded-full"></div>
                      </div>
                      
                      <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="absolute bottom-0 left-0 w-2 h-2 bg-blue-400 rounded-full"></div>
                      
                      <div className="absolute inset-0 border-2 border-blue-400/30 rounded-lg pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Numbered List Overlay */}
              <div className="absolute -left-32 top-1/2 -translate-y-1/2 bg-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="space-y-3 text-left text-white/90">
                  <div className="flex items-center gap-2 opacity-0 animate-fade-in-1">
                    <span className="text-sm">1</span>
                    <div className="h-3 w-20 bg-white/20 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 animate-fade-in-2">
                    <span className="text-sm">2</span>
                    <div className="h-3 w-16 bg-white/20 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 animate-fade-in-3">
                    <span className="text-sm">3</span>
                    <div className="h-3 w-24 bg-white/20 rounded"></div>
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