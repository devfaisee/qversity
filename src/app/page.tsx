"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-48 sm:mt-20">
      {/* Hero Section */}
      <section className="hero bg-gray-800 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Rent Your Dream Car Today!</h1>
        <p className="mt-2">Affordable & Luxury Car Rentals at the Best Prices</p>
        <Link href="/cars">
          <button className="mt-4 px-6 py-2 bg-orange-500 rounded">Browse Cars</button>
        </Link>
      </section>
    </div>
  );
}
