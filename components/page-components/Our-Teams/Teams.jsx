"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Data Tim dengan gambar berbeda
const teamMembers = [
  { name: "Indah Sariwati", role: "Lawyer", image: "/Bu indah-min.png" },
  { name: "Tariyanto", role: "Lawyer", image: "/Antok-min.png" },
  { name: "Wahyudin", role: "Lawyer", image: "/Wahyudin-min.png" },
];

const Teams = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);

  // Auto-slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Inisialisasi AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Swipe functionality
  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    slideRef.current = touchStart;
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const difference = slideRef.current - touchEnd;

    if (difference > 50) {
      // Swipe ke kiri
      setCurrentIndex((prevIndex) =>
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
    } else if (difference < -50) {
      // Swipe ke kanan
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section data-aos="fade-up" id="team" className="w-full bg-gray-100 2xl:py-28 py-10">
      <div className="container mx-auto px-6">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold mb-4">Tim Pengacara Kami</h2>
          <p className="text-gray-600">
            Dengan pengalaman, dedikasi, dan keahlian, kami siap memberikan
            solusi hukum terbaik untuk memenuhi kebutuhan Anda.
          </p>
        </div>

        {/* Grid untuk Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 2xl:px-0 xl:px-0 px-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Foto */}
              <div data-aos="flip-right" className="relative 2xl:w-[470px] 2xl:h-[470px] w-[350px] h-[350px]">
                <Image
                  src={member.image} // Gunakan gambar dari data
                  alt={member.name}
                  fill
                  className="object-contain rounded-lg bg-gradient-to-tr from-black to-emerald-800"
                />
              </div>
              {/* Nama dan Peran */}
              <div className="bg-gray-800 text-white text-center 2xl:w-full py-4 w-[350px] mt-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider untuk Mobile */}
        <div
          className="md:hidden overflow-hidden relative w-full"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center w-full shrink-0">
                {/* Foto */}
                <div className="relative w-[350px] h-[350px]">
                  <Image
                    src={member.image} // Gunakan gambar dari data
                    alt={member.name}
                    fill
                    className="object-cover rounded-lg bg-gradient-to-tr from-black to-emerald-800"
                  />
                </div>
                {/* Nama dan Peran */}
                <div className="bg-gray-800 text-white text-center w-[350px] py-4 mt-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full mx-1 ${
                  currentIndex === index ? "bg-main" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
