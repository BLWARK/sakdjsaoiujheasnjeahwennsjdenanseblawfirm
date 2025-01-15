import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGavel, FaBalanceScale } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";
import { privateLawServices, publicLawServices } from "@/data/dataServices";

const icons = {
  FaGavel,
  FaBalanceScale,
  VscLaw,
};


const page = () => {
  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/hegobgtest2.webp" // Ganti dengan path gambar banner Anda
          alt="Banner Tentang Kami"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          {/* <h1 className="2xl:text-4xl text-xl font-bold text-white">
            Hukum Keluarga - Perceraian
          </h1> */}
        </div>
      </div>

      {/* Konten */}
      <section className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Isi */}
          <div className="md:w-full ">
            <h2 className="2xl:text-5xl text-3xl font-bold text-main mb-4">Perceraian</h2>
            <p className="text-gray-700 mb-6">
              Kami memahami bahwa proses perceraian bisa menjadi masa yang sulit
              dan penuh emosi. Kami hadir untuk memberikan bantuan hukum yang
              profesional, mendampingi klien dalam setiap tahapan proses
              perceraian, baik di Pengadilan Negeri maupun Pengadilan Agama.
              Layanan kami meliputi:
            </p>
          </div>
        </div>
        <div className="md:w-full ">
          
          <ul className="list-disc pl-12 list-outside text-3xl font-bold text-main mb-4 font-playfair gap-2 flex flex-col">
            <li className="text-base  font-normal font-poppins text-gray-700 ">
            Penyusunan dokumen gugatan atau jawaban perceraian.
            </li>
            <li className="text-base  font-normal font-poppins text-gray-700 ">
            Pendampingan dalam mediasi dan persidangan.
            </li>
            <li className="text-base  font-normal font-poppins text-gray-700 ">
            Penanganan hak asuh anak, pembagian harta bersama, dan hak-hak lainnya.
            </li>
            
          </ul>
          <p className="text-gray-700 mb-6">
          Kami berkomitmen untuk melindungi kepentingan hukum klien dengan pendekatan yang sensitif dan solutif.
            </p>
        </div>
        <div className="mt-10">
          {privateLawServices.map((category, index) => (
            <div key={index}>
              <h3 className="2xl:text-2xl text-xl font-bold mt-10 mb-6">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {category.services.map((service, idx) => {
                  const Icon = icons[service.icon];
                  return (
                    <Link href={service.link} key={idx}>
                      <div className="group bg-gray-100 p-6 shadow rounded-lg flex items-center text-left transform transition duration-150 hover:bg-emerald-950">
                        <div className="bg-main text-white p-4 rounded-full mr-4 transition duration-150 group-hover:bg-white">
                          <Icon className="text-3xl group-hover:text-emerald-950" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-800 transition duration-150 group-hover:text-white">
                          {service.name}
                        </h4>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {publicLawServices.map((service, index) => {
              const Icon = icons[service.icon];
              return (
                <Link href={service.link} key={index}>
                  <div className="group bg-gray-100 p-6 shadow rounded-lg flex items-center text-left transform transition duration-150 hover:bg-emerald-950">
                    <div className="bg-main text-white p-4 rounded-full mr-4 transition duration-150 group-hover:bg-white">
                      <Icon className="text-3xl group-hover:text-emerald-950" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 transition duration-150 group-hover:text-white">
                      {service.name}
                    </h4>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;