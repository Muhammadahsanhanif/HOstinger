import React from "react";
import Image from "next/image";


const WebHostingSection = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-purple-900 text-white p-8 flex flex-col md:flex-row items-center rounded-3xl gap-6 max-w-6xl w-full mx-auto">
      <div className="md:w-1/2 text-center md:text-left">
        <span className="bg-purple-700 text-sm px-4 py-1 rounded-full uppercase font-bold">Free Website Migration</span>
        <h2 className="text-2xl sm:text-3xl font-bold mt-4">Web Hosting</h2>
        <p className="text-gray-300 mt-2">Get unmatched website performance, high-speed hosting, and security you can trust.</p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image src="/w=1760,sharpen=1 (2).avif" alt="Web Hosting" width={500} height={300} className="shadow-lg w-full h-auto object-cover" />
      </div>
    </section>
  );
};

export default WebHostingSection;
