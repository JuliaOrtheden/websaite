import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-[#0f1116] text-white">
      {/* CTA Section */}
      <div className="py-32 text-center bg-black">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-medium mb-4">Ready to get started with websaite?</h2>
          <p className="text-gray-400 mb-8">You're ready to unlock your digital potential. Ready, Set, GO!</p>
          <Button variant="outline" className="border-2 border-purple-500 bg-black hover:bg-black/80 text-white">
            Get started
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-center gap-8">
          <Link to="/reference-cases" className="text-white/80 hover:text-white/60 transition-colors">
            Reference cases
          </Link>
          <Link to="/our-story" className="text-white/80 hover:text-white/60 transition-colors">
            Our story
          </Link>
          <Link to="/plans" className="text-white/80 hover:text-white/60 transition-colors">
            Plans
          </Link>
          <Button variant="outline" className="text-white border-purple-500 bg-black hover:bg-black/80">
            Get in touch
          </Button>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex justify-center">
          <span className="text-gray-400">© 2024 websaite</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;