import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";

const DetailSurah = () => {
  const { nomor } = useParams(); 
  const [surah, setSurah] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://equran.id/api/v2/surat/${nomor}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200 && res.data) {
          setSurah(res.data);
        }
      })
      .catch((err) => console.error("Gagal ambil detail surah:", err))
      .finally(() => setLoading(false));
  }, [nomor]);

  const SkeletonHeader = () => (
    <div className="p-5 bg-gradient-to-br from-purple-800 to-pink-900 rounded-b-xl mb-2 animate-pulse">
      <div className="h-6 bg-purple-400 rounded w-1/2 mb-3"></div>
      <div className="h-4 bg-purple-300 rounded w-1/3 mb-4"></div>
      <div className="flex justify-between items-center">
        <div className="h-10 bg-purple-300 rounded w-40"></div>
        <div className="h-4 bg-purple-300 rounded w-20"></div>
      </div>
    </div>
  );

  const SkeletonAyat = () => (
    <div className="mb-6 bg-white rounded-md p-4 animate-pulse">
      <div className="h-6 bg-gray-300 rounded mb-2 w-5/6 ml-auto"></div>
      <div className="h-4 bg-gray-200 rounded mb-2 w-2/3 ml-auto"></div>
      <div className="h-3 bg-gray-200 rounded w-full"></div>
    </div>
  );

  if (loading) {
    return (
      <div className="max-w-3xl font-instrument bg-neutral-50 mx-auto mb-10">
        {SkeletonHeader()}
        <div className="mb-20">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonAyat key={i} />
          ))}
        </div>
        <BottomNavbar />
      </div>
    );
  }

  if (!surah)
    return <p className="text-center text-red-500">Data tidak ditemukan</p>;

  return (
    <>
      <div className="max-w-3xl font-instrument bg-neutral-50 mx-auto mb-10">
        <div className="p-5 bg-gradient-to-br from-purple-800 to-pink-900 rounded-b-xl mb-2">
          <h1 className="text-3xl font-bold text-white mb-2">{surah.namaLatin}</h1>
          <p className="text-gray-200 mb-4">{surah.nama} - {surah.arti}</p>
          <div className="flex justify-between items-center">
            <audio src={surah.audioFull["03"]} controls />
            <p className="text-gray-200 text-end">Jumlah Ayat: {surah.jumlahAyat}</p>
          </div>
        </div>

        <div className="mb-20">
          {surah.ayat.map((item) => (
            <div key={item.nomorAyat} className="mb-6 bg-white rounded-md p-4">
              <p className="text-right text-2xl font-arabic">{item.teksArab}</p>
              <p className="text-right text-md text-purple-600">{item.teksLatin}</p>
              <p className="text-gray-600 text-xs mt-2">
                <span className="font-bold text-slate-900 text-sm">{item.nomorAyat}. </span>{item.teksIndonesia}
              </p>
            </div>
          ))}
        </div>
      </div>
      <BottomNavbar />
    </>
  );
};

export default DetailSurah;
