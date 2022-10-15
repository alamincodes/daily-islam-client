import React, { useState } from 'react';

const Sokal = ({day}) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    return (
        <div>
           <div className="rounded-md break-all my-4 p-4 text-gray-600 md:text-[18px] sm:text-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.3)]">
          <div className="bg-rose-100  text-center font-bold p-3 my-2 sm:text-[15px] md:text-[18px] text-[#FF284F] rounded-md">
          <h2>{day.read}</h2>
          </div>
         
          <h2 className="font-bold text-center text-black">{day.title}</h2>
          <div className="bg-gray-100 p-2 rounded-lg">
            <h2 className="my-2 font-semibold">{day.jikirArbi}</h2>
            <h2>
              <span className="font-bold">উচ্চারনঃ </span>
              <span className="text-[#FF284F] font-semibold">
                {day.jikirBangla}
              </span>
            </h2>
            <h2 className="my-2 text-[15px]">
              <span className="font-bold">অর্থঃ</span> {day.meaning}
            </h2>
          </div>
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
            <div className="bg-gray-100 p-2 rounded-lg">
              <p>{day.detail}</p>
            </div>
          )}
        </div> 
        </div>
    );
};

export default Sokal;