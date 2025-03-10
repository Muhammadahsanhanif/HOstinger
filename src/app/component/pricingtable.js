'use client';

import React from 'react';

const PricingTable = () => {
 
  return (
    <div className="container mx-auto p-6 max-w-6xl text-center bg-white">
      <h1 className="text-3xl font-bold text-[#3d226d]">Pick your perfect plan</h1>
      <p className="text-gray-600 mt-2">
        Get started in complete confidence. Our 30-day money-back guarantee means it's risk-free.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {plans.map((plan, index) => (
          <div key={index} className={`p-6 border rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ${plan.popular ? 'border-[#3d226d]' : 'border-gray-300'}`}>
            <h2 className="text-2xl font-semibold text-gray-800">{plan.name}</h2>
            <p className="text-gray-600 mt-2">{plan.description}</p>
            <div className="mt-2">
              <span className="text-gray-500 line-through">{plan.originalPrice}</span>
              <span className="text-xl font-bold text-[#3d226d] ml-2">{plan.discountedPrice}/mo</span>
            </div>
            <button className="mt-4 px-4 py-2 bg-[#3d226d] text-white rounded-lg hover:bg-opacity-80 transition">Choose plan</button>
            <ul className="text-left mt-4 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-700">✅ {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};



const plans = [
  {
    name: 'Premium',
    description: 'Everything you need to create your website.',
    originalPrice: 'US$ 11.99',
    discountedPrice: 'US$ 2.99',
    popular: false,
    features: [
      '100 websites',
      'Managed Hosting for WordPress',
      '100 GB SSD storage',
      'Hostinger Website Builder',
      'Free domain (US$ 9.99 value)',
      'Free automatic website migration',
      'Free email',
      'Unlimited free SSL',
      'Weekly backups',
      'Starter WooCommerce',
    ],
  },
  {
    name: 'Business',
    description: 'Level up with more power and enhanced features.',
    originalPrice: 'US$ 11.99',
    discountedPrice: 'US$ 3.99',
    popular: true,
    features: [
      '100 websites',
      'Managed Hosting for WordPress',
      '200 GB NVMe storage',
      'Hostinger Website Builder',
      'Free domain (US$ 9.99 value)',
      'Free automatic website migration',
      'Free email',
      'Unlimited free SSL',
      'Daily backups (US$ 25.00 value)',
      'Basic WooCommerce',
    ],
  },
  {
    name: 'Cloud Startup',
    description: 'Enjoy optimized performance & powerful resources.',
    originalPrice: 'US$ 27.99',
    discountedPrice: 'US$ 7.99',
    popular: false,
    features: [
      '300 websites',
      'Managed Hosting for WordPress',
      '200 GB NVMe storage',
      'Hostinger Website Builder',
      'Free domain (US$ 9.99 value)',
      'Free automatic website migration',
      'Free email',
      'Unlimited free SSL',
      'Daily backups (US$ 25.00 value)',
      'Standard WooCommerce',
    ],
  },
];

const categories = [
  { name: 'Recommended', active: true },
  { name: 'Create a website', active: false },
  { name: 'Hosting', active: false },
  { name: 'Domains & email', active: false },
];

export default PricingTable;
