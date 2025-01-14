import React from "react";
import Image from "next/image";

// Data Tim
const teamMembers = [
  { name: "Ian Savage", role: "Lawyer" },
  { name: "Michael Oykhman", role: "Lawyer" },
  { name: "Ian Savage", role: "Lawyer" },
  
];

const Teams = () => {
  return (
    <section className="w-full bg-gray-100 py-28">
      <div className="container mx-auto px-6">
        {/* Judul */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold mb-4">
            Tim Pengacara Kami
          </h2>
          <p className="text-gray-600">
            Dengan pengalaman, dedikasi, dan keahlian, kami siap memberikan
            solusi hukum terbaik untuk memenuhi kebutuhan Anda.
          </p>
        </div>

        {/* Grid Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Foto */}
              <div className="relative w-[470px] h-[470px]">
                <Image
                  src="/PD.png" // Ganti dengan path gambar Anda
                  alt={member.name}
                  fill
                  className="object-contain rounded-lg bg-gradient-to-tr from-black to-emerald-800"
                />
              </div>
              {/* Nama dan Peran */}
              <div className="bg-gray-800 text-white text-center w-full py-4 mt-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
