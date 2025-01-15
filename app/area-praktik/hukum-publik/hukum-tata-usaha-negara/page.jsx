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
          <h1 className="2xl:text-5xl text-xl font-bold text-main">
          Hukum Tata Usaha Negara (HTUN)
          </h1>
        </div>
      </div>

      {/* Konten */}
      <section className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Isi */}
          <div className="md:w-full ">
            <h2 className="2xl:text-5xl text-3xl font-bold text-main mb-4">
              Hukum Tata Usaha Negara (HTUN)
            </h2>
            <p className="text-gray-700 mb-6">
              Hukum Tata Usaha Negara mengatur hubungan antara masyarakat dan
              pemerintah. Kami menyediakan layanan hukum yang komprehensif dalam
              menghadapi tindakan atau keputusan pejabat negara yang dianggap
              merugikan, dengan cakupan layanan sebagai berikut:
            </p>
          </div>
        </div>
        <div className="md:w-full ">
          <ul className="list-disc pl-12 list-outside text-3xl font-bold text-main mb-4 font-playfair gap-2 flex flex-col">
            <li className="text-base  font-normal font-poppins text-gray-700 ">
              Pendampingan Sengketa Administrasi Negara: Mewakili individu atau
              perusahaan dalam menggugat keputusan pejabat pemerintah yang
              merugikan di Pengadilan Tata Usaha Negara (PTUN).
            </li>
            <li className="text-base  font-normal font-poppins text-gray-700 ">
              Konsultasi Hukum Administrasi: Memberikan panduan hukum terkait
              prosedur dan regulasi pemerintahan agar kegiatan bisnis atau
              perseorangan berjalan sesuai dengan aturan.
            </li>
            <li className="text-base  font-normal font-poppins text-gray-700 ">
              Pendampingan dalam Pengajuan Keberatan dan Banding: Membantu klien
              dalam menyusun dan mengajukan keberatan terhadap keputusan
              administratif, baik di tingkat lembaga maupun pengadilan.
            </li>
            <li className="text-base  font-normal font-poppins text-gray-700 ">
              Sengketa Perizinan dan Regulasi Pemerintah: Penyelesaian masalah
              hukum terkait izin usaha, pembatalan izin, atau sanksi
              administratif dari pemerintah pusat atau daerah.
            </li>
          </ul>
          <p className="text-gray-700 mb-6">
            Kami berkomitmen untuk membantu masyarakat dan perusahaan
            memperjuangkan haknya dengan cara yang profesional dan sesuai dengan
            ketentuan hukum yang berlaku.
          </p>
        </div>
        <div className="mt-10">
          {privateLawServices.map((category, index) => (
            <div key={index}>
              <h3 className="2xl:text-2xl text-xl font-bold mt-10 mb-6">
                {category.category}
              </h3>
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
