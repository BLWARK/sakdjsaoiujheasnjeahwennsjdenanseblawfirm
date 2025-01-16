import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-tr from-black to-emerald-800">
      {/* Banner */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/Herobg1.webp" // Ganti dengan path gambar banner Anda
          alt="Banner Tentang Kami"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Tentang Kami</h1>
        </div>
      </div>

      {/* Konten */}
      <section className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Foto */}
          <div className="relative md:w-1/2 w-full ">
            <Image
              src="/About Us-min.png" // Ganti dengan path gambar Anda
              alt="Tentang Kami"
              width={650}
              height={700}
              className="object-contain "
            />
          </div>

          {/* Isi */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="2xl:text-4xl text-3xl font-bold text-main mb-4">XYZ LAW FIRM</h2>
            <p className="text-white mb-6">
              XYZ Law Firm didirikan pada tahun 2024 dengan semangat baru untuk
              memberikan layanan hukum yang berkualitas dan terpercaya. Meskipun
              tergolong baru, firma ini didukung oleh tim pengacara yang telah
              memiliki pengalaman puluhan tahun dalam berbagai bidang hukum.
              Pengalaman mendalam para pengacara kami dalam menangani berbagai
              jenis kasus memberikan fondasi yang kokoh bagi perusahaan ini
              untuk tumbuh dan berkembang secara profesional. Dengan
              mengedepankan prinsip integritas, kejujuran, dan dedikasi dalam
              setiap layanan yang diberikan. Serta menghadirkan tim yang terdiri
              dari para profesional berpengalaman di berbagai bidang hukum, kami
              bertujuan untuk menjadi mitra strategis yang mampu membantu klien
              menghadapi tantangan hukum yang semakin beragam dan kompleks.
            </p>
          </div>
        </div>
        <div className="md:w-full  md:pl-12">
          <h2 className="text-3xl font-bold text-main mb-4">Latar belakang </h2>
          <p className="text-white mb-6">
            Latar belakang berdirinya XYZ Law Firm didorong oleh kebutuhan akan
            solusi hukum yang adaptif, inovatif, dan responsif terhadap
            tantangan hukum di era modern. Kami menyadari bahwa dunia hukum
            terus berubah seiring dengan perkembangan teknologi, bisnis, dan
            peraturan yang semakin kompleks. Untuk itu, XYZ Law Firm hadir
            dengan visi untuk tidak hanya memenuhi, tetapi juga melampaui
            harapan klien dalam memberikan layanan hukum yang strategis dan
            berfokus pada hasil.
          </p>
          <p className="text-white mb-6">
            Dengan tim yang terdiri dari para advokat senior yang berpengalaman
            dalam litigasi, korporasi, properti, hukum komersial, serta hukum
            perdata dan pidana, XYZ Law Firm berkomitmen untuk memberikan
            pendekatan yang berintegritas dan menyeluruh. Pengalaman kami yang
            luas memungkinkan kami untuk menawarkan pandangan yang mendalam dan
            solusi yang komprehensif, sesuai dengan kebutuhan hukum klien kami.
          </p>
          <p className="text-white mb-6">
            Sebagai firma yang baru tumbuh, kami bertekad untuk memberikan
            pelayanan yang bersifat personal, menjunjung tinggi etika profesi,
            dan mengedepankan kepercayaan sebagai landasan hubungan kami dengan
            setiap klien.
          </p>
        </div>

        <div className="md:w-full mt-14 md:pl-12">
          <h2 className="text-3xl font-bold text-main mb-4">
            Tim Hukum Ahli untuk Solusi Terbaik
          </h2>
          <p className="text-white mb-6">
            Law Firm ini dikelola dan ditangani oleh para lawyer yang mempunyai
            keahlian dibidangnya masing-masing dan bekerja dalam sebuah team,
            dimana semua masalah-masalah yang diberikan kepada kami untuk
            menanganinya, senantiasa dibicarakan dan dibahas bersama guna
            memperoleh bentuk solusi terbaik dari tiap-tiap masalah yang ada.
          </p>
          <h2 className="text-3xl font-bold text-main mb-4 font-playfair gap-2 flex flex-col mt-14">Kegiatan Law Firm kami lebih lanjut digambarkan sebagai berikut:</h2>
          <ul className="list-decimal pl-6 list-outside text-3xl font-bold text-main mb-4 font-playfair gap-2 flex flex-col">
           
            <li className="text-base  font-normal font-poppins text-white ">
              Menjadi Penasehat Hukum bagi perorangan maupun perusahaan atau
              lembaga lain
            </li>
            <li className="text-base  font-normal font-poppins text-white ">
              Kegiatan advokasi sebagai penasehat hukum (mendampingi klien di
              Kepolisian, Kejaksaan, KPK, Pengadilan Tipikor, Pengadilan pada
              tingkat Pengadilan Negeri, Pengadilan Agama, Pengadilan Niaga,
              Pengadilan Penyelesaian Perselisihan Hubungan Industrial,
              Pengadilan Tata Usaha Negara, Arbitrase, Komisi Pengawasan
              Persaingan Usaha, maupun menangani perkara pada tingkat Pengadilan
              Tinggi, Pengadilan Tinggi Agama, Mahkamah Agung maupun di luar
              Pengadilan)
            </li>
            <li className="text-base  font-normal font-poppins text-white ">
              Membuat dokumen-dokumen pendukung dalam hal penyelesaian
              permasalahan hukum di pengadilan, antara lain pembuatan somasi,
              gugatan, jawaban, permohonan sita jaminan, permohonan eksekusi
              putusan, permohonan eksekusi jaminan hak tanggungan, jaminan
              fidusia, jaminan gadai, jaminan resi gudang, permohonan
              perlindungan hukum, memori banding, kontra memori banding, memori
              kasasi, kontra memori kasasi, memori Peninjauan Kembali, dan lain
              sebagainya
            </li>
            <li className="text-base  font-normal font-poppins text-white ">
            Membantu menyiapkan naskah-naskah perjanjian, surat kuasa, Memorandum of understanding (MoU), kontrak kerja dan sebagainya dalam bentuk perjanjian
            </li>
            <li className="text-base  font-normal font-poppins text-white ">
            Menyelesaikan segala permasalahan hukum, baik litigasi maupun non litigasi
            </li>
            <li className="text-base  font-normal font-poppins text-white ">
            Menyelesaikan perselisihan atau sengketa tanah, pengurusan hak atas tanah dan lain-lain;
            </li>
            <li className="text-base  font-normal font-poppins text-white ">
            Mengurus semua perijinan yang berhubungan dengan instansi pemerintah, baik pusat maupun daerah
            </li>
            <li className="text-base  font-normal font-poppins text-white ">
            Membantu menangani kredit bermasalah, serta eksekusi agunan, lelang dan cessie
            </li>
            <li className="text-base  font-normal font-poppins text-white ">
            Menangani perselisihan perburuhan, pembuatan peraturan perusahaan, membuat Kesepakatan Kerja Bersama (KKB), termasuk mendampingi dalam bentuk negoisasi
            </li>
            <li className="text-base  font-normal font-poppins text-white ">
            Melakukan proses legal due deligent atas pelaksanaan akuisisi saham dan perusahaan serta pelaksanaan take over perusahaan
            </li>
            <li className="text-base  font-normal font-poppins text-white ">
            Serta menangani semua perkara lain di Pengadilan Negeri, Pengadilan Tinggi, sampai dengan Mahkamah Agung RI.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
