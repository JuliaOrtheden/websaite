import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Footer = () => {
  const emailSubject = encodeURIComponent("I want to discuss a new website");
  const emailBody = encodeURIComponent("Hi Ellen,\n\nI am interested in discussing how you can help me improve my website. I am [Your Name] and I want [Desired Features].\n\nHave a nice day!\n\nBest regards,\n[Your Name]");
  const mailtoLink = `mailto:ellen@websaite.tech?subject=${emailSubject}&body=${emailBody}`;

  return (
    <footer className="bg-gradient-to-br from-[#0f1116] via-[#1E1B3C] to-[#6B46C1] text-white">
      {/* CTA Section */}
      <div className="py-32 text-center bg-gradient-to-br from-black/40 via-black/30 to-transparent backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-4xl font-medium mb-4">Ready to get started with a websaite?</h2>
          <p className="text-gray-400 mb-8">You're ready to unlock your digital potential. Ready, Set, GO!</p>
          <a href={mailtoLink}>
            <Button 
              variant="outline" 
              className="border-2 border-white bg-black/20 hover:bg-black/40 text-white hover:scale-105 hover:shadow-lg transform transition-all duration-200 ease-in-out"
            >
              Get started
            </Button>
          </a>
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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex justify-center">
          <span className="text-gray-400">© 2024 websaite</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;