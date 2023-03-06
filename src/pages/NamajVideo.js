import React from "react";
import Namajduya from "../NamajDuya.json";
import NamajDuya from "./NamajDuya";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ModalVideos from "./ModalVideos";

const Namaj = () => {
  const videos = [
    { id: 1, name: "কিভাবে ৪ রাকাত ফরজ নামাজের নিওম।", link: "bHDOQDzzKV8" },
    { id: 2, name: " বিতর নামাজ কিভাবে পড়তে হয়?", link: "ShQEs3k5lps" },
  ];
  return (
    <div className="mt-24">
      {/* ========duya========= */}
      {Namajduya.map((namaj, index) => (
        <NamajDuya key={namaj.id} namaj={namaj} index={index} />
      ))}

      {/* --------Modal video section-------- */}

      {videos.map((video) => (
        <ModalVideos video={video} key={video.id} />
      ))}
      {/* ---------button-------- */}
      <div className="flex justify-between ">
        <Link
          to="/"
          className="border-2 border-[#38BDF8] text-[#38BDF8] rounded-full md:px-5 sm:px-3 py-1"
        >
          <h4>
            <FontAwesomeIcon icon={faArrowLeft} />{" "}
            <span className="mx-4">হোম</span>
          </h4>
        </Link>
        <Link
          to="/duya"
          className="border-2 border-[#38BDF8] text-[#38BDF8] rounded-full md:px-5 sm:px-3 py-1"
        >
          <h4>
            <span className="mx-4">দোয়া</span>{" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Namaj;
