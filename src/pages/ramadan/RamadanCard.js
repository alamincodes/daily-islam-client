import React from "react";
import { Link } from "react-router-dom";

const RamadanCard = ({ card }) => {
  return (
    <div>
      <div className="p-2">
        <div className="p-3 h-[100px] text-lg bg-[#121923] rounded-t-sm">
          <h2>{card.title}</h2>
        </div>
        <div className="border flex justify-center items-center text-lg border-gray-700 rounded-b-md">
          <Link
            to={card.link}
            className="w-full text-center m-2 rounded-sm py-3 bg-gradient-to-tr from-cyan-600 to-blue-500 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 "
          >
            <button>{card.buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RamadanCard;
