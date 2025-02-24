'use client';

import { ChatBubbleLeftRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const TestimonialCard = () => {
  return (
    <div className="flex flex-col md:flex-row sm:flex-row items-center gap-8 bg-white shadow-lg rounded-2xl p-8 md:p-12 max-w-6xl mx-auto w-full h-auto">
      {/* Image Section */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden">
        <Image 
          src="/w=1760,sharpen=1 (5).avif" 
          alt="Testimonial" 
          height={600} 
          width={600} 
          className="object-cover" 
        />
        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-lg rounded-xl">
          ▶
        </button>
      </div>

      {/* Text Content */}
      <div className="flex-1 text-gray-700 h-auto">
        <ChatBubbleLeftRightIcon className="h-10 w-10 text-purple-500" />
        <p className="text-3xl font-medium mt-6 leading-relaxed">
          I could <span className="text-purple-500 font-bold">manage</span> the hosting, domain name,  
          and SSL certificate <span className="text-purple-500 font-bold">in one place</span>, which was really refreshing.
        </p>
        <a href="#" className="text-purple-500 font-semibold block mt-6 text-lg">Read the full story</a>

        {/* Author Info */}
        <div className="mt-8">
          <p className="font-bold text-gray-900 text-xl">Owen Phillips</p>
          <p className="text-gray-500 text-lg">gatefootforge.co.uk</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-6 mt-8">
          <button className="p-4 bg-gray-100 rounded-full hover:bg-gray-300">
            <ChevronLeftIcon className="h-8 w-8 text-gray-500" />
          </button>
          <button className="p-4 bg-gray-100 rounded-full hover:bg-gray-300">
            <ChevronRightIcon className="h-8 w-8 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;