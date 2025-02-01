'use client';

import { FaShoppingCart, FaSearch } from 'react-icons/fa'; // Import both icons at once
import Image from 'next/image'; // Next.js Image component
import { useState, useEffect } from 'react';
import logo from '../../public/qversity_logo.png'; // Import logo image
import Link from 'next/link';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle Navbar Stickiness on Scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Search Submit
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add search logic (if required)
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full transition-all duration-300 ${isSticky ? 'bg-opacity-80 backdrop-blur-md' : 'bg-opacity-90'} bg-teal-900 shadow-md z-50`}>
      <div className="container mx-auto flex flex-col items-center">
        
        {/* Top Navbar */}
        <div className="w-full flex justify-between items-center py-3 px-4 md:px-6">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" width={40} height={40} />
            <Link href="/" className="text-white text-xl font-bold">Qversity</Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-6 text-white text-lg">
            <li><Link href="/shop" className="hover:text-yellow-300">Shop</Link></li>
            <li><Link href="/about" className="hover:text-yellow-300">About</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>
          </ul>

          {/* Cart Icon */}
          <div className="text-white text-2xl hover:text-yellow-300">
            <FaShoppingCart />
          </div>

        </div>

        {/* Search Bar */}
        <div className="w-full px-4 pb-3">
          <form onSubmit={handleSearch} className="flex items-center bg-white text-gray-700 rounded-md px-2 py-2 w-full max-w-sm mx-auto">
            <input
              type="text"
              className="w-full px-3 py-1 focus:outline-none"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="text-teal-900 hover:text-teal-700">
              <FaSearch />
            </button>
          </form>
        </div>

        {/* Mobile Navigation Links */}
        <ul className="md:hidden flex flex-wrap justify-center space-x-6 text-white text-lg pb-2">
          <li><Link href="/shop" className="hover:text-yellow-300">Shop</Link></li>
          <li><Link href="/about" className="hover:text-yellow-300">About</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;