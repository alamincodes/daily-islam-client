import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";

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
    <div className="mt-24 text-right">
      <h2 className="text-center mb-5"> <span  className="bg-purple-200 text-purple-600 rounded-full px-4">Development mode</span></h2>
      {surah.map((sura) => (
        <div key={sura.id}>
          <h2>{sura.ayah_text}</h2>
          <h2>{sura.bn[0].token_trans}</h2>
        </div>
      ))}
    </div>
  );
};

export default DetailSura;
