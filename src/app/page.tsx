'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background image using Next.js Image component */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/8188880/pexels-photo-8188880.jpeg"
          alt="Stylish Shoes"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better text visibility */}
      <div className="text-center z-10 text-white">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Welcome to Qversity</h1>
        <p className="text-lg sm:text-2xl mb-8">Your One-Stop Shop for Stylish Shoes</p>
        <button className="bg-teal-500 text-white px-6 py-2 rounded-lg text-lg hover:bg-teal-600 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
}