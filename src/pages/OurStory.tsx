import React from 'react';
import Header from '@/components/Header';
import LogoCarousel from '@/components/LogoCarousel';
import HowItWorks from '@/components/HowItWorks';

const OurStory = () => {
  return (
    <div className="min-h-screen bg-[#0f1116]">
      <Header />
      <div className="pt-48 pb-16 bg-[#0f1116]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-white">
                Well, hello there!
              </h1>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-blue-400">We're websaite.</span>
              </h1>
            </div>
            <p className="text-lg text-gray-300">
              At websaite, we're revolutionizing website creation through the power of AI. We're on a mission to make professional web development accessible to everyone by automating the entire process of website design, development, and optimization. Our cutting-edge AI technology transforms your ideas into stunning, functional websites in minutes, not months.
            </p>
            <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
              See how it works →
            </button>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-[#0f1116]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Meet Our Leadership</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* CEO Card */}
            <div className="bg-white/5 rounded-3xl p-8 text-center backdrop-blur-sm">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <img
                  src="/julia-ceo.png"
                  alt="CEO"
                  className="w-full h-full object-cover rounded-full border-4 border-white/10"
                />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Julia Ortheden</h3>
              <div className="text-blue-400 font-medium mb-6">CEO</div>
              <p className="text-gray-400 leading-relaxed">
                Julia is a visionary leader with a MSc in Artificial Intelligence. Her unique blend of software engineering background and specialized knowledge in machine learning drives websaite's innovative approach. Through her experience in AI consulting and development, she leads our mission to revolutionize web development using cutting-edge AI technology.
              </p>
            </div>

            {/* CTO Card */}
            <div className="bg-white/5 rounded-3xl p-8 text-center backdrop-blur-sm">
              <div className="w-48 h-48 mx-auto mb-6 relative">
                <img
                  src="/tobias-cto.jpeg"
                  alt="CTO"
                  className="w-full h-full object-cover rounded-full border-4 border-white/10"
                />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Tobias Lindgren</h3>
              <div className="text-blue-400 font-medium mb-6">CTO</div>
              <p className="text-gray-400 leading-relaxed">
                Tobias is a technology innovator with deep expertise in web development. With a MSc. in Software Engineering and several years of full-stack consulting, he architects the components that power websaite's automated web development platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      <HowItWorks />
      <LogoCarousel />
    </div>
  );
};

export default OurStory;