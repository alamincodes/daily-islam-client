import React, { useState } from "react";

const AllahName = ({ allahName }) => {
  const { arbi, bangla, meaning, faz } = allahName;
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <div className="text-gray-700 rounded-md border-t-4 border-rose-600 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] p-2">
        <h2 className="text-center text-[#009000] font-semibold md:text-[22px] sm:text-[24px]">
          {bangla}
        </h2>
        <h2 className="text-center font-semibold md:text-[19px] sm:text-[24px]">
          {arbi}
        </h2>
        <h2 className="text-center md:text-[18px] sm:text-[24px]">{meaning}</h2>
        <div className="text-center">
          {modal ? (
            <button className="text-white text-[18px] bg-purple-500 rounded-full px-10" onClick={toggleModal}>
              close
            </button>
          ) : (
            <button
              className="text-white text-[17px] bg-rose-500 rounded-full px-10 hover:scale-105 duration-300 "

              onClick={toggleModal}
            >
              see more
            </button>
          )}
        </div>
        {modal && (
          <div>
            <p className="text-[15px]  shadow-[0_3px_10px_rgb(0,0,0,0.3)] p-2 mt-1 rounded-md">
              {faz}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllahName;
