import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ListDoa = () => {
  const [doaList, setDoaList] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.myquran.com/v2/doa/semua')
      .then((res) => res.json())
      .then((res) => {
        if (res.status && res.data) {
          setDoaList(res.data);
        }
      })
      .catch((err) => console.error('Gagal ambil data:', err))
      .finally(() => setLoading(false));
  }, []);

  const filteredDoa = doaList.filter((item) =>
    item.judul.toLowerCase().includes(query.toLowerCase())
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
    <div className="max-w-md mx-auto p-4 font-instrument">
      <input
        type="text"
        placeholder="Cari doa..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
      />

      {loading ? (
        Array.from({ length: 5 }).map((_, i) => <SkeletonCard key={i} />)
      ) : filteredDoa.length > 0 ? (
        filteredDoa.map((item, index) => (
          <div
            key={index}
            className="relative w-full p-6 flex justify-end items-center bg-white shadow-sm rounded-md mt-2"
          >
            <div className="flex flex-col justify-between text-end w-full">
              <p className="text-xl font-semibold text-slate-800">{item.judul}</p>
              <p className="text-2xl text-gray-700 mt-2">{item.arab}</p>
              <p className="text-sm text-purple-600 mt-2">{item.indo}</p>
              <p className="text-sm text-slate-500 mt-2">sumber :{item.source}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Doa tidak ditemukan.</p>
      )}
    </div>
  );
};

export default ListDoa;
