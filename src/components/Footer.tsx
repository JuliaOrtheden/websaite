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
          <Button variant="outline" className="border-2 hover:bg-white hover:text-black transition-colors">
            Get started
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-lg">GLOBAL HQ</h3>
            <p className="text-gray-400">Sveavägen 46</p>
            <p className="text-gray-400 mb-4">111 34 Stockholm, Sweden</p>
            <p className="text-gray-400">Phone: +46 8 123 45 67</p>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="font-bold mb-4 text-lg">PRODUCTS</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white/60 transition-colors">All products</Link></li>
              <li><Link to="/plans" className="text-white/80 hover:text-white/60 transition-colors">Plans & pricing</Link></li>
              <li><Link to="/roadmap" className="text-white/80 hover:text-white/60 transition-colors">Roadmap</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-lg">RESOURCES</h3>
            <ul className="space-y-2">
              <li><Link to="/insights" className="text-white/80 hover:text-white/60 transition-colors">Insights</Link></li>
              <li><Link to="/blog" className="text-white/80 hover:text-white/60 transition-colors">Blog</Link></li>
              <li><Link to="/developers" className="text-white/80 hover:text-white/60 transition-colors">Developers</Link></li>
              <li><Link to="/support" className="text-white/80 hover:text-white/60 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-lg">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/80 hover:text-white/60 transition-colors">About us</Link></li>
              <li><Link to="/careers" className="text-white/80 hover:text-white/60 transition-colors">Working at websaite</Link></li>
              <li><Link to="/diversity" className="text-white/80 hover:text-white/60 transition-colors">Diversity & inclusion</Link></li>
              <li><Link to="/team" className="text-white/80 hover:text-white/60 transition-colors">Executive team</Link></li>
              <li><Link to="/press" className="text-white/80 hover:text-white/60 transition-colors">Press</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <span className="text-gray-400">© 2024 websaite</span>
            <Link to="/privacy" className="text-white/80 hover:text-white/60 transition-colors">Privacy notice</Link>
            <Link to="/terms" className="text-white/80 hover:text-white/60 transition-colors">Website terms of use</Link>
            <Link to="/trust" className="text-white/80 hover:text-white/60 transition-colors">Trust center</Link>
            <button className="text-white/80 hover:text-white/60 transition-colors">Cookie settings</button>
          </div>
          <div>
            <button className="text-white/80 hover:text-white/60 transition-colors">Search</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;