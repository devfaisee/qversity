'use client';
import { useState } from "react";
import { FaSearch, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const categories = ["All", "Economy", "Luxury", "SUVs", "Sedans"];
  const products = [
    {
      id: 1,
      name: "Economy Car",
      category: "Economy",
      price: 20,
      image: "/images/economy-car.jpg",
    },
    {
      id: 2,
      name: "Luxury Car",
      category: "Luxury",
      price: 50,
      image: "/images/luxury-car.jpg",
    },
    {
      id: 3,
      name: "SUV",
      category: "SUVs",
      price: 40,
      image: "/images/suv.jpg",
    },
    {
      id: 4,
      name: "Sedan",
      category: "Sedans",
      price: 30,
      image: "/images/sedan.jpg",
    },
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOption === "price-asc") {
      return a.price - b.price;
    } else if (sortOption === "price-desc") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
    <div className="bg-[#F8F9FA] text-[#212529] py-16 px-6 mt-48 sm:mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">Shop</h2>
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

        <div className="mb-8 flex justify-between items-center">
          <div className="flex space-x-4">
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

          <div>
            <label className="mr-2 text-[#6C757D]">Sort by:</label>
            <select
              className="px-4 py-2 rounded-lg border border-[#6C757D] focus:outline-none"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts
            .filter(
              (product) =>
                selectedCategory === "All" || product.category === selectedCategory
            )
            .map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg p-6 hover:bg-[#F1F3F5] transition">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-[#6C757D] mt-2">${product.price}/day</p>
                <a href={`/product/${product.id}`} className="mt-4 inline-block bg-[#004AAD] text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-[#002D73] transition">
                  View Details
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
