import React from "react";
import { Link } from "react-router-dom";

const HomToRamadan = () => {
  return (
    <div className="flex justify-center mt-5">
      <div className="bg-[#13283F] relative flex md:flex-row flex-col items-center px-3 p-3 md:rounded-full rounded-lg">
        <h2 className="text-[20px] md:mr-[110px]">
          দেখেনিন রমজানের দোয়া এবং বিশেষ আমল গুলো
        </h2>
        <Link
          to="/ramadan"
          className="bg-[#38bdf8] hover:scale-95 hover:duration-300 md:absolute md:right-2 rounded-full px-5 py-3 text-sm"
        >
          <button>ক্লিক করুন</button>
        </Link>
      </div>
    </div>
  );
};

export default HomToRamadan;
