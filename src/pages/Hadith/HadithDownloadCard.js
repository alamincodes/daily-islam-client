import React from "react";
import { Link } from "react-router-dom";
import hadithImg from "../../Images/hadith.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const HadithDownloadCard = () => {
  return (
    <div className="bg-slate-800/[0.6] select-none rounded-lg">
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
          <h2 className="md:text-4xl font-bold"><span className="text-[#38BDF8]">হাদিস</span> ডাউনলোড করুন</h2>
          <p className="text-center md:text-[16px] text-gray-400 sm:text-[12px] md:w-[500px]">
            যারা হাদিস PDF ডাউনলোড করে অহলাইনে পড়তে চান তাদের জন্য আমাদের কিছু
            হাদিস কালেক্ট করা। ডাউনলোড করুন এখনি।
          </p>
          <Link to="/hadith-download">
            <button className="group flex items-center  px-8 py-2 text-[15px] border-2 border-[#38BDF8] text-[#38BDF8] rounded-full my-3">
              হাদিস ডাউনলোড করুন{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className=" ml-3 h-6 w-6 transform transition-transform group-hover:translate-x-3"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HadithDownloadCard;
