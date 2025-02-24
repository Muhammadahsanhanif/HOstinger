import Image from 'next/image';

const testimonials = [
  {
    name: "Charlie Low",
    role: "Co-founder of Nohma",
    image: "/w=1760,sharpen=1 (10).avif",
    rating: 5,
    text: "Ever since we've been with Hostinger, it's been amazing. We've not really had any issues at all and if we ever do have a question, their customer service is incredible.",
  },
  {
    name: "Jack Bies",
    role: "Creative director",
    image: "/w=1760,sharpen=1 (9).avif",
    rating: 5,
    text: "Hostinger’s Customer Success team goes above and beyond to understand my problem.",
  },
  {
    name: "Jhon Ortega",
    role: "Entrepreneur",
    image: "/w=1760,sharpen=1 (8).avif",
    rating: 5,
    text: "I was looking for a hosting company that is very intuitive for beginners and very well-configured for good performance.",
  },
];

export default function Card() {
  return (
    <section className="py-12 bg-white text-center overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-6">
        Trusted by 3+ million website owners worldwide
      </h2>

      <div className="container mx-auto grid gap-6 md:grid-cols-3 px-4 max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-md p-6 text-left bg-white transition-transform transform hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={50}
                height={50}
                className="rounded-full border border-indigo-500"
              />
              <div>
                <h3 className="font-bold text-indigo-700">{testimonial.name}</h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <div className="mt-4 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="text-yellow-400">★</span>
              ))}
            </div>
            <p className="text-gray-600 mt-3">{testimonial.text}</p>
            <a href="#" className="text-indigo-600 font-semibold mt-4 block">
              Read the full story
            </a>
          </div>
        ))}
      </div>

      <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
        Read more stories
      </button>

      {/* 24/7 Support Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center mt-12 px-4 max-w-6xl">
        <div className="md:w-1/2 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4">Here to help 24/7</h2>
          <ul className="text-gray-600 space-y-2">
            <li>✔ Access expert support whenever you need it via live chat and email</li>
            <li>✔ Our specialists are fluent in 10+ languages so you can be sure communication will be smooth</li>
            <li>✔ Spend less time waiting, our speedy support team typically responds in under 2 minutes</li>
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/w=1760,sharpen=1 (11).avif"
            alt="Support Chat"
            width={500}
            height={300}
            className="rounded-lg shadow-lg w-full h-auto object-cover max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
}
