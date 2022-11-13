import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const WallpaperImg = ({ img }) => {
  return (
    <div>
      <div>
        <img src={img} alt="" />
      </div>
      <div className="text-center my-4 ">
        <a
          href={img}
          download
          className="border-2 border-[#38BDF8] px-6 rounded-full text-[#38BDF8] hover:bg-[#38BDF8] hover:text-white"
        >
          download <FontAwesomeIcon icon={faDownload} />
        </a>
      </div>
    </div>
  );
};

export default WallpaperImg;
