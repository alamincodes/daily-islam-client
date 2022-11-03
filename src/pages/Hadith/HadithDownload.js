import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HadithDownload = ({ hadithPdf, hadithName, partName }) => {
  const [toastAdd, setToastAdd] = useState(false);
  const openToast = () => {
    setToastAdd(true);
    toast.success("Thanks for downloading the hadith🖤");
  };

  return (
    <div>
      <div className="page rounded-r-none after:rounded-l flex justify-center items-center flex-col py-6 text-center h-[200px] rounded-lg bg-green-500 bg-opacity-20 backdrop-blur-lg drop-shadow-lg ">
        <h3 className="sm:text-[17px] md:text-[20px] mb-5">{hadithName}</h3>
        <h3 className=" text-[18px]">{partName}</h3>
        <a
          href={hadithPdf}
          download
          onClick={openToast}
          className="border px-5 py-1 mt-9 rounded-full text-[15px]  hover:bg-white hover:text-black duration-300"
        >
          Download
        </a>
      </div>
      {toastAdd && (
        <ToastContainer autoClose={5000} hideProgressBar={true} theme="colored" />
      )}
    </div>
  );
};

export default HadithDownload;
