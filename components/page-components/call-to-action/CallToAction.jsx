import React from "react";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-tr from-black to-emerald-800 text-white py-20 mb-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Bagian Kiri: Teks */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Konsultasikan Permasalahan Anda</h2>
          <p className="text-gray-300">
            Kami siap membantu menyelesaikan masalah hukum Anda. Dapatkan konsultasi gratis
            dengan tim ahli kami.
          </p>
        </div>

        {/* Bagian Kanan: Tombol */}
        <div>
          <a
            href="#contact"
            className="bg-main hover:bg-hover text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
