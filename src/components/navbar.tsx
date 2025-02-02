'use client';

import { FaShoppingCart, FaSearch } from 'react-icons/fa'; // Font Awesome icons
import Image from 'next/image'; // Next.js Image component
import { useState } from 'react';
import logo from '../../public/qversity_logo.png'; // Import logo image
import Link from 'next/link';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Handle search logic or redirect
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md shadow-xl p-4 rounded-b-lg border-b border-white/50 z-50 h-auto lg:h-20 text-gray-900 animate-fade-in">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-lg bg-white bg-opacity-50 p-1 shadow-lg"
          />
          <h1 className="text-2xl font-bold text-black text-shadow-lg">
            Qversity
          </h1>
        </div>
        <div className="hidden lg:flex justify-center space-x-6 text-gray-900 font-semibold">
          <ul className="flex space-x-6">
            <li>
              <Link href="/shop" className="hover:text-yellow-300 text-teal-900 hover:text-teal-700">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-300 text-teal-900 hover:text-teal-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-300 text-teal-900 hover:text-teal-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end items-center space-x-4 w-full lg:w-auto mt-4 lg:mt-0">
          <form onSubmit={handleSearch} className="flex items-center bg-white bg-opacity-60 text-gray-700 rounded-md px-2 py-2 w-full lg:w-64">
            <input
              type="text"
              className="w-full px-3 py-1 focus:outline-none"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="text-teal-900 hover:text-teal-700">
              <FaSearch />
            </button>
          </form>
          <FaShoppingCart className="text-teal-900 text-2xl hover:text-yellow-300" />
        </div>
      </div>

      {/* Mobile Navigation Links (Visible in Small Screens) */}
      <ul className="lg:hidden flex flex-wrap justify-center space-x-6 text-gray-900 text-lg pb-2 mt-2">
        <li>
          <Link href="/shop" className="hover:text-yellow-300 text-teal-900 hover:text-teal-700">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-yellow-300 text-teal-900 hover:text-teal-700">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-yellow-300 text-teal-900 hover:text-teal-700">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;