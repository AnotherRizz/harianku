import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className=" w-full h-screen flex justify-center  font-instrument bg-teal-900 overflow-hidden">
        <img
          src="img/bg.png"
          className=" w-full  bg-cover absolute bottom-0 opacity-20"
          alt=""
        />
        <div className="mt-10">
        <img src="img/4.png" className=" w-36 mx-auto" alt="" />
        <h1 className=" text-white text-center font-bold text-3xl">Harianku</h1>
        </div>
      </div>
    </>
  );
};

export default Welcome;
