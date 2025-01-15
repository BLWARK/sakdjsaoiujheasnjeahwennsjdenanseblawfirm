import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative  w-full h-screen  overflow-hidden">
      {/* Background Image with Zoom Out Animation */}
      <div className="absolute w-full h-full inset-0">
        <Image
          src="/herobgtest3.webp" // Ganti dengan gambar hero Anda
          alt="Law Firm Hero"
          fill
          className="zoom-out object-cover "
        />
      </div>

      {/* Overlay */}
      <div className="  absolute inset-0 bg-black/70  flex flex-col justify-center items-start text-left px-10 md:px-52 2xl:py-20 py-4 gap-8 ">
      <p
          className="text-main font-bold text-lg md:text-2xl  max-w-2xl opacity-0"
          style={{
            animation: "slide-up 1.5s ease-out forwards",
            animationDelay: "0.7s",
          }}
        >
          XYZ Law Firm
        </p>
        <div className="h-1 w-[60px] bg-main rounded-full opacity-0" style={{
            animation: "slide-up 1.5s ease-out forwards",
            animationDelay: "0.7s",
          }}></div>
        <h1
          className="text-white text-4xl md:text-6xl font-bold 2xl:mb-4 opacity-0"
          style={{
            animation: "slide-up 1.5s ease-out forwards",
            animationDelay: "1.0s",
          }}
        >
          Perlindungan Hukum <span className="text-main"> Terpercaya </span>
        </h1>
        <p
          className="text-white text-lg md:text-xl mb-6 max-w-2xl opacity-0"
          style={{
            animation: "slide-up 1.5s ease-out forwards",
            animationDelay: "1.5s",
          }}
        >
          Mitra hukum yang berdedikasi untuk melindungi hak dan kepentingan
          Anda.
        </p>
        <button
          className="bg-main hover:bg-hover text-white font-semibold py-3 px-6 rounded-lg transition duration-300 opacity-0   "
          style={{
            animation: "slide-up 1.5s ease-out forwards",
            animationDelay: "2.0s",
          }}
        >
          Hubungi Kami
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
