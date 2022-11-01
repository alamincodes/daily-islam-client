import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import HadithDownloadCard from "./Hadith/HadithDownloadCard";
import Info from "./Info";
// import MainBanner from "./MainBanner";
import QuranScetion from "./QuranScetion";

const home = () => {
  return (
    <div>
        <div className=""><Banner/></div>
        {/* <div className="md:block sm:hidden "><MainBanner/></div> */}
        <Info/>
        <Cards/>
        <QuranScetion/>
        <HadithDownloadCard/>
    </div>
  );
};

export default home;
