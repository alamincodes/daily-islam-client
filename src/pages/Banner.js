import React from "react";
import BannerBg from "../Images/banner.jpg";
const Banner = () => {
  return (
    <div>
      <div className=" flex flex-col-reverse lg:flex-row md:flex-row justify-between items-center my-5 ">
        {/* left  */}
        <div className=" flex flex-col mx-10 lg:text-4xl text-[20px]">
          <span className="my-4 font-bold text-center">আস-সালামু আলাইকুম</span>
         
          <span className=" font-bold text-center">একজন মুসলিম হিসেবে আমাদের প্রতিদিন যা যা করবো </span>
        </div>
        {/* right */}
        <div>
          <img
            src={BannerBg}
            className="lg:w-[500px] w-[400px] aspect-video rounded-2xl "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
