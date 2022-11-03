import React from "react";
import Namajduya from "../NamajDuya.json";
import NamajDuya from "./NamajDuya";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Namaj = () => {
  const videos = [
    {id:1,
      name: "কিভাবে ৪ রাকাত ফরজ নামাজের নিওম।",
      link: "https://www.youtube.com/watch?v=bHDOQDzzKV8",
    },
    {id:2,
      name: " বিতর নামাজ কিভাবে পড়তে হয়?",
      link: "https://youtu.be/ShQEs3k5lps",
    },
  ];
  return (
    <div className="mt-24">
      {/* ========duya========= */}
      {Namajduya.map((namaj) => (
        <NamajDuya key={namaj.id} namaj={namaj} />
      ))}

      {/* --------video section-------- */}

      {videos.map((video) => (
        <div 
        key={video.id}
        className="flex justify-between text-[#38BDF8] items-center bg-[#0B1120] py-4 rounded-lg px-2 md:text-2xl sm:text-[18px] my-3">
          <h3>{video.name}</h3>
          {/*====== video play button start=======*/}
          <a href={video.link} target="_blank">
            <div className="flex justify-center items-center bg-[#38BDF8]  text-white py-2 hover:scale-105 duration-150 rounded-md px-5">
              <h2>ভিডিও</h2>
              <FontAwesomeIcon
                icon={faPlay}
                className="flex-shrink-0 ml-1.5 w-4 h-7 "
              />
            </div>
          </a>
          {/* ====video play button end====== */}
        </div>
        
      ))}
      {/* ---------button-------- */}
      <div className="flex justify-between ">
        <Link to="/"
        className="border-2 border-[#38BDF8] text-[#38BDF8] rounded-full md:px-5 sm:px-3 py-1"
        >
          <h4>
            <FontAwesomeIcon icon={faArrowLeft} /> <span className="mx-4">হোম</span>
          </h4>
        </Link>
        <Link to="/duya"
        className="border-2 border-[#38BDF8] text-[#38BDF8] rounded-full md:px-5 sm:px-3 py-1"
        >
          <h4>
            <span className="mx-4">দোয়া</span> <FontAwesomeIcon icon={faArrowRight} />
          </h4>
        </Link>
      </div>
     
    </div>
  );
};

export default Namaj;
