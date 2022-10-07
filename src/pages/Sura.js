import React from "react";
import working from "../Images/icons/working.svg";
const Sura = () => {
  return (
    <div className="flex justify-center my-6 ">
      <div className="bg-gray-200 p-[60px] rounded-[50%] flex items-center flex-col">
        <img src={working} className="w-[300px]" alt="" />
        <h3 className="my-6">এই পেইজটির কাজ চলছে....... </h3>
      </div>
    </div>
  );
};

export default Sura;
