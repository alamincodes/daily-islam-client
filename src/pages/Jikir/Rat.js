import React from "react";

const Rat = ({ night, index }) => {
  return (
    <div>
      <div className="bg-[#0B1120] rounded-md my-4 p-4 text-white/90 md:text-[18px] sm:text-[15px]">
        <h2><span className="bg-[#13283F] text-[#38BDF8] px-4 rounded-full">{index + 1}</span></h2>
        <div className="p-2 rounded-lg text-justify">
          {night.jikirName && (
            <h2 className="my-2">{night.jikirName}</h2>
          )}
          {night.read && (
           <div className="bg-green-100 text-center font-bold p-3 my-2 sm:text-[15px] md:text-[18px] text-[#009000] rounded-md">
           <h2>{night.read}</h2>
         </div>
          )}
         
        </div>
      </div>
    </div>
  );
};

export default Rat;
