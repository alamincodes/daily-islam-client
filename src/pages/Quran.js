import React from "react";
import quranPdf from "../Images/Quran.pdf";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Quran = () => {
  return (
    <div>
      
      <div className="h-[100%] w-[100%] bg-white">
        <embed
          src={quranPdf}
          className="w-[100%] min-h-screen bg-black"
          type="application/pdf"
        />
      </div>
      <div className="text-center"> 
      <Link to="/">
      <button className="text-center bg-black text-white px-5 py-[5px] my-2 rounded-full hover:scale-95 duration-300 text-[15px ]"> <FontAwesomeIcon icon={faArrowLeft}/> Home</button>
      </Link>
      </div>
    </div>
  );
};

export default Quran;
