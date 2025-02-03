'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background image using Next.js Image component */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero.jpg"
          alt="lamborghini"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better text visibility */}
      <div className="text-center z-10 text-white">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Welcome to Qversity</h1>
        <p className="text-lg sm:text-2xl mb-8">Your One-Stop Shop for Rental Cars</p>
        <Link href="/shop">
          <button className="bg-secondary text-white px-6 py-2 rounded-lg text-lg hover:bg-accent transition duration-300">
            Rent Now
          </button>
        </Link>
      </div>
    </section>
  );
}
