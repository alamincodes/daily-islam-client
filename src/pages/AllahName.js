import React, { useState } from "react";

const AllahName = ({ allahName }) => {
  const { arbi, bangla, meaning, faz } = allahName;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] p-2">
        <h2 className="text-center md:text-2xl sm:text-[24px]">{bangla}</h2>
        <h2 className="text-center md:text-2xl sm:text-[24px]">{arbi}</h2>
        <h2 className="text-center md:text-2xl sm:text-[24px]">{meaning}</h2> 
        <p
          className="text-center text-red-500  text-[15px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <button className="bg-purple-700 text-white px-4 py-1  rounded-full  hover:scale-105 duration-150">Close</button> : <button className="bg-red-500 text-white px-2 py-1  rounded-full hover:scale-105 duration-150">see more</button>}
        </p>
        {isOpen && (
          <div>
            <p className="text-[15px]  shadow-[0_3px_10px_rgb(0,0,0,0.3)] p-2 mt-1 rounded-md">{faz}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllahName;
