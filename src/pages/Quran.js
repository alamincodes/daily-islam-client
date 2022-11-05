import React from "react";
import quranPdf from "../Images/Quran.pdf";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
const Quran = () => {
  const [surah, setSurah]= useState([]);
  useEffect(() => {
    const API = `https://alquranbd.com/api/tafheem/suraData/1/1`
    fetch(API)
    .then(res => res.json())
    .then(data =>setSurah(data))
  },[])
  return (
    <div>
      <div className="">
        {
          surah.map(sura => (
            <div>
              <h2>{sura.ayah_text}</h2>
              <h2>{sura.bn.token_trans}</h2>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Quran;
