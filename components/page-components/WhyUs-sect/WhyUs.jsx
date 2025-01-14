import React from "react";
import Image from "next/image";
import { FaGavel, FaHandshake, FaChessKnight, FaMoneyBillWave } from "react-icons/fa";

const MengapaKami = () => {
  return (
    <section className="w-full bg-gray-100 py-32">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Bagian Teks */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center items-start">
          <h2 className="text-4xl font-playfair font-bold mb-6 text-left text-black">Mengapa Memilih Kami?</h2>
          <p className="text-gray-600 mb-8">
  Kami hadir untuk memberikan solusi hukum yang terbaik, dengan pengalaman, kepercayaan, dan dedikasi untuk membantu Anda mencapai keadilan yang Anda butuhkan.
</p>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pengacara Ahli */}
            <div className="flex items-start space-x-4">
              <FaGavel className="text-3xl text-main" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Pengacara Ahli</h4>
                <p className="text-gray-600">Kami memiliki pengacara yang berpengalaman di bidangnya.</p>
              </div>
            </div>

            {/* Layanan Terpercaya */}
            <div className="flex items-start space-x-4">
              <FaHandshake className="text-3xl text-main" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Layanan Terpercaya</h4>
                <p className="text-gray-600">Kami dipercaya oleh banyak klien karena integritas kami.</p>
              </div>
            </div>

            {/* Kasus Berhasil */}
            <div className="flex items-start space-x-4">
              <FaChessKnight className="text-3xl text-main" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Kasus Berhasil</h4>
                <p className="text-gray-600">Banyak kasus yang telah kami selesaikan dengan hasil yang memuaskan.</p>
              </div>
            </div>

            {/* Biaya Rendah */}
            <div className="flex items-start space-x-4">
              <FaMoneyBillWave className="text-3xl text-main" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">Biaya Terjangkau</h4>
                <p className="text-gray-600">Kami menawarkan solusi hukum dengan biaya yang masuk akal.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative md:w-1/2 flex items-center justify-center">
  {/* Lingkaran Latar Belakang */}
  <div className="absolute bg-gray-200 w-64 h-64 rounded-full -top-8 -left-8"></div>
  {/* Gambar Utama */}
  <div className="relative w-[300px] h-[400px]">
    <Image
      src="/herobgtest.webp" // Ganti dengan path gambar Anda
      alt="Mengapa Memilih Kami"
      className="rounded-lg shadow-lg object-cover"
      
      fill // Properti untuk membuat gambar mengisi kontainer
    />
  </div>
</div>


      </div>
    </section>
  );
};

export default MengapaKami;
