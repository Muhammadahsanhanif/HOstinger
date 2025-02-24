import Image from "next/image";

export default function PromoSection() {
  return (
    <section className=" container mx-auto flex flex-col md:flex-row gap-6 p-6  rounded-xl shadow-lg ">
      {/* Left Section */}
      <div className="bg-[#F4F1FE] p-6 rounded flex-1 flex flex-col justify-center relative h-full w-50">
        <span className="bg-[#D1C4E9] text-[#5E35B1] px-3 py-1 text-sm font-medium rounded-full w-max">
          NO CODING SKILLS NEEDED
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#2C1D6C] mt-4">
          Build a website <br /> with <span className="text-[#5E35B1]">AI</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Create your dream website in 3 simple <br/>steps with Hostinger Website Builder.
          Start a blog,<br/> launch an online store,<br/> showcase your portfolio, and more.
        </p>
        <a href="#" className="text-[#5E35B1] font-semibold mt-4 inline-block">
          Go live in minutes &rarr;
        </a>
        <div className="absolute top-4 right-0 w-40 md:w-56 lg:w-64">
          <Image
            src="/w=1760,sharpen=1 (3).avif"
            width={400}
            height={300}
            alt="Website Preview"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-[#6E47F5] text-white p-6 rounded-lg relative h-72 w-72">
        <div className="flex items-center gap-2">
          <span className="bg-[#512DA8] p-2 rounded-full">
            🌍
          </span>
          <h3 className="text-xl font-semibold">Find a domain that will <br/>help your business stand out</h3>
        </div>

                <Image 
                   src="/w=1760,sharpen=1 (4).avif" 
                   alt="Web Hosting Illustration" 
                   width={800} 
                   height={100} 
                   className=" shadow-lg w-[600px] h-[100px] object-cover"
                 />
      </div>
    </section>
  );
}