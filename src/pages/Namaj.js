import React from "react";
import Namajduya from "../NamajDuya.json";
import NamajDuya from "./NamajDuya";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Namaj = () => {
  const videos = [
    {
      name: "কিভাবে ৪ রাকাত ফরজ নামাজের নিওম।",
      link: "https://www.youtube.com/watch?v=bHDOQDzzKV8",
    },
    {
      name: " বিতর নামাজ কিভাবে পড়তে হয়?",
      link: "https://youtu.be/ShQEs3k5lps",
    },
  ];
  return (
    <div>
      {Namajduya.map((namaj) => (
        <NamajDuya key={namaj.id} namaj={namaj} />
      ))}

      {/* --------video section-------- */}

      {videos.map((video) => (
        <div className="flex justify-between items-center bg-white shadow-[0_3px_10px_rgb(0,0,0,0.1)] py-4 rounded-lg px-2 md:text-2xl sm:text-[18px] my-3">
          <h3>{video.name}</h3>
          {/*====== video play button start=======*/}
          <a href={video.link} target="_blank">
            <div className="flex justify-center items-center bg-black  text-white py-2 hover:scale-105 duration-150 rounded-md px-5">
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
    </div>
  );
};

export default Namaj;
