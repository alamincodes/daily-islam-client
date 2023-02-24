import React, { useState } from "react";
import Namaj from "../Images/icons/namaj.svg";
import Tasbih from "../Images/icons/tasbi.svg";
import Hadis from "../Images/icons/hadith.svg";
import Duya from "../Images/icons/duya.svg";
import Allah from "../Images/icons/allah.svg";
import Sura from "../Images/icons/surah.svg";
import { Link } from "react-router-dom";

const Cards = () => {
  const cards = [
    { id: 1, name: "নামাজ", img: Namaj, linkPage: "namaj" },
    { id: 2, name: "দোয়া", img: Duya, linkPage: "duya" },
    { id: 3, name: "যিক্‌র", img: Tasbih, linkPage: "jikir" },
    { id: 4, name: "হাদিস", img: Hadis, linkPage: "hadis" },
    { id: 5, name: "সূরা", img: Sura, linkPage: "sura" },
    { id: 6, name: "আল্লাহর ৯৯টি নাম", img: Allah, linkPage: "allah" },
  ];

  let time = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);

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
    <div className="my-28">
      {/* <h3 className="text-center text-3xl mt-10">ফিচার</h3> */}
      {/* ----------time------------- */}
      <div className="flex justify-between items-center bg-[#13283F] text-white select-none md:flex-row sm:flex-col md:py-3 rounded-md sm:py-2">
        <h4 className="md:text-3xl sm:text-[20px] font-bold mx-5">সময়</h4>

        <h2 className="md:text-4xl sm:text-[20px] font-semibold md:tracking-[0.5rem] sm:tracking-[1px]">
          {currentTime.getDigitBanglaFromEnglish()}
        </h2>

        <Link to="/prayer-time">
          <button className="border-2 border-[#38BDF8] text-[#38BDF8] md:mx-3 sm:mx-3 md:text-[20px] sm:text-[15px] select-non rounded-full py-3 md:px-6 sm:px-10 hover:scale-95 duration-500 ease-in-out">
            নামাজ এর সময়
          </button>
        </Link>
      </div>
      {/* ---------cards-------- */}
      <div className="select-none grid text-black lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 lg:gap-4 md:gap-4 gap-3 my-5">
        {cards.map((card) => (
          <div key={card.id}>
            <Link to={card.linkPage}>
              <div>
                <div className="border-2 border-[#38BDF8] bg-[#13283F] flex md:flex-row-reverse sm:flex-col-reverse justify-center items-center py-5 hover:scale-95 duration-500 rounded-md">
                  {" "}
                  <h2 className="md:text-[20px] sm:text-[15px] text-white pl-1">
                    {card.name}
                  </h2>
                  <img
                    src={card.img}
                    draggable="false"
                    className="w-12 h-12 relative md:mb-3 sm:mb-auto"
                    alt={card.name}
                  />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
