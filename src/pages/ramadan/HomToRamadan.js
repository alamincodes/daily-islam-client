import React from "react";
import { Link } from "react-router-dom";

const HomToRamadan = () => {
  return (
    <div className="flex justify-center mt-5">
      <div className="bg-[#13283F] relative font-semibold flex md:flex-row flex-col items-center px-3 p-3 md:rounded-full rounded-lg">
        <h2 className="text-[17px] md:mr-[110px]">
          দেখেনিন রমজানের দোয়া এবং বিশেষ আমল গুলো
        </h2>
        <Link
          to="/ramadan"
          className="bg-[#38bdf8] font-semibold scale-95 md:absolute md:right-1 rounded-full px-4 py-[10px] text-sm"
        >
          <button>ক্লিক করুন</button>
        </Link>
      </div>
    </div>
  );
};

export default HomToRamadan;
