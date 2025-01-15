"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

// Data Tim dengan deskripsi tambahan
const teamMembers = [
  {
    name: "Indah Sariwati",
    role: "Managing Partner",
    image: "/Bu indah-min.png",
    description:
      "Berpengalaman menangani berbagai masalah/kasus Hukum Perusahaan, Perizinan, Perdata, Kredit Macet, Penundaan Kewajiban Pembayaran Utang dan Kepailitan, Eksekusi Hak Tanggungan dan Lelang Eksekusi, Cessie (Pengalihan Piutang), menangani Perkara di Pengadilan Tata Usaha Negara, Pengadilan Negeri, Pengadilan Niaga, Pengadilan Agama, dll.",
  },
  {
    name: "Tariyanto",
    role: "Partner",
    image: "/Antok-min.png",
    description:
      "Berpengalaman menangani kasus pidana, perdata, waris, perusahaan, pertanahan, pengurusan perizinan, Lelang dan Cessie, perburuhan/ketenagakerjaan, menangani Perkara di Pengadilan Tata Usaha Negara, Pengadilan Negeri, Pengadilan Niaga, Pengadilan Agama, Pengadilan Hubungan Indusrial, Pengadilan Tipikor, Mahkamah Konstitusi, dll.",
  },
  {
    name: "Wahyudin",
    role: "Partner",
    image: "/Wahyudin-min.png",
    description:
      "Berpengalaman menangani kasus pidana, perdata, waris, pengurusan perijinan, perburuhan/ketenagakerjaan, menangani Perkara di Pengadilan Agama, Pengadilan Negeri, Pengadilan Hubungan Indusrial, Pengadilan Tata Usaha Negara, Pengadilan Niaga, dll.",
  },
];

const Teams = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Inisialisasi AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Pindah ke slide berikutnya
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  // Pindah ke slide sebelumnya
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  // Handle swipe di mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50) {
      nextSlide(); // Swipe ke kiri
    } else if (swipeDistance < -50) {
      prevSlide(); // Swipe ke kanan
    }
  };

  return (
    <section data-aos="fade-up" id="team" className="w-full bg-gray-100 2xl:py-28 py-10">
      <div className="container mx-auto px-6">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold mb-4">Tim Pengacara Kami</h2>
          <p className="text-gray-600">
            Dengan pengalaman, dedikasi, dan keahlian, kami siap memberikan solusi hukum terbaik untuk memenuhi kebutuhan Anda.
          </p>
        </div>

        {/* Grid untuk Desktop */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Kartu Flip */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Sisi Depan */}
                  <div className="flip-card-front bg-gradient-to-tr from-black to-emerald-800">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  {/* Sisi Belakang */}
                  <div className="flip-card-back">
                    <p className="text-white text-sm px-6">{member.description}</p>
                  </div>
                </div>
              </div>

              {/* Nama dan Peran */}
              <div className="bg-gray-800 text-white text-center 2xl:w-[350px] w-full py-4 mt-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider untuk Mobile */}
        <div
          ref={slideRef}
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
                {/* Kartu Flip */}
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {/* Sisi Depan */}
                    <div className="flip-card-front bg-gradient-to-tr from-black to-emerald-800">
                      <Image
                        src={member.image}
                        alt={member.name}
                       fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                    {/* Sisi Belakang */}
                    <div className="flip-card-back">
                      <p className="text-white text-sm px-6">{member.description}</p>
                    </div>
                  </div>
                </div>

                {/* Nama dan Peran */}
                <div className="bg-gray-800 text-white text-center w-full py-4 mt-4 rounded-lg shadow-lg">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
