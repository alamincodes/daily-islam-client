import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReadQuran from "./ReadQuran";
import Loading from "../Loading";
const Quran = () => {
  const [surah, setSurah] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const API = `https://alquranbd.com/api/tafheem/sura/list`;
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
    <div className="mt-24">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
        {surah.map((sura) => (
          <ReadQuran key={sura.name} sura={sura} />
        ))}
      </div>
    </div>
  );
};

export default Quran;
