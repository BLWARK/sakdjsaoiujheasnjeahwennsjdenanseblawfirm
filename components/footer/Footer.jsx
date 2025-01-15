import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-black to-emerald-800 text-white">
      {/* Konten Footer */}
      <div className="py-16 px-4">
        <div className="container mx-auto 2xl:px-0 xl:px-10 px-2 grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1  gap-8">
          {/* Bagian 1: Informasi Perusahaan */}
          <div className="flex flex-col space-y-4">
            <Image
              src="/Logo XYZ Law Firm.png"
              alt="Law Firm Logo"
              width={150}
              height={150}
            />
            <p>
              Wisma Aria, Lantai 3, Ruang 302, Jl Hos Cokroaminoto No. 81
              Menteng, Jakarta Pusat
            </p>
            <p>Telp: +62 123 4567 890</p>
          </div>

          {/* Bagian 2: Navigasi */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold text-main">Navigasi</h2>
            <ul className="2xl:space-y-6 space-y-2">
              <li>
                <a href="#home" className="hover:text-main transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-main transition">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#area-praktik" className="hover:text-main transition">
                  Area Praktik
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-main transition">
                  Team
                </a>
              </li>
              <li>
                <a href="#case" className="hover:text-main transition">
                  Case
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-main transition">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#pembayaran" className="hover:text-main transition">
                  Pembayaran
                </a>
              </li>
            </ul>
          </div>

          {/* Bagian 3: Hukum Keluarga */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold text-main">Hukum Keluarga</h2>
            <ul className="space-y-2">
              <li>
                <a href="#perceraian" className="hover:text-main transition">
                  Perceraian
                </a>
              </li>
              <li>
                <a
                  href="#sengketa-waris"
                  className="hover:text-main transition"
                >
                  Sengketa Waris
                </a>
              </li>
              <li>
                <a href="#hibah" className="hover:text-main transition">
                  Hibah
                </a>
              </li>
            </ul>
          </div>

          {/* Bagian 4: Hukum Benda */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold text-main">Hukum Benda</h2>
            <ul className="space-y-2">
              <li>
                <a href="#perjanjian" className="hover:text-main transition">
                  Hukum Perjanjian/Perikatan
                </a>
              </li>
              <li>
                <a href="#hak-cipta" className="hover:text-main transition">
                  Hak Cipta, Paten dan Trade Mark
                </a>
              </li>
              <li>
                <a href="#perusahaan" className="hover:text-main transition">
                  Hukum Perusahaan/Niaga
                </a>
              </li>
              <li>
                <a href="#perbankan" className="hover:text-main transition">
                  Hukum Perbankan
                </a>
              </li>
              <li>
                <a href="#kepailitan" className="hover:text-main transition">
                  Kepailitan
                </a>
              </li>
              <li>
                <a
                  href="#surat-berharga"
                  className="hover:text-main transition"
                >
                  Surat-Surat Berharga
                </a>
              </li>
              <li>
                <a href="#pasar-modal" className="hover:text-main transition">
                  Hukum Pasar Modal
                </a>
              </li>
              <li>
                <a href="#asuransi" className="hover:text-main transition">
                  Hukum Asuransi
                </a>
              </li>
              <li>
                <a href="#malpraktek" className="hover:text-main transition">
                  Hukum Kesehatan (Malpraktek)
                </a>
              </li>
              <li>
                <a
                  href="#ketenagakerjaan"
                  className="hover:text-main transition"
                >
                  Hukum Ketenagakerjaan/Kepegawaian
                </a>
              </li>
              <li>
                <a href="#arbitrase" className="hover:text-main transition">
                  Arbitrase
                </a>
              </li>
            </ul>
          </div>

          {/* Bagian 5: Hukum Politik */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold text-main">Hukum Politik</h2>
            <ul className="space-y-2">
              <li>
                <a href="#pidana" className="hover:text-main transition">
                  Hukum Pidana
                </a>
              </li>
              <li>
                <a href="#tata-usaha" className="hover:text-main transition">
                  Hukum Tata Usaha Negara
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black text-center py-4">
        <p className="text-gray-400 text-xs italic">
          &copy; {new Date().getFullYear()} XYZ Creative Group. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
