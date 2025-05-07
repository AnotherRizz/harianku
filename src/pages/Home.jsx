import React, { useState, useEffect } from "react";
import BottomNavbar from "../components/BottomNavbar";
import Prayer from "../components/home/Prayer";
import Clock from "../components/home/Clock";
import MainContent from "../components/home/MainContent";
import SearchBar from "../components/home/SearchBar";


const Home = () => {
  
  const today = new Date();
 

  return (
    <>
      <main className="w-full  bg-gradient-to-br from-purple-900  to-pink-900 min-h-dvh font-instrument">
     
        <header className="p-3 flex justify-between items-center">
          <div>
            <h1 className="text-slate-200 mt-3 text-md">
            {today.toLocaleString("id-ID", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
            </h1>
            <SearchBar/>

           

         
          </div>
          <i className="fa-solid fa-bell text-slate-200 text-2xl"></i>
        </header>
        <div className="mt-3 flex justify-center items-center">

         <Clock />
        </div>
        <Prayer />
      <MainContent/>
      </main>
      <BottomNavbar />
    </>
  );
};

export default Home;
