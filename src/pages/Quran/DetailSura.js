import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import { FiAlertOctagon } from "react-icons/fi";
import Surah from "./Surah";

const DetailSura = () => {
  const [surah, setSurah] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { surahId } = useParams();

  useEffect(() => {
    const API = `https://alquranbd.com/api/tafheem/suraData/${surahId}/1`;
    setIsLoading(true);
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setSurah(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="text-right">
      <div className="sticky md:top-[70px] top-[80px]">
        <h2 className="text-center max-w-[550px] py-2 mx-auto mb-5 flex items-center bg-white lg:text-[20px] sm:text-[14px] text-black rounded px-4">
          <FiAlertOctagon className="mx-4 text-red-600" size={30} />
          এই পেইজটির কাজ চলমান। তায় সম্পূর্ন সূরা টি পাচ্ছেন না।
        </h2>
      </div>
      <div>
        {surah.map((sura) => (
          <Surah sura={sura} key={sura.id} />
        ))}
      </div>
    </div>
  );
};

export default DetailSura;
