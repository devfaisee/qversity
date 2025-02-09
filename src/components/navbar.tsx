"use client";

import { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/qversity_logo.png";


// Define type for cart items
type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]); // ✅ Type added

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
    }
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full bg-gradient-to-r from-bg to-bg backdrop-blur-md shadow-xl p-4 rounded-b-lg border-b border-bg/50 z-50 h-auto lg:h-20 text-text animate-fade-in`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
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

          {/* Navigation Links */}
          <div className="hidden lg:flex justify-center space-x-6 font-semibold text-text">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-text hover:text-hover hover:font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-text hover:text-hover hover:font-semibold"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-text hover:text-hover hover:font-semibold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-text hover:text-hover hover:font-semibold"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Search & Cart Icons */}
          <div className="flex justify-end items-center space-x-4 w-full lg:w-auto mt-4 lg:mt-0">
            {/* Search Bar */}
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white bg-opacity-60 text-primary rounded-md px-2 py-2 w-full lg:w-64 shadow-lg"
            >
              <input
                type="text"
                className="w-full px-3 py-1 focus:outline-none text-primary"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="text-secondary hover:text-hover">
                <FaSearch />
              </button>
            </form>

            {/* Cart Icon */}
            <div className="relative cursor-pointer" onClick={toggleCart}>
              <FaShoppingCart className="text-primary text-2xl hover:text-secondary" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </nav>


    </>
  );
};

export default Navbar;