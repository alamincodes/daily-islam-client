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
        console.log(data);
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
    <div className="">
      <h2 className="text-rose-600 text-[18px] text-right"><span className="bg-rose-200 px-5 rounded-full">Page no: {chapterNo}</span></h2>
      <div className=" text-center ">
      {chapterNo > 1 && (
        <button onClick={() => setChapterNo(chapterNo - 1)} className="border px-5 ">
          Pev
        </button>
      )}
      <button onClick={() => setChapterNo(chapterNo + 1)} className="border px-5 mx-2">
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
