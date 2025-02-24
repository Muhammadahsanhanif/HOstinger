import Image from "next/image";

export default function PromoSection() {
  return (
    <section className="bg-white text-gray-900 px-4 sm:px-6 md:px-12 py-8 w-full flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden">
      {/* Left Side: Text Content */}
      <div className="max-w-lg w-full text-center md:text-left space-y-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#3d226d] leading-tight">
          Everything you need to create a website
        </h1>
        <p className="text-[#683ea7] font-medium text-lg sm:text-xl">
          Up to <span className="font-bold">75% off</span> hosting + website builder
        </p>
        <ul className="mt-4 space-y-2 text-gray-700 text-sm sm:text-base">
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
        <p className="text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
          US$ <span className="text-5xl">2.99</span>/mo
        </p>
        <p className="text-gray-600 text-sm sm:text-base">+2 months free</p>

        {/* Call to Action */}
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-[#683ea7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#562c8f] transition-all">
            Claim deal
          </button>
          <div className="bg-gray-100 px-4 py-2 rounded-md font-semibold text-gray-700 text-sm sm:text-base">
            00:09:40:16
          </div>
        </div>
        <p className="mt-2 text-gray-500 text-xs sm:text-sm">💰 30-day money-back guarantee</p>
      </div>

      {/* Right Side: Image & UI Elements */}
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl flex justify-center">
        <Image
          src="/w=1760,sharpen=1.avif"
          width={500}
          height={300}
          alt="Website builder UI"
          className="w-full max-w-full h-auto object-contain rounded-lg"
          priority
        />
      </div>
    </section>
  );
}
