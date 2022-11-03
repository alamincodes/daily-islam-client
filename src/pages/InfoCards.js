import React from "react";

const InfoCards = ({ title, img, body }) => {
  return (
    <div
      className="bg-[#0B1120] select-none flex flex-col justify-center items-center sm:py-2 md:p-5  md:my-10 md:rounded-lg sm:rounded-lg"
    >
      <div className="bg-[#13283F] rounded-full">
        <img
          src={img}
          draggable="false"
          className=" lg:h-[100px] md:h-[80px] sm:h-[70px] p-5"
          alt=""
        />
      </div>

      <h3 className="text-white mt-2">{title}</h3>
      <h3 className="text-gray-400 mt-2 text-[15px] text-center mx-5">{body}</h3>
    </div>
  );
};

export default InfoCards;
