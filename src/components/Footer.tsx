import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-[#0f1116] text-white">
      {/* Top curve transition */}
      <div className="relative overflow-hidden">
        <svg
          viewBox="0 0 1440 200"
          className="w-full transform rotate-180"
          preserveAspectRatio="none"
          fill="#1E1B3C"
        >
          <path
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,101.3C960,117,1056,139,1152,133.3C1248,128,1344,96,1392,80L1440,64L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
        </svg>
      </div>

      {/* CTA Section */}
      <div className="py-20 text-center bg-[#1E1B3C] relative">
        <h2 className="text-4xl font-bold mb-4">Ready to get started with websaite?</h2>
        <p className="text-gray-300 mb-8">You're ready to unlock your digital potential. Ready, Set, GO!</p>
        <Button className="bg-blue-600 hover:bg-blue-700">Get started</Button>
      </div>

      {/* Bottom curve transition */}
      <div className="relative overflow-hidden">
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

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
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
              <li><Link to="/" className="text-gray-400 hover:text-white">All products</Link></li>
              <li><Link to="/plans" className="text-gray-400 hover:text-white">Plans & pricing</Link></li>
              <li><Link to="/roadmap" className="text-gray-400 hover:text-white">Roadmap</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold mb-4 text-lg">RESOURCES</h3>
            <ul className="space-y-2">
              <li><Link to="/insights" className="text-gray-400 hover:text-white">Insights</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/developers" className="text-gray-400 hover:text-white">Developers</Link></li>
              <li><Link to="/support" className="text-gray-400 hover:text-white">Support</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-lg">COMPANY</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Working at websaite</Link></li>
              <li><Link to="/diversity" className="text-gray-400 hover:text-white">Diversity & inclusion</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white">Executive team</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-white">Press</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <span className="text-gray-400">© 2024 websaite</span>
            <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy notice</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">Website terms of use</Link>
            <Link to="/trust" className="text-gray-400 hover:text-white">Trust center</Link>
            <button className="text-gray-400 hover:text-white">Cookie settings</button>
          </div>
          <div>
            <button className="text-gray-400 hover:text-white">Search</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
