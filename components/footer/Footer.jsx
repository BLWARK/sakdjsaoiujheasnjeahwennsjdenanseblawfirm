"use client";
import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Import ikon dari react-icons

const Footer = () => {
  // Fungsi untuk scroll ke elemen dengan ID
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <footer className="bg-gradient-to-tr from-black to-emerald-800 text-white">
      <div className="py-16 px-4">
        <div className="container mx-auto 2xl:px-0 xl:px-10 px-2 grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-8">
          {/* Informasi Perusahaan */}
          <div className="flex flex-col space-y-6">
            <Image src="/Logo XYZ Law Firm.png" alt="Law Firm Logo" width={150} height={150} />
            
            {/* Alamat */}
            <div className="flex items-start space-x-2">
             
              <p className="text-xs">Wisma Aria, Lantai 3, Ruang 302, Jl Hos Cokroaminoto No. 81 Menteng, Jakarta Pusat</p>
            </div>

            {/* Nomor Telepon */}
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-main text-lg" />
              <p className="text-xs">Telp: +62 813-8852-2219</p>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-main text-lg" />
              <p className="text-xs">office@xyzlawfirm.id</p>
            </div>
          </div>

          {/* Navigasi */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold text-main">Navigasi</h2>
            <ul className="2xl:space-y-6 space-y-2">
              <li><a href="#home" className="hover:text-main transition">Home</a></li>
              <li><a href="/tentang-kami" className="hover:text-main transition">Tentang Kami</a></li>
              <li><button onClick={() => scrollToSection("services")} className="hover:text-main transition">Area Praktik</button></li>
              <li><button onClick={() => scrollToSection("team")} className="hover:text-main transition">Team</button></li>
              <li><button onClick={() => scrollToSection("case")} className="hover:text-main transition">Case</button></li>
              <li><button onClick={() => scrollToSection("layanan")} className="hover:text-main transition">Layanan</button></li>
            </ul>
          </div>

          {/* Hukum Keluarga */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold text-main">Hukum Keluarga</h2>
            <ul className="space-y-2">
              <li><a href="/area-praktik/hukum-keluarga/perceraian" className="hover:text-main transition">Perceraian</a></li>
              <li><a href="/area-praktik/hukum-keluarga/sengketa-waris" className="hover:text-main transition">Sengketa Waris</a></li>
              <li><a href="/area-praktik/hukum-keluarga/hibah" className="hover:text-main transition">Hibah</a></li>
            </ul>
          </div>

           {/* Hukum Benda */}
           <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold text-main">Hukum Benda</h2>
            <ul className="space-y-2">
              <li><a href="/area-praktik/hukum-benda/hukum-perjanjian" className="hover:text-main transition">Hukum Perjanjian/Perikatan</a></li>
              <li><a href="/area-praktik/hukum-benda/hak-cipta" className="hover:text-main transition">Hak Cipta, Paten dan Trade Mark</a></li>
              <li><a href="/area-praktik/hukum-benda/hukum-perusahaan" className="hover:text-main transition">Hukum Perusahaan/Niaga</a></li>
              <li><a href="/area-praktik/hukum-benda/hukum-perbankan" className="hover:text-main transition">Hukum Perbankan</a></li>
              <li><a href="/area-praktik/hukum-benda/kepailitan" className="hover:text-main transition">Kepailitan</a></li>
              <li><a href="/area-praktik/hukum-benda/surat-surat-berharga" className="hover:text-main transition">Surat-surat Berharga</a></li>
              <li><a href="/area-praktik/hukum-benda/hukum-pasar-modal" className="hover:text-main transition">Hukum Pasar Modal</a></li>
              <li><a href="/area-praktik/hukum-benda/hukum-asuransi" className="hover:text-main transition">Hukum Asuransi</a></li>
              <li><a href="/area-praktik/hukum-benda/hukum-kesehatan" className="hover:text-main transition">Hukum Kesehatan</a></li>
              <li><a href="/area-praktik/hukum-benda/hukum-ketenagakerjaan" className="hover:text-main transition">Hukum Ketenagakerjaan</a></li>
              <li><a href="/area-praktik/hukum-benda/arbitrase" className="hover:text-main transition">Arbitrase</a></li>
            </ul>
          </div>
          
          {/* Hukum Publik */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-bold text-main">Hukum Publik</h2>
            <ul className="space-y-2">
              <li><a href="/area-praktik/hukum-publik/hukum-pidana" className="hover:text-main transition">Hukum Pidana</a></li>
              <li><a href="/area-praktik/hukum-publik/hukum-tata-usaha-negara" className="hover:text-main transition">Hukum Tata Usaha Negara</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black text-center py-4">
        <p className="text-gray-400 text-xs italic">&copy; {new Date().getFullYear()} XYZ Creative Group. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
