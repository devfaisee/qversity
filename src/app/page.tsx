'use client';

export default function Home() {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('https://image.freepik.com/free-photo/vertical-shot-young-girl-sitting-pier-sunset_17109004.htm#fromView=keyword&page=1&position=6&uuid=0a0079c8-e614-4155-9e2f-1cfb69731bef&new_detail=true&query=Shoes+With+Landscape')` }}>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Discover Your Perfect Shoes
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Shop the latest styles and find your perfect fit today!
        </p>
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
          Shop Now
        </button>
      </div>
    </section>
  );
}