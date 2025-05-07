import React, { useEffect, useState } from "react";

const Prayer = () => {
  const [jadwal, setJadwal] = useState(null);

  const kotaId = localStorage.getItem("kotaId") || "1632"; // fallback default
  const today = new Date();
  const tanggal = today.toISOString().split("T")[0]; // format YYYY-MM-DD

  fetch(`https://api.myquran.com/v2/sholat/jadwal/${kotaId}/${tanggal}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.status) {
        setJadwal(res.data.jadwal);
      }
    })
    .catch((err) => console.error("Gagal mengambil jadwal sholat:", err));

  return (
    <div className="w-full relative h-24 flex justify-around items-center font-instrument text-white mt-3">
     <img src="img/bg.png" className="w-full absolute  -bottom16 bg-cover  opacity-20" alt="" />
      {jadwal ? (
        <>
          <div className="flex flex-col items-center gap-1">
            <p>Subuh</p>
            <img src="img/icon-sholat/subuh.png" className="w-10" alt="Subuh" />
            <p>{jadwal.subuh}</p>
          </div>
         <div className="flex flex-col items-center gap-1">
            <p>Zuhur</p>
            <img src="img/icon-sholat/zuhur.png" className="w-10" alt="Zuhur" />
            <p>{jadwal.dzuhur}</p>
          </div>
         <div className="flex flex-col items-center gap-1">
            <p>Ashar</p>
            <img src="img/icon-sholat/ashar.png" className="w-10" alt="Ashar" />
            <p>{jadwal.ashar}</p>
          </div>
         <div className="flex flex-col items-center gap-1">
            <p>Maghrib</p>
            <img src="img/icon-sholat/magrib.png" className="w-10" alt="Maghrib" />
            <p>{jadwal.maghrib}</p>
          </div>
         <div className="flex flex-col items-center gap-1">
            <p>Isya</p>
            <img src="img/icon-sholat/isya.png" className="w-10" alt="Isya" />
            <p>{jadwal.isya}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Prayer;
