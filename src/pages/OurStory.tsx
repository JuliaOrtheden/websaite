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
                Well, hello there! <span className="text-blue-400">We're Optimizely.</span>
              </h1>
              <p className="text-lg text-gray-300">
                At Optimizely, we're on a mission to help people unlock their digital potential. We do that by reinventing how marketing and product teams work to create and optimize digital experiences across all channels. With our leading digital experience platform (DXP), we help companies around the world orchestrate their entire content lifecycle, monetize every digital experience and experiment across all customer touchpoints.
              </p>
              <p className="text-lg text-gray-300">
                Optimizely has 700+ partners and nearly 1500 employees across our 21 global offices. We are proud to help more than 10,000 businesses, including H&M, PayPal, Zoom, Toyota and Vodafone, enrich their customer lifetime value, increase revenue and grow their brands. At Optimizely, we live each day with a simple philosophy: large enough to serve, small enough to care.
              </p>
              <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                All global office locations →
              </button>
            </div>
            <div className="relative">
              <img
                src="/team-image.jpg"
                alt="Optimizely team members holding colorful signs"
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