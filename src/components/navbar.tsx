'use client';

import { FaShoppingCart } from 'react-icons/fa'; // Font Awesome cart icon
import Image from 'next/image'; // Next.js Image component
import { useState, useEffect } from 'react';
import logo from '../../public/qversity_logo.png'; // Import logo image
import Link from 'next/link';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // Add searchQuery state

  const handleScroll = () => {
    if (window.scrollY > 50) { // Adjust this value as needed
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full transition-all duration-300 ${isSticky ? 'bg-opacity-60 backdrop-blur-md' : 'bg-opacity-40'} bg-white shadow-md p-4 rounded-b-lg border-b border-gray-200 z-50`}>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-4">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Logo" width={40} height={40} className="rounded-lg bg-white bg-opacity-50 p-1 shadow-lg" />
          <h1 className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Qversity</h1>
        </div>
        <div className="hidden lg:flex justify-center space-x-6 text-gray-900 font-semibold">
          <ul className="flex space-x-6">
            <li>
              <Link href="/shop" className="hover:text-yellow-300">Shop</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-300">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-end items-center space-x-4">
          <input
            type="text"
            className="w-full lg:w-64 px-4 py-2 border border-gray-300 rounded-md bg-white bg-opacity-60 text-gray-900 focus:ring-2 focus:ring-purple-500"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaShoppingCart className="text-gray-900 text-2xl hover:text-yellow-300" />
        </div>
        <div className="flex lg:hidden justify-center space-x-6 text-gray-900 font-semibold mt-4 lg:mt-0">
          <ul className="flex space-x-6">
            <li>
              <Link href="/shop" className="hover:text-yellow-300">Shop</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-yellow-300">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
