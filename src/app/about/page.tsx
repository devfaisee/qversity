const About = () => {
  return (
    <div className="bg-[#F8F9FA] text-[#212529] mt-48 sm:mt-20">
      {/* Hero Section */}
      <section className="relative bg-[#004AAD] text-white text-center py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">About Qversity</h1>
          <p className="mt-4 text-lg">
            Your Trusted Partner in Car Rentals. Experience seamless and reliable rentals, designed for your convenience.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[#004AAD]">Why Choose Qversity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "A Fleet You Can Trust", desc: "From economy to luxury, we offer carefully maintained vehicles for every journey.", icon: "🚗" },
            { title: "Transparent Pricing", desc: "No hidden fees. What you see is what you pay.", icon: "🔒" },
            { title: "Secure Payments", desc: "Multiple payment options for a stress-free experience.", icon: "💳" },
            { title: "Convenient Locations", desc: "Find rental points near you with easy pick-up and drop-off.", icon: "🌎" },
            { title: "Trusted by Thousands", desc: "A growing customer base that trusts Qversity for quality rentals.", icon: "⭐" },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
              <span className="text-4xl text-[#FF6B00]">{item.icon}</span>
              <div>
                <h3 className="text-xl font-semibold text-[#004AAD]">{item.title}</h3>
                <p className="text-[#6C757D]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#E9ECEF] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8 text-[#004AAD]">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "Search & Select", desc: "Choose from our verified car listings." },
              { step: "Book Online", desc: "Enter your details and confirm your rental." },
              { step: "Pick Up & Drive", desc: "Grab your keys and start your journey." },
              { step: "Easy Return", desc: "Drop off your car at a convenient location." },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#004AAD]">{item.step}</h3>
                <p className="text-[#6C757D] mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#FFE5D0] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8 text-[#004AAD]">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Adeel K.", review: "Qversity made my travel so easy! The car was in perfect condition, and the process was super smooth." },
              { name: "Sarah R.", review: "Best rental experience ever! No hidden fees, great customer support, and a hassle-free return." },
              { name: "Omar L.", review: "Loved the transparency and the quick booking process. Highly recommend Qversity!" },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <p className="text-[#212529] italic">
                  &ldquo;{item.review}&rdquo;
                </p>
                <p className="mt-4 font-semibold text-[#FF6B00]">- {item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#004AAD] text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Ready to Hit the Road?</h2>
        <p className="text-lg mt-2">Find your perfect car today and experience the Qversity difference!</p>
        <a
          href="/book"
          className="mt-6 inline-block bg-[#FF6B00] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-[#D95A00] transition"
        >
          Book Your Car Now
        </a>
      </section>
    </div>
  );
};

export default About;