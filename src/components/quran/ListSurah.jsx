import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListSurah = () => {
  const [surahList, setSurahList] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://equran.id/api/v2/surat")
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200 && res.data) {
          setSurahList(res.data);
        }
      })
      .catch((err) => console.error("Gagal ambil data surah:", err))
      .finally(() => setLoading(false));
  }, []);

  const filteredSurah = surahList.filter((item) =>
    item.namaLatin.toLowerCase().includes(query.toLowerCase())
  );

  const SkeletonCard = () => (
    <div className="animate-pulse relative w-full p-6 flex justify-end items-center bg-gray-100 rounded-md mt-2">
      <div className="absolute left-5 w-8 h-8 bg-gray-300 rounded"></div>
      <div className="flex flex-col justify-between text-end space-y-2 w-full">
        <div className="h-4 bg-gray-300 rounded w-3/4 ml-auto"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2 ml-auto"></div>
        <div className="h-3 bg-gray-200 rounded w-2/3 ml-auto"></div>
      </div>
    </div>
  );

  return (
    <div className="max-w-md mx-auto p-4">
      <input
        type="text"
        placeholder="Cari surah..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      {loading ? (
        // Tampilkan 5 skeleton saat loading
        Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)
      ) : (
        filteredSurah.map((item) => (
          <Link to={`/quran/${item.nomor}`} key={item.nomor}>
            <div className="relative w-full p-6 flex justify-end items-center bg-white shadow-sm font-instrument rounded-md mt-2">
              <p className="absolute left-8 text-xl text-purple-600 p-2">
                {item.nomor}
              </p>
              <div className="flex flex-col justify-between text-end">
                <p className="text-2xl text-slate-800">{item.nama}</p>
                <p className="text-purple-500">{item.namaLatin}</p>
                <p>
                  {item.jumlahAyat} Ayat, {item.tempatTurun}
                </p>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default ListSurah;
