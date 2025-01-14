import React from "react";
import { FaGavel, FaBalanceScale } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { privateLawServices, publicLawServices } from "@/data/dataServices";

// Peta ikon berdasarkan nama
const icons = {
  FaGavel,
  FaBalanceScale,
  VscLaw,
  MdOutlineHealthAndSafety,
};

const Services = () => {
  return (
    <section className="w-full bg-gradient-to-tr from-black to-emerald-800 py-16 text-main">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-playfair font-bold mb-4">Area Praktik Kami</h1>
        <p className="text-lg">
          Discover the range of legal services we offer to support you.
        </p>
      </div>

      {/* Practice Areas Section */}
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-playfair font-bold mb-4">- Hukum Privat</h2>

        <div className="mt-10">
          {privateLawServices.map((category, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mt-10 mb-6">{category.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {category.services.map((service, idx) => {
                  const Icon = icons[service.icon]; // Ambil ikon berdasarkan nama
                  return (
                    <div
                      key={idx}
                      className="group bg-gray-100 p-6 shadow rounded-lg flex items-center text-left transform transition duration-150 hover:bg-emerald-950"
                    >
                      <div className="bg-main text-white p-4 rounded-full mr-4 transition duration-150 group-hover:bg-white">
                        <Icon className="text-3xl group-hover:text-emerald-950" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 transition duration-150 group-hover:text-white">
                        {service.name}
                      </h4>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 mt-10">
        <h2 className="text-3xl font-playfair font-bold mb-4">- Hukum Publik</h2>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {publicLawServices.map((service, index) => {
              const Icon = icons[service.icon]; // Ambil ikon berdasarkan nama
              return (
                <div
                  key={index}
                  className="group bg-gray-100 p-6 shadow rounded-lg flex items-center text-left transform transition duration-150 hover:bg-emerald-950"
                >
                  <div className="bg-main text-white p-4 rounded-full mr-4 transition duration-150 group-hover:bg-white">
                    <Icon className="text-3xl group-hover:text-emerald-950" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 transition duration-150 group-hover:text-white">
                    {service.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
