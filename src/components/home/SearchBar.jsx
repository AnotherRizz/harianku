import React, { useState, useEffect } from "react";

const SearchBar = () => {
  const [kotaList, setKotaList] = useState([]);
  const [query, setQuery] = useState("");
   
  const [selectedKota, setSelectedKota] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetch("https://api.myquran.com/v2/sholat/kota/semua")
      .then((res) => res.json())
      .then((res) => {
        if (res.status && res.data) {
          setKotaList(res.data);
        }
      })
      .catch((err) => console.error("Gagal ambil data kota:", err));
  }, []);

  const filteredKota = kotaList.filter((item) =>
    item.lokasi.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item) => {
    setSelectedKota(item);
    setQuery(item.lokasi);
    setShowDropdown(true);
    localStorage.setItem("kotaId", item.id);
  };

  
  return  <div className="max-w-sm mx-auto relative mt-1">
  <input
    type="text"
    value={query}
    onChange={(e) => {
      setQuery(e.target.value);
      setShowDropdown(true);
    }}
    onClick={() => setShowDropdown(true)}
    placeholder="Cari kota..."
    className="w-full border-b-2 border-gray-200 bg-transparent text-sm text-gray-100 py-2.5 focus:outline-none focus:border-white placeholder-gray-300"
  />
  {showDropdown && (
    <ul className="absolute z-10 w-full bg-white text-black shadow rounded mt-1 max-h-48 overflow-auto">
      {filteredKota.length > 0 ? (
        filteredKota.map((item) => (
          <li
            key={item.id}
            className="px-4 py-2 hover:bg-teal-100 cursor-pointer"
            onClick={() => handleSelect(item)}
          >
            {item.lokasi}
          </li>
        ))
      ) : (
        <li className="px-4 py-2 text-gray-500">Tidak ditemukan</li>
      )}
    </ul>
  )}
</div>
};

export default SearchBar;
