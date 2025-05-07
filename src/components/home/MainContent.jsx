import React from "react";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="w-full bg-white rounded-t-2xl mt-14 py-5 px-5 z-40 relative">
      <h1 className="text-2xl font-bold">All feature</h1>
      <div className="flex justify-between my-5 gap-8">
        <Link to={"/quran"}>
          <div className="p1">
            <img src="img/icon/quran.png" className="" alt="" />
            <h1 className="text-center text-sm">Quran</h1>
          </div>
        </Link>
        <div className="p1">
          <img src="img/icon/doa.png" className="" alt="" />
          <h1 className="text-center text-sm">Doa</h1>
        </div>

        <div className="p1">
          <img src="img/icon/jadwal.png" className="" alt="" />
          <h1 className="text-center text-sm">Jadwal sholat</h1>
        </div>
        <div className="p1">
          <img src="img/icon/bookmark.png" className="" alt="" />
          <h1 className="text-center text-sm">Bookmark</h1>
        </div>
      </div>
      <h1 className="text-2xl font-bold">Dakwah</h1>
      <div className="flex justify-between my-5 gap-4 overflow-x-auto  mb-20">
        <img
          src="https://img.youtube.com/vi/gOp846K2C_A/maxresdefault.jpg"
          alt="Thumbnail"
          className=" w-90 rounded shadow"
        />
        <img
          src="https://img.youtube.com/vi/pzP33yqnr70/maxresdefault.jpg"
          alt="Thumbnail"
          className=" w-90 rounded shadow"
        />
        <img
          src="https://img.youtube.com/vi/r_dItIKV_So/maxresdefault.jpg"
          alt="Thumbnail"
          className=" w-90 rounded shadow"
        />
        <img
          src="https://img.youtube.com/vi/YzV3GBb_1IM/maxresdefault.jpg"
          alt="Thumbnail"
          className=" w-90 rounded shadow"
        />
      </div>
    </div>
  );
};

export default MainContent;
