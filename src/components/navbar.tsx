'use client';

import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../../public/qversity_logo.png';
import Link from 'next/link';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Redirect or handle search logic here
    }
  };

  return (
    <nav className="bg-teal-900 bg-opacity-80 backdrop-blur-md p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <Link href="/" className="text-white ml-2 text-xl font-bold">
            Qversity
          </Link>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex items-center bg-white text-gray-700 rounded-md px-2 py-1 w-60 sm:w-72">
          <input
            type="text"
            className="w-full px-2 py-1 focus:outline-none"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="text-teal-900 hover:text-teal-700">
            <FaSearch />
          </button>
        </form>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white text-lg">
          <li>
            <Link href="/shop" className="hover:text-yellow-300">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Cart Icon */}
        <div className="text-white text-2xl hover:text-yellow-300">
          <FaShoppingCart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
