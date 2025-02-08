"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Economy", "Luxury", "SUVs", "Sedans"];
  const products = [
    {
      id: 1,
      name: "Economy Car",
      category: "Economy",
      image: "/assets/economy.jpg",
      startingPrice: 50,
    },
    {
      id: 2,
      name: "Luxury Car",
      category: "Luxury",
      image: "/assets/luxury.jpg",
      startingPrice: 190,
    },
    {
      id: 3,
      name: "SUV",
      category: "SUVs",
      image: "/assets/suv.jpg",
      startingPrice: 120,
    },
    {
      id: 4,
      name: "Sedan",
      category: "Sedans",
      image: "/assets/sudan.jpg",
      startingPrice: 100,
    },
  ];

  const handleCategoryChange = (category) => setSelectedCategory(category);
  const handleSearch = (event) => setSearchQuery(event.target.value);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#F8F9FA] text-[#212529] py-16 px-6 mt-48 sm:mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">Shop</h2>

        {/* Search Bar */}
        <div className="mb-8 relative bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for cars..."
            className="w-full p-3 rounded-lg border border-[#6C757D] focus:outline-none"
            value={searchQuery}
            onChange={handleSearch}
          />
          <FaSearch className="text-[#6C757D]" />
        </div>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category
                  ? "bg-[#004AAD] text-white"
                  : "bg-white text-[#212529]"
              } hover:bg-[#F1F3F5] transition`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts
            .filter(
              (product) =>
                selectedCategory === "All" || product.category === selectedCategory
            )
            .map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg p-6 hover:bg-[#F1F3F5] transition">
                {/* Image */}
                <div className="w-full h-[300px] sm:h-[350px] relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                {/* Details */}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-[#6C757D] mt-2">Starting from ${product.startingPrice}/day</p>
                  <a href={`/product/${product.id}`} className="mt-4 inline-block bg-[#004AAD] text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-[#002D73] transition">
                    View Details
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
