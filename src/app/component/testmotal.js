'use client';

import { ChatBubbleLeftRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';


const TestimonialCard = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto w-full">
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-xl overflow-hidden">
        <Image src="/w=1760,sharpen=1 (5).avif" alt="Testimonial" height={600} width={600} className="object-cover" />
      </div>
      <div className="flex-1 text-gray-700">
        <ChatBubbleLeftRightIcon className="h-8 w-8 text-purple-500" />
        <p className="text-lg sm:text-2xl font-medium mt-4">
          I could <span className="text-purple-500 font-bold">manage</span> everything in one place.
        </p>
        <p className="font-bold text-gray-900 text-lg sm:text-xl mt-4">Owen Phillips</p>
        <p className="text-gray-500 text-sm sm:text-lg">gatefootforge.co.uk</p>
      </div>
    </div>
  );
};
export default TestimonialCard;
