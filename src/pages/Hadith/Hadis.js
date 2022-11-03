import React, { useEffect } from "react";
import { useState } from "react";
import Loading from "../Loading";
import HadithName from "./HadithName";
const Hadis = () => {
  const [hadiths, setHdith] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [chapterNo, setChapterNo] = useState(1);

  const apiGet = () => {
    setIsLoading(true);
    fetch(`https://alquranbd.com/api/hadith/bukhari/${chapterNo}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setHdith(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    apiGet();
  }, [chapterNo]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mt-24">
      <h2 className="text-black text-[18px] text-right"><span className="bg-[#38BDF8] px-5 rounded-full">Page No: {chapterNo}</span></h2>
      <div className="text-center mt-2">
      {chapterNo > 1 && (
        // button
        <button 
        onClick={() => setChapterNo(chapterNo - 1)} 
        className="px-5 text-[18px] rounded-l-full hover:scale-95 duration-300 bg-[#38BDF8]">
          Prev
        </button>
      )}
      <button 
      onClick={() => setChapterNo(chapterNo + 1)} 
      className="px-5 text-[18px] mx-2 rounded-r-full hover:scale-95 duration-300 bg-[#38BDF8]">
        Next
      </button>
      
      </div>
      {hadiths.map((hadith) => (
        <HadithName key={hadith.id} hadith={hadith} />
      ))}
    </div>
  );
};

export default Hadis;
