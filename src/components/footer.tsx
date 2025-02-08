import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        
        {/* Brand & Trust Statement */}
        <div>
          <h2 className="text-white text-xl font-bold">Qversity</h2>
          <p className="mt-2 text-sm">
            Your trusted car rental partner. Affordable rates, seamless bookings, and premium service.
          </p>
          <div className="flex space-x-3 mt-4">
            <Image src="/social/visa.png" alt="Visa" width={40} height={25} />
            <Image src="/social/master.png" alt="Mastercard" width={40} height={25} />
            <Image src="/social/paypal.png" alt="PayPal" width={40} height={25} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Browse Cars</Link></li>
            <li><Link href="/location">Our Locations</Link></li>
            <li><Link href="/deals">Deals & Discounts</Link></li>
            <li><Link href="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Support & Policies */}
        <div>
          <h3 className="text-white font-semibold">Customer Support</h3>
          <ul className="mt-2 space-y-2">
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
            <li><Link href="/policy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="text-white font-semibold">Stay Updated</h3>
          <p className="text-sm mt-2">Subscribe to get exclusive offers & travel tips.</p>
          <div className="mt-4 flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-3 py-2 rounded-l-md text-black"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r-md text-white hover:bg-blue-600">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4 mt-4">
            <Link href="#"><Image src="/social/fb.png" alt="Facebook" width={30} height={24} /></Link>
            <Link href="#"><Image src="/social/x.png" alt="Twitter" width={24} height={24} /></Link>
            <Link href="#"><Image src="/social/insta.png" alt="Instagram" width={24} height={24} /></Link>
            <Link href="#"><Image src="/social/linkedin.png" alt="Linkedin" width={24} height={24} /></Link>
         
          </div>
        </div>

      </div>
      <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Qversity. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;