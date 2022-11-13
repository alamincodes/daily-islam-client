import React from "react";
import img1 from "../../Images/wallpaper/1.jpg";
import img2 from "../../Images/wallpaper/2.jpg";
import img3 from "../../Images/wallpaper/3.jpg";
import img4 from "../../Images/wallpaper/4.jpg";
import WallpaperImg from "./WallpaperImg";
const Wallpaper = () => {
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-x-4 mt-24">
      <WallpaperImg img={img4} />
      <WallpaperImg img={img3} />
      <WallpaperImg img={img2} />
      <WallpaperImg img={img1} />
    </div>
  );
};

export default Wallpaper;
