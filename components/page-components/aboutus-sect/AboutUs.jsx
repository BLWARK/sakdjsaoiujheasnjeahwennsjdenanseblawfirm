import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-tr from-black to-emerald-800">
      <div className="container mx-auto px-10 flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/PD.png"
            alt="Professional Lawyer"
            width={500}
            height={700}
            className="object-cover "
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-16 text-left justify-start items-start flex flex-col">
          <h2 className="text-[42px] font-bold text-main mb-4">
            XYZ LAW FIRM
          </h2>
          <p className="text-white mb-4">
            XYZ Law Firm didirikan pada tahun 2024 dengan semangat baru untuk
            memberikan layanan hukum yang berkualitas dan terpercaya. Meskipun
            tergolong baru, firma ini didukung oleh tim pengacara yang telah
            memiliki pengalaman puluhan tahun dalam berbagai bidang hukum.
            Pengalaman mendalam para pengacara kami dalam menangani berbagai
            jenis kasus memberikan fondasi yang kokoh bagi perusahaan ini untuk
            tumbuh dan berkembang secara profesional. Dengan mengedepankan
            prinsip integritas, kejujuran, dan dedikasi dalam setiap layanan
            yang diberikan. Serta menghadirkan tim yang terdiri dari para
            profesional berpengalaman di berbagai bidang hukum, kami bertujuan
            untuk menjadi mitra strategis yang mampu membantu klien menghadapi
            tantangan hukum yang semakin beragam dan kompleks.
          </p>
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
         
          <button className="border-2 border-main  px-6 py-2 rounded hover:bg-main  hover:text-white text-main transition duration-300">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
