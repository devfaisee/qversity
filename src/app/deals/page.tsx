'use client';

import { useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Deals = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOption, setSortOption] = useState('default');

  const categories = ['All', 'Economy', 'Luxury', 'SUVs', 'Sedans'];
  const deals = [
    { id: 1, name: 'Economy Deal', category: 'Economy', price: 18, image: '/images/economy-deal.jpg' },
    { id: 2, name: 'Luxury Deal', category: 'Luxury', price: 45, image: '/images/luxury-deal.jpg' },
    { id: 3, name: 'SUV Deal', category: 'SUVs', price: 35, image: '/images/suv-deal.jpg' },
    { id: 4, name: 'Sedan Deal', category: 'Sedans', price: 28, image: '/images/sedan-deal.jpg' },
  ];

  const promotions = [
    { id: 1, image: '/images/deal1.jpg', link: '/promo' },
    { id: 2, image: '/images/deal2.jpg', link: '/promo' },
  ];

  const handleCategoryChange = (category) => setSelectedCategory(category);
  const handleSortChange = (e) => setSortOption(e.target.value);

  const filteredDeals = deals.filter((deal) => selectedCategory === 'All' || deal.category === selectedCategory);
  const sortedDeals = filteredDeals.sort((a, b) => (sortOption === 'price-asc' ? a.price - b.price : b.price - a.price));

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className='bg-[#F8F9FA] text-[#212529] py-16 px-6'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-semibold text-center mb-8'>Best Car Rental Deals</h2>

        <div className='mb-8'>
          <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
            {promotions.map((promo) => (
              <a key={promo.id} href={promo.link}>
                <Image src={promo.image} alt='Deal Promotion' width={4000} height={2250} className='w-full rounded-lg' />
              </a>
            ))}
          </Carousel>
        </div>

        <div className='flex justify-between mb-6'>
          <div className='flex space-x-4'>
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg ${selectedCategory === category ? 'bg-[#004AAD] text-white' : 'bg-white text-[#212529]'} hover:bg-[#F1F3F5] transition`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <select
            className='px-4 py-2 rounded-lg border border-[#6C757D] focus:outline-none'
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value='default'>Default</option>
            <option value='price-asc'>Price: Low to High</option>
            <option value='price-desc'>Price: High to Low</option>
          </select>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {sortedDeals.map((deal) => (
            <div key={deal.id} className='bg-white shadow-md rounded-lg p-6 hover:bg-[#F1F3F5] transition'>
              <Image src={deal.image} alt={deal.name} width={400} height={250} className='w-full h-48 object-cover rounded-lg mb-4' />
              <h3 className='text-xl font-semibold'>{deal.name}</h3>
              <p className='text-[#6C757D] mt-2'>${deal.price}/day</p>
              <a href={`/deals/${deal.id}`} className='mt-4 inline-block bg-[#004AAD] text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-[#002D73] transition'>
                View Deal
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Deals;
