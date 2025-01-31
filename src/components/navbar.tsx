'use client';

import { FaShoppingCart } from 'react-icons/fa'; // Font Awesome cart icon
import Image from 'next/image'; // Next.js Image component
import { useState } from 'react';
import logo from '../../public/qversity_logo.png'; // Import logo image
import { useEffect } from 'react';
import Link from 'next/link';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Ensure hydration by matching the server and client HTML
    setIsOpen(false);
  }, []);

  return (
    <nav className="bg-teal-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <a href='../app/page' className="text-white ml-2 text-xl font-bold" >Qversity</a> 
        </div>
        <div className="block lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            ☰
          </button>
        </div>
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} space-x-6 text-white`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-6">
          <li>
  <Link href="/shop" className="hover:text-yellow-300">Shop
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
          <div className="flex items-center">
            <FaShoppingCart className="text-white text-2xl hover:text-yellow-300" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
