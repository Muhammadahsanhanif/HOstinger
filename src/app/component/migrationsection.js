'use client';

import { BoltIcon, ClipboardDocumentListIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';

export default function MigrationSection() {
  return (
    <section className="bg-[#1a1234] w-full max-w-full text-white py-16 px-6 text-center overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Website migration. Made simple.</h2>
        <p className="mt-4 text-lg text-gray-300">
          Currently hosting your website elsewhere? Join the 3+ million website owners who enjoy fast, secure, and
          reliable web hosting here at Hostinger. Our expert team will handle everything while your site stays up and
          running throughout. That’s right – no downtime. No data loss. No problem.
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {/* Card 1 */}
        <div className="bg-[#2b1b54] p-6 rounded-xl flex flex-col items-center text-center shadow-lg w-full">
          <ClipboardDocumentListIcon className="w-12 h-12 text-purple-400" />
          <h3 className="mt-4 text-xl font-semibold">3 simple steps</h3>
          <p className="mt-2 text-gray-300">
            Simply pick your plan, fill in the migration request form, submit it and then sit back and relax.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#2b1b54] p-6 rounded-xl flex flex-col items-center text-center shadow-lg w-full">
          <BoltIcon className="w-12 h-12 text-purple-400" />
          <h3 className="mt-4 text-xl font-semibold">Fast and secure</h3>
          <p className="mt-2 text-gray-300">
            95% of websites are migrated in under 20 minutes. The other 5% are quicker than the industry average.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#2b1b54] p-6 rounded-xl flex flex-col items-center text-center shadow-lg w-full">
          <CheckBadgeIcon className="w-12 h-12 text-purple-400" />
          <h3 className="mt-4 text-xl font-semibold">Free</h3>
          <p className="mt-2 text-gray-300">
            Whether you have 1 website to migrate or 100, migration is free with all of our plans.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8">
        <button className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-pink-600">
          Get started
        </button>
      </div>
    </section>
  );
}
