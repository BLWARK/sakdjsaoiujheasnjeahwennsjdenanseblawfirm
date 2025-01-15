"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="tentang-kami" className="w-full 2xl:h-screen h-full flex items-center justify-center bg-gradient-to-tr from-black to-emerald-800">
      <div className="container mx-auto px-10 flex flex-col md:flex-row items-center">
        {/* Left Side - Image */}
        <div
          className="md:w-1/2 flex 2xl:justify-center justify-start"
          data-aos="fade-right" // Animasi dari kanan ke kiri
        >
          <Image
            src="/About Us-min.png"
            alt="Professional Lawyer"
            width={500}
            height={700}
            className="object-cover"
          />
        </div>

        {/* Right Side - Text */}
        <div
          className="md:w-1/2 mt-10 md:mt-0 md:pl-16 text-left justify-start items-start flex flex-col"
          data-aos="fade-left" // Animasi dari kiri ke kanan
        >
          <h2 className="2xl:text-[42px] xl:text-[42px] lg:text-[36px] md:text-[36px] text-[36px] font-bold text-main ">
            XYZ LAW FIRM
          </h2>
          <p className="text-white py-8 2xl:text-base xl:text-base lg:text-base md:text-sm  text-xs">
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
            tantangan hukum yang semakin beragam dan kompleks....
          </p>
          

          <a href="/tentang-kami" className="border-[1px] border-main 2xl:px-8 2xl:py-4 px-8 py-2 rounded hover:bg-main hover:text-white text-main transition duration-300 mb-10">
            READ MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
