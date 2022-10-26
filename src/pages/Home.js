import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Info from "./Info";
import MainBanner from "./MainBanner";
import QuranScetion from "./QuranScetion";

const home = () => {
  return (
    <div>
        <div className="md:hidden sm:block"><Banner/></div>
        <div className="md:block sm:hidden "><MainBanner/></div>
        <Info/>
        <Cards/>
        <QuranScetion/>
    </div>
  );
};

export default home;
