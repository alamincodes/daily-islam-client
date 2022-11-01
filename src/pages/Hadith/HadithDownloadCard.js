import React from "react";
import { Link } from "react-router-dom";
import hadithImg from "../../Images/alquran.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const HadithDownloadCard = () => {
  return (
    <div className="bg-gradient-to-t from-[#832388] via-[#e3436b] to-[#f0772f] select-none rounded-lg">
      <div className="flex mx-1 justify-between items-center   md:flex-row-reverse sm:flex-col">
        <div className="sm:mt-[-90px] md:mt-auto rounded-full md:mr-5">
          <img
            src={hadithImg}
            draggable="false"
            className="md:ml-10 sm:ml-auto sm:w-[150px] sm:h-[150px] md:h-[200px] md:w-[200px] my-7"
            alt=""
          />
        </div>
        <div className="md:mr-20 lg:mr-[10rem] flex items-center flex-col justify-center md:ml-5">
          <h2 className="md:text-4xl">হাদিস ডাউনলোড করুন</h2>
          <Link to="/hadith-download">
            <button className="flex items-center  px-8 py-2 hover:scale-95 duration-300 text-[15px] bg-black text-white rounded-full my-3">
              হাদিস ডাউনলোড করুন{" "}
              <FontAwesomeIcon icon={faArrowRight} className="mx-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HadithDownloadCard;
