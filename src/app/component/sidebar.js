import React from "react";
import Image from "next/image";

const DashboardPage = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto max-w-full min-h-screen bg-gray-100 items-center justify-center p-10 gap-10">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl bg-white p-10 rounded-lg shadow-lg">
        <Image 
          src="/w=1760,sharpen=1 (6).avif" 
          alt="Web Hosting Illustration" 
          width={1200} 
          height={750} 
          className="shadow-lg w-full md:w-1/2 h-auto object-cover rounded-lg"
        />
        <div className="p-8 w-full md:w-1/2 text-center md:text-left">
          <span className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">EASY TO USE DASHBOARD</span>
          <h2 className="text-4xl font-bold mt-4">See everything.<br />Control everything.</h2>
          <p className="text-gray-600 mt-2 text-lg">
            Keep an eye on everything that’s important to you with our easy-to-use dashboard.
            Designed to be easy-to-use for beginners and professionals alike, you can see at a glance how your site is performing and make adjustments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
