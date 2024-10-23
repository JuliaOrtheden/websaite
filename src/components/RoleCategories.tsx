import React from 'react';

const RoleCategories = () => {
  return (
    <div className="bg-[#0f1116] text-white py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Hello, we're Optimizely. And you are...?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Digital Leader */}
          <div className="space-y-4">
            <div className="text-sm text-blue-400 font-medium">DIGITAL LEADER</div>
            <h3 className="text-2xl font-semibold">You need to see measurable ROI.</h3>
            <p className="text-gray-400">
              No sweat. Keep your digital experiences on a par with your competitors and stay profitable – even when times get tough.
            </p>
          </div>

          {/* Creator */}
          <div className="space-y-4">
            <div className="text-sm text-blue-400 font-medium">CREATOR</div>
            <h3 className="text-2xl font-semibold">You love to create standout content.</h3>
            <p className="text-gray-400">
              Not to mention exceptional experiences. And all as quickly and easily as possible. Allow us to help you make it happen.
            </p>
          </div>

          {/* Optimizer */}
          <div className="space-y-4">
            <div className="text-sm text-blue-400 font-medium">OPTIMIZER</div>
            <h3 className="text-2xl font-semibold">You can't stop making things better.</h3>
            <p className="text-gray-400">
              You're constantly testing, validating, and refining new and better ways to increase business performance. We think just like you.
            </p>
          </div>

          {/* Developer */}
          <div className="space-y-4">
            <div className="text-sm text-blue-400 font-medium">DEVELOPER</div>
            <h3 className="text-2xl font-semibold">You want speed with safety.</h3>
            <p className="text-gray-400">
              You need to continuously develop and release new products and features, quickly AND safely. We bring it all together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleCategories;