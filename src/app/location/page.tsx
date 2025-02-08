const Locations = () => {
    const locations = [
      {
        city: "Karachi",
        address: "123 Main Street, Karachi, Pakistan",
        phone: "+92 21 12345678",
        email: "karachi@qversity.com",
      },
      {
        city: "Lahore",
        address: "456 Liberty Market, Lahore, Pakistan",
        phone: "+92 42 87654321",
        email: "lahore@qversity.com",
      },
      {
        city: "Islamabad",
        address: "789 Diplomatic Enclave, Islamabad, Pakistan",
        phone: "+92 51 23456789",
        email: "islamabad@qversity.com",
      },
    ];
  
    return (
      <div className="bg-[#F8F9FA] text-[#212529] py-16 px-6 mt-48 sm:mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold text-center mb-8">Our Locations</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:bg-[#F1F3F5] transition">
                <h3 className="text-2xl font-semibold">{location.city}</h3>
                <p className="mt-4 text-[#6C757D]">{location.address}</p>
                <p className="mt-2 text-[#6C757D]">{location.phone}</p>
                <p className="mt-2 text-[#6C757D]">{location.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Locations;
  