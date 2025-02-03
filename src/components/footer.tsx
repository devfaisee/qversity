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
            <img src="/icons/visa.svg" alt="Visa" className="h-6" />
            <img src="/icons/mastercard.svg" alt="Mastercard" className="h-6" />
            <img src="/icons/paypal.svg" alt="PayPal" className="h-6" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/cars" className="hover:text-white">Browse Cars</a></li>
            <li><a href="/locations" className="hover:text-white">Our Locations</a></li>
            <li><a href="/deals" className="hover:text-white">Deals & Discounts</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
          </ul>
        </div>

        {/* Support & Policies */}
        <div>
          <h3 className="text-white font-semibold">Customer Support</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="/faqs" className="hover:text-white">FAQs</a></li>
            <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
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
            <a href="#"><img src="/icons/facebook.svg" className="h-6" /></a>
            <a href="#"><img src="/icons/twitter.svg" className="h-6" /></a>
            <a href="#"><img src="/icons/instagram.svg" className="h-6" /></a>
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