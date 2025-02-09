"use client";

import { FaShoppingCart, FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/qversity_logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-bg to-bg backdrop-blur-md shadow-xl p-4 rounded-b-lg border-b border-bg/50 z-50 h-auto lg:h-20 text-text">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src={logo}
              alt="Qversity Logo"
              width={40}
              height={40}
              className="rounded-lg bg-white bg-opacity-50 p-1 shadow-xl"
            />
          </Link>
          <Link href="/">
            <h1 className="text-3xl font-extrabold text-text drop-shadow-lg">
              Qversity
            </h1>
          </Link>
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <div className="hidden lg:flex justify-center space-x-6 font-semibold text-text">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-hover hover:font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-hover hover:font-semibold">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-hover hover:font-semibold">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-hover hover:font-semibold">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Search & Cart Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <FaSearch className="text-primary text-xl hover:text-hover cursor-pointer" />

          {/* Cart Icon */}
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-primary text-2xl hover:text-secondary" />
            {/* Example: Cart Items Badge (For Future Use) */}
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;