export function RatingsSection() {
  return (
    <section className="bg-white text-gray-900 p-8 text-center w-full max-w-full overflow-hidden">
      <h2 className="text-xl font-semibold">
        Recommended by <span className="font-bold">WordPress.org</span>
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-6 px-4">
        {/* Trustpilot */}
        <div className="text-center min-w-[120px]">
          <p>TrustScore <span className="font-bold">4.7</span> (40,787 reviews)</p>
          <p className="text-green-500">⭐⭐⭐⭐⭐</p>
        </div>
        {/* Google */}
        <div className="text-center min-w-[120px]">
          <p>Rating: <span className="font-bold">4.8/5</span> (1,237 reviews)</p>
          <p className="text-green-500">⭐⭐⭐⭐⭐</p>
        </div>
        {/* HostAdvice */}
        <div className="text-center min-w-[120px]">
          <p>Rating: <span className="font-bold">4.6/5</span> (2,432 reviews)</p>
          <p className="text-green-500">⭐⭐⭐⭐⭐</p>
        </div>
        {/* WPBeginner */}
        <div className="text-center min-w-[120px]">
          <p>Rating: <span className="font-bold">4.7</span> (874 reviews)</p>
          <p className="text-green-500">⭐⭐⭐⭐⭐</p>
        </div>
      </div>
    </section>
  );
}
