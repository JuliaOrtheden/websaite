import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Plans = () => {
  return (
    <div className="min-h-screen bg-[#0f1116] text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-bold mb-6">Plans & pricing</h1>
          <p className="text-gray-400 text-lg">
            We're here to learn about your specific needs and provide customized pricing so you can make the next step towards optimized experiences.
          </p>
        </div>

        {/* Single Plan Card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-[#1a1d24] rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-800 rounded-lg">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 13L10 16L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-semibold">Content Marketing Platform</h2>
            </div>
            <p className="text-gray-400 mb-8">
              Plan campaigns, create content, and seamlessly collaborate across teams.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-purple-500" />
                <span>Digital asset management</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-purple-500" />
                <span>Handle tasks and workflows</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-purple-500" />
                <span>Streamline work requests</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-purple-500" />
                <span>Integrated calendar to track timelines</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-purple-500" />
                <span>Easy commenting and collaboration to avoid bottlenecks</span>
              </li>
            </ul>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Request pricing
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;