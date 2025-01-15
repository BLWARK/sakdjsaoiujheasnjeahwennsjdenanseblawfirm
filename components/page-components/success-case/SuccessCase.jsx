"use client"
import React, { useEffect } from "react";
import SuccessTable from "../../successCaseTable/SuccessCaseTable";
import successCases from "@/data/successCases";
import AOS from "aos";
import "aos/dist/aos.css";

const SuccessCase = () => {

useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section data-aos="fade-up" id="case" className="w-full bg-gray-100 py-14">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-playfair font-bold mb-6 text-center">Kasus-Kasus yang Berhasil</h2>
        <p className="text-gray-600 text-center mb-12">
          Berikut adalah beberapa kasus yang telah kami tangani dengan hasil yang memuaskan.
        </p>
        <SuccessTable cases={successCases} />
      </div>
    </section>
  );
};

export default SuccessCase;
