import React, { useState, useEffect } from "react";

const AsmaulHusna = () => {
  const [asmaulHusna, setAsmaulHusna] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.myquran.com/v2/husna/semua")
      .then((res) => res.json())
      .then((res) => {
        if (res.status && res.data) {
          setAsmaulHusna(res.data);
        }
      })
      .catch((err) => console.error("Gagal ambil data Asmaul Husna:", err))
      .finally(() => setLoading(false));
  }, []);

  const SkeletonBox = () => (
    <div className="animate-pulse w-full h-24 bg-gray-300 rounded-md" />
  );

  return (
    <div className="container mx-auto p-5 font-instrument">
      <h2 className="text-2xl font-semibold text-center mb-4">Asmaul Husna</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {loading
          ? Array.from({ length: 12 }).map((_, i) => <SkeletonBox key={i} />)
          : asmaulHusna.map((item) => (
              <div
                key={item.id}
                className="w-full h-24 flex flex-col justify-center items-center text-center bg-white rounded shadow-md p-3"
              >
                <p className="text-2xl font-arabic text-gray-800">{item.arab}</p>
                <p className="text-sm text-gray-600">{item.latin}</p>
                <p className="text-xs text-gray-500">{item.indo}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AsmaulHusna;
