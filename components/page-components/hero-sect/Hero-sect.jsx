import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative  w-full h-screen  overflow-hidden">
      {/* Background Image with Zoom Out Animation */}
      <div className="absolute w-full h-full inset-0">
        <Image
          src="/hegobgtest2.webp" // Ganti dengan gambar hero Anda
          alt="Law Firm Hero"
          layout="fill"
          objectFit="cover"
          className="zoom-out "
        />
      </div>

      {/* Overlay */}
      <div className="  absolute inset-0 bg-black/70  flex flex-col justify-center items-start text-left px-20 md:px-52 py-20 gap-10">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Perlindungan Hukum Terpercaya
        </h1>
        <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
          Mitra hukum yang berdedikasi untuk melindungi hak dan kepentingan Anda.
        </p>
        <button className="bg-main hover:bg-hover text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
          Hubungi Kami
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
