import React from 'react';
import working from "../Images/icons/working.svg";
const Hadis = () => {
    return (
        <div className="flex justify-center items-center flex-col my-6 ">
      <div className=" ">
        <img src={working} className="w-[300px]" alt="" />
        <h3 className="my-6">এই পেইজটির কাজ চলছে....... </h3>
      </div>
    </div>
    );
};

export default Hadis;