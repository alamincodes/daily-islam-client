import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReadQuran from "./ReadQuran";
import Loading from "../Loading";
import { Link } from "react-router-dom";
// import DetailSura from "./DetailSura";
const Quran = () => {
  // const [surah, setSurah] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setIsLoading(true);
  //   const API = `https://alquranbd.com/api/tafheem/sura/list`;
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setSurah(data);
  //       setIsLoading(false);
  //     });
  // }, []);
  // if (isLoading) {
  //   return <Loading />;
  // }
  return (
    <div className="mt-24 flex justify-center items-center h-[800px]">
      {/* <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
        {surah.map((sura) => (
          <ReadQuran key={sura.name} sura={sura} />
        ))}
      </div> */}
      <div className="bg-neutral-700 p-5 text-white">
        <p>কারিগরি ত্রুটির কারণে পেইজটি বন্ধ আছে।</p>
        <Link to="/" className="flex justify-center mt-2">
          <button className="bg-[#38BDF8] w-full text-md rounded py-2 px-4">
            হোমে
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Quran;
