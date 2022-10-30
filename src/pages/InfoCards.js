import React from "react";

const InfoCards = ({ title, img, bg }) => {
  return (
    <div
      className={`${bg} select-none flex flex-col justify-center items-center sm:py-2 md:p-5  md:my-10 md:rounded-lg sm:rounded-lg `}
    >
      <div className="bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg md:mt-[-50px] lg:mt-[-70px] rounded-full ">
        <img
          src={img}
          draggable="false"
          className=" lg:h-[100px] md:h-[80px] sm:h-[70px] p-3"
          alt=""
        />
      </div>

      <h3 className="text-white mt-5">{title}</h3>
    </div>
  );
};

export default InfoCards;
