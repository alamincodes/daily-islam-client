import React from "react";
import NightJikir from "../../jikirNight.json";
import Rat from "./Rat";
const JukirNight = () => {
  return (
    <div className="">
      <h2 className="text-center bg-[#009000] mt-1 rounded-full text-white py-1">
      রাতের যিক্‌র
      </h2>
     {NightJikir.map((night, index) => (
      <Rat key={night.id} night={night} index={index}/>
     ))}
    </div>
  );
};

export default JukirNight;
