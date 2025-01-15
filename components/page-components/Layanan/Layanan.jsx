"use client"
import React, { useState } from "react";

const layananData = {
  Litigasi: (
    <>
      <h4 className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl text-2xl font-bold mb-2">Jasa Pelayanan Hukum Litigasi</h4>
      
      <ul className="list-disc list-inside space-y-4">
        
          <p className="text-base font-bold">Penanganan kasus Perdata, Niaga, Perburuhan dan Tata Usaha Negara:</p>
          <ul className="list-disc list-inside 2xl:pl-6 pl-0 space-y-2 2xl:text-lg text-sm ">
            
            <li>Sengketa tanah kepemilikan, sewa menyewa, jual beli, perijinan, dll</li>
            <li>Sengketa perusahaan</li>
            <li>Sengketa Perbankan, lelang, cessie</li>
            <li>Sengketa Perjanjian/Kontrak</li>
            <li>Sengketa hutang piutang</li>
            <li>Sengketa Waris dan Perceraian</li>
            <li>Sengketa Merek dan Paten</li>
            <li>Sengketa Penundaan Kewajiban Pembayaran Utang dan Kepailitan</li>
            <li>Sengketa Perburuhan/Ketenagakerjaan</li>
            <li>Sengketa Keputusan Tata Usaha Negara</li>
          </ul>
        
        
          
        
      </ul>
      <p className="text-base font-bold mt-10 mb-4">Penanganan kasus Pidana:</p>
          <ul className="list-disc list-inside 2xl:pl-6 pl-0 space-y-2 2xl:text-lg text-sm">
            <li>Mendampingi sebagai pelapor di Kepolisian</li>
            <li>Mendampingi tersangka di Kepolisian dan Kejaksaan sebagai penasehat hukum</li>
            <li>Mendampingi terdakwa di Pengadilan, pada semua tingkatan</li>
            <li>Menangani perkara tindak pidana TIPIKOR</li>
          </ul>
      <p className="mt-4 text-sm text-gray-500">
        <em>
          Catatan: Semua ketentuan ini merupakan profesional fee, dan besarnya fee akan ditentukan
          dalam kesepakatan bersama antara klien dengan kantor kami.
        </em>
      </p>
    </>
  ),
  "Non Litigasi": (
    <>
      <h4 className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl text-2xl font-bold mb-2">Jasa Pelayanan Hukum Non Litigasi</h4>
      <ul className="list-disc list-inside 2xl:pl-6 pl-0 2xl:text-lg text-sm space-y-4">
        <li>Memberikan jasa Konsultasi Hukum kepada Perusahaan maupun perorangan</li>
        <li>
          Menerima permintaan penyusunan legal opinion tentang kasus perdata maupun pidana atau
          membuat konklusi atas putusan–putusan PN, PT, atau MA
        </li>
        <li>Menerima permintaan pembuatan perjanjian atau kontrak bisnis</li>
        <li>
          Menerima permintaan pelaksanaan negoisasi dalam penyelesaian hutang piutang sesuai dengan
          kontrak
        </li>
      </ul>
    </>
  ),
  "Retainer Client": (
    <>
      <h4 className="2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl text-2xl font-bold mb-2">Ketentuan Khusus Retainer Client</h4>
      <ul className="list-disc list-inside 2xl:pl-6 pl-0 2xl:text-lg text-sm space-y-4">
        <li>Menangani permasalahan hukum klien</li>
        <li>Klien menerima pelayanan hukum dari kami dengan adanya kesepakatan bersama</li>
        <li>
          Perjalanan dinas keluar kota, meliputi biaya perjalanan dan biaya penginapan, akan
          ditentukan berdasarkan kesepakatan
        </li>
        <li>
          Klien tetap dikenakan pembayaran 75% dari biaya resmi dalam penanganan perkara di
          Kepolisian, Kejaksaan maupun Pengadilan
        </li>
        <li>
          Klien tetap berkewajiban membayar fee (Retainer fee) sesuai dengan kesepakatan bersama
        </li>
      </ul>
    </>
  ),
};

const Layanan = () => {
  const [selected, setSelected] = useState("Litigasi");

  return (
    <section id="layanan" className="w-full bg-gradient-to-tr from-black to-emerald-800 py-24">
      <div className="container mx-auto px-6 text-center">
        {/* Judul dan Subjudul */}
        <h2 className="text-4xl font-playfair text-main font-bold mb-4">Layanan Kami</h2>
        <p className="text-white mb-8">
          Pilih jenis layanan kami yang sesuai dengan kebutuhan hukum Anda.
        </p>

        {/* Pilihan Tab */}
        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(layananData).map((item) => (
            <button
              key={item}
              onClick={() => setSelected(item)}
              className={`px-6 py-2 rounded-lg font-semibold transition 2xl:text-lg xl:text-lg lg:text-lg md:text-base text-xs ${
                selected === item
                  ? "bg-main text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300"
              } hover:bg-main hover:text-white`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Konten Layanan */}
        <div className="bg-white 2xl:p-10 xl:p-10 lg:p-10 md:p-5 p-5 rounded-lg shadow-lg text-left">
          {layananData[selected]}
        </div>
      </div>
    </section>
  );
};

export default Layanan;
