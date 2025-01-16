"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { FaGavel, FaBalanceScale } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";
import { privateLawServices, publicLawServices } from "@/data/dataServices";
import AOS from "aos";
import "aos/dist/aos.css";

const icons = {
  FaGavel,
  FaBalanceScale,
  VscLaw,
};

const Services = () => {
 useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section data-aos="fade-up" id="services" className="w-full bg-gradient-to-tr from-black to-emerald-800 py-16 text-main flex flex-col justify-center items-center">
      <div   className="2xl:text-center text-left mb-12 2xl:px-0 px-5">
        <h1 className="2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl text-3xl font-playfair font-bold mb-4">Area Praktik Kami</h1>
        <p className="2xl:text-lg text-xs text-white ">
        Dedikasi dan Keahlian dalam Menyelesaikan Setiap Permasalahan Hukum Anda.
        </p>
      </div>

      <div className="container mx-auto 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4">
        <h2 className="2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl text-3xl font-playfair font-bold mb-4">- Hukum Privat</h2>

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
      </div>

      <div className="container mx-auto 2xl:px-10 xl:px-10 lg:px-10 md:px-10 px-4 mt-16">
        <h2 className="2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl text-3xl font-playfair font-bold mb-4">- Hukum Publik</h2>

        <div className="mt-10">
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
      </div>
    </section>
  );
};

export default Services;
