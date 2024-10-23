import React from 'react';

const Results = () => {
  return (
    <div className="bg-[#0f1116] text-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl font-bold mb-6">The results speak for themselves</h2>
          <p className="text-xl text-gray-400">
            We help the world's most successful brands make great things happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Content Marketing Platform */}
          <div className="bg-[#1a1d24] rounded-xl p-6 space-y-4">
            <div className="text-sm text-blue-400">CONTENT MARKETING PLATFORM</div>
            <div className="flex items-center gap-4">
              <img src="/xerox-logo.svg" alt="Xerox" className="h-8" />
              <div className="text-4xl font-bold text-blue-400">500+</div>
            </div>
            <div className="text-gray-400">active users in CMP</div>
          </div>

          {/* Web Experimentation */}
          <div className="bg-[#1a1d24] rounded-xl p-6 space-y-4">
            <div className="text-sm text-blue-400">WEB EXPERIMENTATION</div>
            <div className="flex items-center gap-4">
              <img src="/hp-logo.svg" alt="HP" className="h-8" />
              <div className="text-4xl font-bold text-blue-400">$21M</div>
            </div>
            <div className="text-gray-400">Incremental revenue impact</div>
          </div>

          {/* Configured Commerce */}
          <div className="bg-[#1a1d24] rounded-xl p-6 space-y-4">
            <div className="text-sm text-blue-400">CONFIGURED COMMERCE</div>
            <div className="flex items-center gap-4">
              <img src="/ameripride-logo.svg" alt="AmeriPride" className="h-8" />
              <div className="text-4xl font-bold text-blue-400">40,000</div>
            </div>
            <div className="text-gray-400">CSR hours saved annually</div>
          </div>

          {/* Content Management System */}
          <div className="bg-[#1a1d24] rounded-xl p-6 space-y-4">
            <div className="text-sm text-blue-400">CONTENT MANAGEMENT SYSTEM</div>
            <div className="flex items-center gap-4">
              <img src="/fresh-produce-logo.svg" alt="Fresh Produce" className="h-8" />
              <div className="text-4xl font-bold text-blue-400">33%</div>
            </div>
            <div className="text-gray-400">Increase in user engagement</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;