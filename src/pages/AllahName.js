import React, { useState } from "react";
import { HiChevronUp } from "react-icons/hi";
const AllahName = ({ allahName }) => {
  const { arbi, bangla, meaning, faz } = allahName;
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <div className="text-gray-200 rounded-md bg-[#121923] shadow-[0_3px_10px_rgb(0,0,0,0.1)] p-2">
        <h2 className="text-center text-[#009000] font-semibold md:text-[22px] sm:text-[24px]">
          {bangla}
        </h2>
        <h2 className="text-center font-semibold md:text-[19px] sm:text-[24px]">
          {arbi}
        </h2>
        <h2 className="text-center md:text-[18px] sm:text-[24px]">{meaning}</h2>
        <div className="flex justify-center">
          <button
            className={`text-white text-[15px] mt-3 flex items-center bg-[#3a3a3a] rounded-full px-3 py-1`}
            onClick={toggleModal}
          >
            {modal ? "close" : "see more"}
            {modal ? <HiChevronUp className="duration-300" size={19}/> : <HiChevronUp className="rotate-180 duration-300 mt-[3px]" size={19}/>}

          </button>
        </div>
        {modal && (
          <div>
            <p className="text-[15px] p-2 mt-1 rounded-md">{faz}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllahName;
