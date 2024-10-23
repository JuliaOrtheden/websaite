import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-[#0f1116] text-white">
      {/* CTA Section */}
      <div className="py-20 text-center bg-[#1E1B3C]">
        <h2 className="text-4xl font-bold mb-4">Ready to get started with Elevate?</h2>
        <p className="text-gray-300 mb-8">You're ready to unlock your digital potential. Ready, Set, GO!</p>
        <Button className="bg-blue-600 hover:bg-blue-700">Get started</Button>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold mb-4 text-lg">GLOBAL HQ</h3>
            <p className="text-gray-400">119 5th Ave 7th floor</p>
            <p className="text-gray-400 mb-4">New York, NY 10003, USA</p>
            <p className="text-gray-400">Phone: +1 603 594 0249</p>
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
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Working at Elevate</Link></li>
              <li><Link to="/diversity" className="text-gray-400 hover:text-white">Diversity & inclusion</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white">Executive team</Link></li>
              <li><Link to="/press" className="text-gray-400 hover:text-white">Press</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <span className="text-gray-400">© 2024 Elevate</span>
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