import React, { useState } from "react";
import { HiChevronUp } from "react-icons/hi";
const Sokal = ({ day, index }) => {
  const { text, title, jikirBangla, jikirArbi, meaning, read, detail } = day;
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="bg-[#0B1120] rounded-md my-4 p-4 text-gray-300 md:text-[18px] sm:text-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.3)]">
        <h2 className="mb-2">
          <span className="bg-[#13283F] text-[#38BDF8] px-4 rounded-full">
            {index + 1}
          </span>
        </h2>
        {title && (
          <h2 className="font-bold text-[20px] text-center text-[#38BDF8]">
            {title}
          </h2>
        )}
        <div className="bg-[#13283F] p-2 rounded-lg">
          {/* ========arbi====== */}
          {jikirArbi && <h2 className="my-2 font-semibold">{jikirArbi}</h2>}
          {/* ========text======= */}
          {text && <h2>{text}</h2>}
          {/* =======bangla========= */}
          {jikirBangla && (
            <h2>
              <span className="font-bold text-[#38BDF8]">উচ্চারনঃ </span>
              <span className=" font-semibold">{jikirBangla}</span>
            </h2>
          )}
          {/* ======meaning==== */}
          {meaning && (
            <h2 className="my-2 text-[15px]">
              <span className="font-bold text-[#38BDF8]">অর্থঃ</span> {meaning}
            </h2>
          )}
        </div>
        {/*===== read==== */}
        {read && (
          <div className="bg-[#38bdf8] text-center font-bold p-3 my-2 sm:text-[15px] md:text-[18px] text-black rounded-md">
            <h2>{read}</h2>
          </div>
        )}
        {/* see more button */}
        <div className="flex justify-end text-[15px]">
          <button className="text-[#38bdf8] flex items-center" onClick={toggleModal}>
            {modal ? "close" : "see more"}
            {modal ? <HiChevronUp className=" duration-300" size={19}/> : <HiChevronUp className="rotate-180 duration-300 mt-[3px]" size={19}/>}
          </button>
        </div>

        {modal && (
          <div className="bg-[#13283F] p-2 rounded-lg">
            <p>{detail}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sokal;
