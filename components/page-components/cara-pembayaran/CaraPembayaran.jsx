import React from "react";
import Image from "next/image";

const paymentMethods = [
  {
    src: "/fee1.webp", // Ganti dengan path gambar Anda
    alt: "payment",
    description: "Pembayaran profesional fee atas kasus yang bersifat Litigasi dilakukan pada saat penandatanganan surat kuasa;",
  },
  {
    src: "/fee2.webp", // Ganti dengan path gambar Anda
    alt: "payment",
    description: "Biaya operasional kasus dibayarkan berdasarkan tagihan yang akan disampaikan tersendiri pada klien sesuai dengan kesepakatan dan persetujuan;",
  },
  {
    src: "/fee3.webp", // Ganti dengan path gambar Anda
    alt: "payment",
    description: "Pembayaran Success Fee dibayarkan setelah perkara yang ditangani telah berhasil atau telah mencapai tujuan yang diinginkan oleh klien, dimana perjanjian success fee tersebut yang besarnya sesuai kesepakatan antara klien dengan kantor kami dan dibuat dalam bentuk perjanjian penanganan perkara.",
  },
];

const CaraPembayaran = () => {
  return (
    <section id="pembayaran" className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Judul Section */}
        <h2 className="text-4xl font-playfair font-bold mb-8">Tata Cara Pembayaran</h2>
        

        {/* Grid Gambar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {paymentMethods.map((method, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Box Gambar */}
              <div className="relative w-full max-w-[300px] h-[300px] bg-white shadow-lg rounded-lg overflow-hidden">
                <Image
                  src={method.src}
                  alt={method.alt}
                  fill
                  className="object-contain"
                />
              </div>
              {/* Keterangan */}
              <p className="mt-4 text-gray-700 w-[90%]">{method.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaraPembayaran;
