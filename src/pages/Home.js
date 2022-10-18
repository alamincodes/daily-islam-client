import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import Info from "./Info";
import QuranScetion from "./QuranScetion";

const home = () => {
  return (
    <div>
        <Banner/>
        <Info/>
        <Cards/>
        <QuranScetion/>
    </div>
  );
};

export default home;
