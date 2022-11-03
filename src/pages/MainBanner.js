import React from "react";
import bgImg from "../Images/banner.jpg";
const MainBanner = () => {
  return (
    <div
      className=" rounded-lg p-[30px] img-banner "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <div className="md:h-[500px]  flex items-end justify-center">
        <h2 className=" font-bold text-center select-none text-[20px]  text-white p-1">
          "হে ঈমানদারগন! তোমরা আল্লাহকে অধিক পরিমানে স্মরন করো। আর সকাল-সন্ধায়
          তার পবিত্রতা ঘোষনা করো।"
        </h2>
      </div>
    </div>
  );
};

export default MainBanner;
