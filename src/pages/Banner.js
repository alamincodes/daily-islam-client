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

          <span className="font-bold text-center md:text-[20px] sm:text-[18px] ">
            "হে ঈমানদারগন! তোমরা আল্লাহকে অধিক পরিমানে স্মরন করো। আর সকাল-সন্ধায়
            তার পবিত্রতা ঘোষনা করো।"
          </span>
        </div>
        {/* right */}
        <div className="md:w-[50%] mx-1">
          <img
            src={BannerBg}
            className=" img-banner  sha aspect-video md:rounded-2xl sm:rounded-none"
            draggable="false"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
