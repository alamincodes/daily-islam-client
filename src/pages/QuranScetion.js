import React from "react";
import quranJpg from "../Images/quran.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const QuranScetion = () => {
  return (
    <div className="bg-gradient-to-t from-[#f8acff] to-[#696eff] select-none rounded-lg md:my-10 sm:my-24">
      <div className="flex mx-1 justify-between items-center flex-col-revers md:flex-row sm:flex-col">
        <div className="sm:mt-[-90px] md:mt-auto rounded-full">
          <img
            src={quranJpg}
            draggable="false"
            className="md:ml-10 sm:ml-auto sm:w-[150px] sm:h-[150px] md:h-[200px] md:w-[200px] my-7"
            alt="quran"
          />
        </div>
        <div className="md:mr-20 lg:mr-[10rem] flex items-center flex-col justify-center">
          <h2 className="md:text-4xl">কোরআন শরীফ পড়ুন</h2>
          <Link to="/quran">
            <button className="flex items-center  px-8 py-2 hover:scale-95 duration-300 text-[15px] bg-black text-white rounded-full my-3">
              কোরআন পড়ুন{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="mx-1 hover:scale-x-105"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuranScetion;
