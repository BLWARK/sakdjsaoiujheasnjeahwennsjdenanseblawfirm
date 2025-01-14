import React from "react";
import SuccessTable from "../../successCaseTable/SuccessCaseTable";
import successCases from "@/data/successCases";

const SuccessCase = () => {
  return (
    <section className="w-full bg-gray-100 py-16">
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