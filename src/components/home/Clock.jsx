import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formattedTime = now.toLocaleString("id-ID", {
        hour: "numeric",
        minute: "numeric",
        hour12: false, 
      });
      setTime(formattedTime);
    };

    updateClock(); 
    const interval = setInterval(updateClock, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex flex-col items-center gap-1">
      <h1 className=" text-6xl font-bold text-white">{time}</h1>
    </div>
  );
};

export default Clock;
