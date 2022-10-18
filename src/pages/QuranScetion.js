import React from "react";
import quranJpg from "../Images/quran.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const QuranScetion = () => {
  return (
    <div className="bg-gradient-to-t from-[#f8acff] to-[#696eff] select-none rounded-lg my-10">
      <div className="flex items-center mx-1 justify-between flex-col-revers md:flex-row sm:flex-col">
        <div>
          <img src={quranJpg} draggable="false" className="sm:w-[200px] md:w-[300px]" alt="quran" />
        </div>
        {/* style={{backgroundImage:`url(${bg})`,backgroundSize: 'cover', backgroundRepeat:'no-repeat',}} */}
        <div className="md:mr-20 lg:mr-[10rem] flex items-center flex-col justify-center">
          <h2 className="md:text-4xl">কোরআন শরীফ পড়ুন</h2>
          <Link to="/quran">
          <button className="flex items-center  px-8 py-2 hover:scale-95 duration-300 text-[15px] bg-black text-white rounded-full my-3">
            কোরআন পড়ুন <FontAwesomeIcon icon={faArrowRight} className="mx-1"/>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuranScetion;
