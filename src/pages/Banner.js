import React from "react";
import BannerBg from "../Images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col-reverse select-none lg:flex-row md:flex-row justify-between items-center my-5 ">
        {/* left  */}
        <div className="flex flex-col md:w-[50%] mx-1">
          <span className="my-4 font-bold text-center lg:text-4xl text-[25px] text-[#38BDF8]">
            আস-সালামু আলাইকুম
          </span>

          <span className="font-normal text-center md:text-[20px] sm:text-[18px] ">
            "হে ঈমানদারগন! তোমরা{" "}
            <span className="text-[#38bdf8]">আল্লাহকে</span> অধিক পরিমানে স্মরন
            করো। আর সকাল-সন্ধায় তার{" "}
            <span className="text-[#38bdf8]">পবিত্রতা ঘোষনা করো।</span>"
          </span>
        </div>
        {/* right */}
        <div className="lg:max-w-[600px] md:max-w-[400px] mx-1">
          <img
            src={BannerBg}
            className="img-banner md:rounded-2xl sm:rounded-none"
            draggable="false"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
