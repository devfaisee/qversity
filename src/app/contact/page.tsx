export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1E293B] to-[#0F172A] flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <div className="text-center text-white mb-10">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Get in Touch with Qversity
        </h1>
        <p className="mt-2 text-lg text-gray-300">We'd love to hear from you! Let's talk.</p>
      </div>

      {/* Contact Form Card */}
      <div className="w-full max-w-2xl bg-[#1E293B] shadow-2xl rounded-xl p-6 sm:p-8 border border-gray-700">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-300 font-medium">Your Name</label>
            <input type="text" className="w-full mt-1 px-4 py-3 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
          </div>

          <div>
            <label className="block text-gray-300 font-medium">Email Address</label>
            <input type="email" className="w-full mt-1 px-4 py-3 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-gray-300 font-medium">Message</label>
            <textarea rows={4} className="w-full mt-1 px-4 py-3 bg-gray-800 text-white rounded-lg shadow-md border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="How can we help you?"></textarea>
          </div>

          <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg hover:scale-105 transition-transform">
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="mt-10 text-gray-300">
        <p className="text-lg"><strong>Email:</strong> contact@qversity.com</p>
        <p className="text-lg"><strong>Phone:</strong> +92 123 456 7890</p>
        <p className="text-lg"><strong>Location:</strong> Karachi, Pakistan</p>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <p className="text-lg text-gray-300">Need urgent support? Reach out via email!</p>
        <a href="mailto:contact@qversity.com" className="mt-2 inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition">
          Email Us
        </a>
      </div>
    </div>
  );
}