export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6">
      <div className="bg-[#F8FAFC] shadow-lg rounded-lg p-8 max-w-lg w-full text-center mt-16 sm:mt-0">
        <h1 className="text-3xl font-bold text-[#0F172A] mb-4">Contact Us</h1>
        <p className="text-[#475569] mb-6">
          We would love to hear from you! Feel free to reach out to us for any inquiries.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-[#CBD5E1] rounded-md focus:ring-2 focus:ring-[#1E293B] outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-[#CBD5E1] rounded-md focus:ring-2 focus:ring-[#1E293B] outline-none"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full p-3 border border-[#CBD5E1] rounded-md focus:ring-2 focus:ring-[#1E293B] outline-none"
          />
          <button
            type="submit"
            className="w-full bg-[#1E293B] text-white py-3 rounded-md hover:bg-[#0F172A] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}