import React from "react";

const WallpaperImg = ({ img }) => {
  return (
    <div>
      <div className="group relative block bg-black">
        <img
          alt="Developer"
          src={img}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-8">
          <div className="mt-64">
            <div className="text-center translate-y-8 transform opacity-0 hover:scale-95 duration-300 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <a
                href={img}
                download
                className="border-2 border-[#38BDF8] px-6 rounded-full text-[#38BDF8]"
              >
                download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WallpaperImg;
