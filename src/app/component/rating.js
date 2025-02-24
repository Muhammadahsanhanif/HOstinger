import Image from "next/image";

export default function PromoSection() {
  return (
    <section className="bg-white text-gray-900 max-w-full p-8 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Left Side: Text Content */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-[#3d226d]">
          Everything you need to create a website
        </h1>
        <p className="text-[#683ea7] font-medium mt-2">
          Up to <span className="font-bold">75% off</span> hosting + website builder
        </p>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li className="flex items-center gap-2 justify-center md:justify-start">
            ✅ Free domain
          </li>
          <li className="flex items-center gap-2 justify-center md:justify-start">
            ✅ Free website migration
          </li>
          <li className="flex items-center gap-2 justify-center md:justify-start">
            ✅ 24/7 customer support
          </li>
        </ul>
        <p className="text-4xl font-bold text-gray-900 mt-4">
          US$ <span className="text-5xl">2.99</span>/mo
        </p>
        <p className="text-gray-600">+2 months free</p>
        {/* Call to Action */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
          <button className="bg-[#683ea7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#562c8f]">
            Claim deal
          </button>
          <div className="bg-gray-100 px-4 py-2 rounded-md font-semibold text-gray-700">
            00:09:40:16
          </div>
        </div>
        <p className="mt-2 text-gray-500 text-sm">💰 30-day money-back guarantee</p>
      </div>
      
      {/* Right Side: Image & UI Elements */}
      <div className="relative mt-10 md:mt-0 flex justify-center">
        <Image src="/ui-mockup.png" width={500} height={300} alt="Website builder UI" />
      </div>
    </section>
  );
}

export function RatingsSection() {
  return (
    <section className="bg-white text-gray-900 p-8 text-center">
      <h2 className="text-xl font-semibold">
        Recommended by <span className="font-bold">WordPress.org</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-12 mt-6">
        {/* Trustpilot */}
        <div className="text-center">
          <p>TrustScore <span className="font-bold">4.7</span> (40,787 reviews)</p>
          <p className="text-green-500">⭐⭐⭐⭐⭐</p>
        </div>
        {/* Google */}
        <div className="text-center">
          <p>Rating: <span className="font-bold">4.8/5</span> (1,237 reviews)</p>
          <p className="text-green-500">⭐⭐⭐⭐⭐</p>
        </div>
        {/* HostAdvice */}
        <div className="text-center">
          <p>Rating: <span className="font-bold">4.6/5</span> (2,432 reviews)</p>
          <p className="text-green-500">⭐⭐⭐⭐⭐</p>
        </div>
        {/* WPBeginner */}
        <div className="text-center">
          <p>Rating: <span className="font-bold">4.7</span> (874 reviews)</p>
          <p className="text-green-500">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </section>
  );
}
