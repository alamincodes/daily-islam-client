import React from "react";
import { useNavigate } from "react-router-dom";

const ReadQuran = ({ sura }) => {
  const { name, id } = sura;

  const navigate = useNavigate();

  const showDetail = () => {
    const path = `/surah/${id}`;
    navigate(path);
  };

  const finalEnglishToBanglaNumber = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  String.prototype.getDigitBanglaFromEnglish = function () {
    let retStr = this;
    for (const x in finalEnglishToBanglaNumber) {
      retStr = retStr.replace(
        new RegExp(x, "g"),
        finalEnglishToBanglaNumber[x]
      );
    }
    return retStr;
  };
  return (
    <div
      onClick={showDetail}
      className="border-2 border-[#38BDF8] text-[#38BDF8] cursor-pointer rounded-full px-5 text-center"
    >
      <h2>{name}</h2>
      <p>সুরা নংঃ {id.getDigitBanglaFromEnglish()}</p>
      {/* <button onClick={showDetail}>detail</button> */}
    </div>
  );
};

export default ReadQuran;
