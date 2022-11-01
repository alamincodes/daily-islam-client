import React from "react";

const HadithDownload = ({ hadithPdf, hadithName, partName }) => {
  return (
    <div>
      <div className="page flex justify-center items-center flex-col py-6 text-center h-[200px] border-b-4 rounded-lg bg-green-500 bg-opacity-20 backdrop-blur-lg drop-shadow-lg ">
        <h3 className="sm:text-[17px] md:text-[20px] mb-5">{hadithName}</h3>
        <h3 className=" text-[18px]">{partName}</h3>
        <a
          href={hadithPdf}
          download
          className="border px-5 py-1 mt-9 rounded-full text-[15px]  hover:bg-white hover:text-black duration-300"
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default HadithDownload;
