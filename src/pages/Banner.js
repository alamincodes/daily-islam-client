import React from "react";
import BannerBg from "../Images/banner.jpg";
const Banner = () => {
  return (
    <div>
      <div className=" flex flex-col-reverse lg:flex-row md:flex-row justify-between items-center my-5 ">
        {/* left  */}
        <div className=" flex flex-col mx-10 ">
          <span className="my-4 font-bold text-center lg:text-4xl text-[25px]">আস-সালামু আলাইকুম</span>
         
          <span className=" font-bold text-center md:text-2xl text-[20px]">"হে ঈমানদারগন! তোমরা আল্লাহকে অধিক পরিমানে স্মরন করো। আর সকাল-সন্ধায় তার পবিত্রতা ঘোষনা করো।"</span>
        </div>
        {/* right */}
        <div>
          <img
            src={BannerBg}
            className="lg:w-[500px] md:[500px] w-[330px] aspect-video rounded-2xl "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
