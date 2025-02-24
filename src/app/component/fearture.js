import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="bg-[#1A0B33] text-white py-16 px-4 sm:px-6 md:px-16 overflow-hidden">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Speed. Reliability. Efficiency.</h2>
        <p className="text-gray-300 mt-3">
          Enjoy top-notch performance you can rely on and give your website visitors a smooth experience.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
        <div className="bg-[#2D1B58] p-6 rounded-2xl shadow-lg">
          <div className="bg-purple-500 p-2 w-10 h-10 flex items-center justify-center rounded-lg">
            🌍
          </div>
          <h3 className="text-xl font-bold mt-4">Local data centers.<br/>Around the world.</h3>
          <p className="text-gray-300 mt-2">
            Wherever you are in the world, your site will automatically connect to the closest data center in our global network. Extra efficiency at no extra cost.
          </p>
        </div>
        
        <div className="bg-[#2D1B58] p-6 rounded-2xl shadow-lg">
          <div className="bg-purple-500 p-2 w-10 h-10 flex items-center justify-center rounded-lg">
            🚀
          </div>
          <h3 className="text-xl font-bold mt-4">Full speed ahead.<br/>Whatever the traffic.</h3>
          <p className="text-gray-300 mt-2">
            Benefit from lower response times and rapid page-loading speeds, no matter how high your site traffic spikes.
          </p>
        </div>
        
        <div className="bg-[#2D1B58] p-6 rounded-2xl shadow-lg">
          <div className="bg-purple-500 p-2 w-10 h-10 flex items-center justify-center rounded-lg">
            🔄
          </div>
          <h3 className="text-xl font-bold mt-4">Live and kicking.<br/>24/7.</h3>
          <p className="text-gray-300 mt-2">
            Day and night your site is working hard. Our 99.9% uptime guarantee means your website is always available.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 max-w-6xl mx-auto items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Total security. Complete confidence.</h2>
          <ul className="text-gray-300 mt-4 space-y-2">
            <li>✅ Secure your files with regular automatic backups and two-factor authentication</li>
            <li>✅ Encrypt your website traffic with unlimited SSL security certificates</li>
            <li>✅ Enjoy full protection from DDoS attacks with Cloudflare protected nameservers</li>
          </ul>
          <button className="mt-6 bg-pink-500 text-white py-3 px-6 rounded-lg font-bold">Get started</button>
        </div>
        
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-xl overflow-hidden">
          <Image 
            src="/w=1760,sharpen=1 (7).avif" 
            alt="Testimonial" 
            height={600} 
            width={600} 
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
