import React from "react";
import Image from "next/image";

const WebHostingSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-purple-900 text-white p-10  flex flex-col md:flex-row items-center  rounded-3xl gap-10 justify-center mx-auto
    w-[1250px] 
    ">
      <div className="md:w-1/2 text-center md:text-left">
        <span className="bg-purple-700 text-sm px-4 py-1 rounded-full uppercase font-bold">Free Website Migration</span>
        <h2 className="text-3xl font-bold mt-4">Web Hosting</h2>
        <p className="text-gray-300 mt-2">Get unmatched website performance, high-speed hosting, and security you can trust. Your growth is our goal.</p>
        <a href="#" className="text-blue-400 font-semibold mt-4 inline-block hover:underline">Start and scale &rarr;</a>
      </div>

      <div className="sm:w-1/2 relative flex  ">
        <div className=" relative left-10  top-10">
          <Image 
            src="/w=1760,sharpen=1 (2).avif" 
            alt="Web Hosting Illustration" 
            width={800} 
            height={600} 
            className=" shadow-lg w-[600px] h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WebHostingSection;
