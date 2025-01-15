"use client"
import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-tr from-black to-emerald-800 text-white py-20 ">
      <div className="container mx-auto px-6 flex flex-col xl:flex-row md:flex-row 2xl:items-center items-start justify-between">
        {/* Bagian Kiri: Teks */}
        <div className="mb-4 md:mb-0">
          <h2 className="2xl:text-4xl text-2xl text-main font-bold mb-2">Konsultasikan Permasalahan Anda</h2>
          <p className="text-gray-300 2xl:text-base text-xs">
            Kami siap membantu menyelesaikan masalah hukum Anda. Dapatkan konsultasi gratis
            dengan tim ahli kami.
          </p>
        </div>

        {/* Bagian Kanan: Tombol */}
        <div>
          <button
            
            className="bg-main hover:bg-hover text-white px-6 py-3 rounded-lg font-semibold transition flex 2xl:mt-0 mt-5 "
            onClick={() => window.open("https://wa.me/+6281388522219", "_blank", "noopener,noreferrer")}
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
