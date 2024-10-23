import React from 'react';
import Header from '@/components/Header';
import LogoCarousel from '@/components/LogoCarousel';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-[#0f1116]">
      <Header />
      <div className="pt-32 pb-16 bg-[#0f1116]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Well, hello there! <span className="text-blue-400">We're websaite.</span>
              </h1>
              <p className="text-lg text-gray-300">
                At websaite, we're revolutionizing website creation through the power of AI. We're on a mission to make professional web development accessible to everyone by automating the entire process of website design, development, and optimization. Our cutting-edge AI technology transforms your ideas into stunning, functional websites in minutes, not months.
              </p>
              <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                See how it works →
              </button>
            </div>
            <div className="relative">
              <img
                src="/team-image.jpg"
                alt="websaite AI-powered website creation platform"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <LogoCarousel />
    </div>
  );
};

export default OurStory;