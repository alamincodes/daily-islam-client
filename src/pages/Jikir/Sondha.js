import React, { useState } from "react";

const Sondha = ({ evening, index }) => {
  const { text, title, jikirArbi, jikirBangla, meaning, read, detail } =
    evening;
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div>
      <div className="bg-[#0B1120] rounded-md my-4 p-4 text-white/90 md:text-[18px] sm:text-[15px]">
        <h2 className="mb-2">
          <span className="bg-[#13283F] text-[#38BDF8] px-4 rounded-full">
            {index + 1}
          </span>
        </h2>
        {title && <h2 className="font-bold text-center text-[#38BDF8]">{title}</h2>}
        <div className="bg-[#13283F] p-2 rounded-lg">
          {/* arbi*/}
          {jikirArbi && <h2 className="my-2 font-semibold">{jikirArbi}</h2>}
          {/* text */}
          {text && <h2>{text}</h2>}
          {/* Bangla */}
          {jikirBangla && (
            <h2>
              <span className="font-bold text-[#38BDF8]">উচ্চারনঃ </span>
              <span className="text-[#009000] font-semibold">
                {jikirBangla}
              </span>
            </h2>
          )}
          {/* meaning */}
          {meaning && (
            <h2 className="my-2 text-[15px]">
              <span className="font-bold text-[#38BDF8]">অর্থঃ</span> {meaning}
            </h2>
          )}
        </div>
        {/*===== read==== */}
        {read && (
          <div className="bg-green-100 text-center font-bold p-3 my-2 sm:text-[15px] md:text-[18px] text-[#009000] rounded-md">
            <h2>{read}</h2>
          </div>
        )}
        <div className="flex justify-end text-[15px]">
          {modal ? (
            <button className="text-purple-600" onClick={toggleModal}>
              close
            </button>
          ) : (
            <button
              className="text-purple-600 cursor-pointer "
              onClick={toggleModal}
            >
              see more
            </button>
          )}
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

export default Sondha;
