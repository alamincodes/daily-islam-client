import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import wallpaperImg from "../../Images/wallpaper.svg";
const WallpapersCard = () => {
  return (
    <div className="bg-slate-800/[0.6] select-none rounded-lg md:my-10 sm:my-24">
      <div className="flex mx-1 justify-between items-center flex-col-revers md:flex-row sm:flex-col">
        <div className="sm:mt-[-90px] md:mt-auto rounded-full">
          <img
            src={wallpaperImg}
            draggable="false"
            className="md:ml-10 sm:ml-auto sm:w-[150px] sm:h-[150px] md:h-[200px] md:w-[200px] my-7"
            alt="quran"
          />
        </div>
        <div className="md:mr-20 lg:mr-[10rem] flex items-center flex-col justify-center">
          <h2 className="md:text-4xl font-bold">ইসলামিক <span className="text-[#38BDF8]">ওয়ালপেপার</span></h2>
          <p className="text-center md:text-[16px] text-gray-400 sm:text-[12px] md:w-[500px]">
            যাদের ইসলামিক ওয়ালপেপার ভালো লাগে তারা ডাউনলোড করতে পারেন। আমাদের কালেক্ট করা কিছু ওয়ালপেপার। ডাউনলোড করুন ফ্রীতে।
          </p>
          <Link to="/wallpaper">
            <button className="group flex items-center  px-8 py-2 text-[15px] border-2 border-[#38BDF8] text-[#38BDF8] rounded-full my-3">
               ওয়ালপেপার দেখুন{" "}
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

export default WallpapersCard;
