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
        <form onSubmit={handleSearch} className="flex items-center bg-white text-gray
