import React from "react";
import HeaderQuran from "../components/quran/HeaderQuran";
import ListSurah from "../components/quran/ListSurah";

const Quran = () => {
  return (
    <div className="bg-neutral-100">
      <HeaderQuran />
      <main className="p-2">
       

        <ListSurah />
      </main>
    </div>
  );
};

export default Quran;
