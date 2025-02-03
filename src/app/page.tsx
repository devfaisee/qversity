import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center mt-32 lg:mt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/hero.jpg"
            alt="Luxury Car"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Hero Content */}
        <div className="text-center z-10 text-white px-4">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 animate-fade-in">
            Welcome to Qversity
          </h1>
          <p className="text-lg sm:text-2xl mb-8 animate-fade-in">
            Your One-Stop Shop for Luxury & Budget-Friendly Car Rentals
          </p>

          {/* Booking Form */}
          <form className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap gap-4 justify-center w-full max-w-3xl animate-fade-in">
            {/* Pickup Date */}
            <div className="w-full sm:w-1/3">
              <label className="block text-gray-700 font-medium mb-2">Pickup Date</label>
              <input
                type="date"
                className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 text-gray-700"
                placeholder="Select Pickup Date"
              />
            </div>

            {/* Return Date */}
            <div className="w-full sm:w-1/3">
              <label className="block text-gray-700 font-medium mb-2">Return Date</label>
              <input
                type="date"
                className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 text-gray-700"
                placeholder="Select Return Date"
              />
            </div>

            {/* Car Type Selector */}
            <div className="w-full sm:w-1/3">
              <label className="block text-gray-700 font-medium mb-2">Car Type</label>
              <select className="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 text-gray-700 bg-white">
                <option className="text-gray-700">All Car Types</option>
                <option className="text-gray-700">SUV</option>
                <option className="text-gray-700">Sedan</option>
                <option className="text-gray-700">Luxury</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-accent transition duration-300 w-full sm:w-auto">
              Find a Car
            </button>
          </form>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="bg-primary text-white py-10">
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div className="w-full sm:w-auto">
            <h2 className="text-2xl font-bold">🚗 500+ Cars Available</h2>
            <p>Luxury, SUVs, Sedans & More</p>
          </div>
          <div className="w-full sm:w-auto">
            <h2 className="text-2xl font-bold">⏳ Fast & Easy Booking</h2>
            <p>Book in minutes, drive stress-free</p>
          </div>
          <div className="w-full sm:w-auto">
            <h2 className="text-2xl font-bold">⭐ 4.9/5 Ratings</h2>
            <p>From 5,000+ satisfied customers</p>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl text-center font-bold mb-8">Featured Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Car 1 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative w-full h-48">
              <Image src="/assets/hurrican.png" alt="Lamborghini" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h3 className="text-xl font-bold mt-2">Lamborghini Huracan</h3>
            <p className="text-gray-600">$199/day</p>
            <Link href="/rent/lamborghini">
              <button className="bg-secondary text-white px-4 py-2 rounded-lg mt-2 hover:bg-accent transition duration-300">
                Rent Now
              </button>
            </Link>
          </div>

          {/* Example Car 2 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative w-full h-48">
              <Image src="/assets/mercedes.png" alt="Mercedes" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h3 className="text-xl font-bold mt-2">Mercedes S-Class</h3>
            <p className="text-gray-600">$149/day</p>
            <Link href="/rent/mercedes">
              <button className="bg-secondary text-white px-4 py-2 rounded-lg mt-2 hover:bg-accent transition duration-300">
                Rent Now
              </button>
            </Link>
          </div>

          {/* Example Car 3 */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative w-full h-48">
              <Image src="/assets/tesla.png" alt="Tesla" layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
            <h3 className="text-xl font-bold mt-2">Tesla Model S</h3>
            <p className="text-gray-600">$129/day</p>
            <Link href="/rent/tesla">
              <button className="bg-secondary text-white px-4 py-2 rounded-lg mt-2 hover:bg-accent transition duration-300">
                Rent Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action (CTA) Section */}
      <section className="bg-secondary text-white py-10 text-center">
        <h2 className="text-3xl font-bold animate-fade-in">Book Your Dream Car Today!</h2>
        <p className="text-lg mt-2 animate-fade-in">Luxury & budget-friendly options available</p>
        <Link href="/shop">
          <button className="mt-4 bg-white text-secondary px-6 py-3 rounded-lg font-bold hover:bg-gray-200 transition duration-300">
            Browse Cars
          </button>
        </Link>
      </section>
    </>
  );
}