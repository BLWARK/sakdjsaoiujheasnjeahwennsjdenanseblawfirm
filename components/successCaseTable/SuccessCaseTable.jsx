import React from "react";

const SuccessTable = ({ cases }) => {
  return (
    <div className="max-h-[500px] overflow-y-auto border border-gray-300 rounded-lg">
      <table className="table-auto w-full text-left border-collapse">
        <thead className="sticky top-0 bg-gray-200 z-10">
          <tr>
            <th className="border border-gray-300 px-4 py-2">No</th>
            <th className="border border-gray-300 px-4 py-2">Nomor Perkara</th>
            <th className="border border-gray-300 px-4 py-2">Peran</th>
            <th className="border border-gray-300 px-4 py-2">Putusan</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((caseItem, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{caseItem.nomorPerkara}</td>
              <td className="border border-gray-300 px-4 py-2">{caseItem.peran}</td>
              <td className="border border-gray-300 px-4 py-2">{caseItem.putusan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SuccessTable;
