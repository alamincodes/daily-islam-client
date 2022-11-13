import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Faq from "./Faq";
import HadithDownloadCard from "./Hadith/HadithDownloadCard";
import Info from "./Info";
// import MainBanner from "./MainBanner";
import QuranScetion from "./Quran/QuranScetion";
import WallpapersCard from "./Wallpaper/WallpapersCard";

const home = () => {
  return (
    <div>
        <div><Banner/></div>
        {/* <div className="md:block sm:hidden "><MainBanner/></div> */}
        <Info/>
        <Cards/>
        <QuranScetion/>
        <HadithDownloadCard/>
        <WallpapersCard/>
        <Faq/>
    </div>
  );
};

export default home;
