"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  FaGavel,
  FaHandshake,
  FaChessKnight,
  FaMoneyBillWave,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const MengapaKami = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full bg-gray-100 2xl:py-32 xl:py-32 lg:py-32 md:py-32 2xl:px-24 xl:px-24 lg:px-24 md:px-24 py-10 px-2">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Bagian Teks */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col justify-center items-start" 
             data-aos="fade-right"   
        >
          <h2 className="text-4xl font-playfair font-bold mb-6 text-left text-black">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-gray-600 mb-8">
            Kami hadir untuk memberikan solusi hukum yang terbaik, dengan
            pengalaman, kepercayaan, dan dedikasi untuk membantu Anda mencapai
            keadilan yang Anda butuhkan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pengacara Ahli */}
            <div className="flex items-start space-x-4">
              <FaGavel className="text-3xl text-main" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Pengacara Ahli
                </h4>
                <p className="text-gray-600">
                  Kami memiliki pengacara yang berpengalaman di bidangnya.
                </p>
              </div>
            </div>

            {/* Layanan Terpercaya */}
            <div className="flex items-start space-x-4">
              <FaHandshake className="text-3xl text-main" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Layanan Terpercaya
                </h4>
                <p className="text-gray-600">
                  Kami dipercaya oleh banyak klien karena integritas kami.
                </p>
              </div>
            </div>

            {/* Kasus Berhasil */}
            <div className="flex items-start space-x-4">
              <FaChessKnight className="text-3xl text-main" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Kasus Berhasil
                </h4>
                <p className="text-gray-600">
                  Banyak kasus yang telah kami selesaikan dengan hasil yang
                  memuaskan.
                </p>
              </div>
            </div>

            {/* Biaya Rendah */}
            <div className="flex items-start space-x-4">
              <FaMoneyBillWave className="text-3xl text-main" />
              <div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Biaya Terjangkau
                </h4>
                <p className="text-gray-600">
                  Kami menawarkan solusi hukum dengan biaya yang masuk akal.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative md:w-1/2 flex items-center justify-center"
        data-aos="fade-left">
          {/* Lingkaran Latar Belakang */}
          <div className="absolute bg-main/20 w-64 h-64 rounded-full -top-8 left-20"></div>
          <div className="absolute border-2 border-main/40 w-24 h-24 rounded-full top-60 right-36"></div>
          {/* Gambar Utama */}
          <div className="relative 2xl:w-[500px] 2xl:h-[400px] w-[300px] h-[400px]">
            <Image
              src="/Logo XYZ Law Firm.png" // Ganti dengan path gambar Anda
              alt="Mengapa Memilih Kami"
              className=" object-contain"
              fill // Properti untuk membuat gambar mengisi kontainer
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MengapaKami;
