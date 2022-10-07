import React, { useState } from "react";
import Namaj from "../Images/icons/namaj.svg";
import Tasbih from "../Images/icons/tasbih.svg";
import Hadis from "../Images/icons/hadis.svg";
import Duya from "../Images/icons/duya.svg";
import Allah from "../Images/icons/allah.svg";
import Sura from "../Images/icons/sura.svg";
import { Link } from "react-router-dom";
const Cards = () => {
  const cards = [
    {id: 1, name: "নামাজ", img: Namaj, linkPage: "namaj" },
    {id: 2, name: "দোয়া", img: Duya, linkPage: "duya" },
    {id: 3, name: "যিক্‌র", img: Tasbih, linkPage: "jikir" },
    {id: 4, name: "হাদিস", img: Hadis, linkPage: "hadis" },
    {id: 5, name: "সূরা", img: Sura, linkPage: "sura" },
    {id: 6, name: "আল্লাহর ৯৯টি নাম", img: Allah, linkPage: "allah" },
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
  return (
    <div>
      <h3 className="text-center text-3xl mt-10">ফিচার</h3>
      {/* ----------time------------- */}
      <div className=" flex justify-between items-center shadow-[0_3px_10px_rgb(0,0,0,0.1)] md:py-3 py-5 ">
        <div className="flex flex-col items-center border-l-4 border-r-4 border-r-[#FF284F] border-l-[#FF284F] md:mx-5 sm:mx-1 px-3">
          <h4 className="md:text-3xl sm:text-[20px] font-bold">সময়</h4>
          <h2 className=" md:text-4xl sm:text-[12px] font-semibold md:tracking-[0.5rem] sm:tracking-[1px]">
            {currentTime}
          </h2>
        </div>
        <button className="md:mx-10 sm:mx-3 md:text-[20px] sm:text-[12px] bg-black text-white rounded-lg py-3 md:px-6 sm:px-4  hover:scale-105 duration-100 ">
          নামাজ এর সময় দেখুন
        </button>
      </div>
      {/* ---------cards-------- */}
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 lg:gap-4 md:gap-4 gap-3 my-5">
        {cards.map((card) => (
          <div key={card.id}>
            <Link to={card.linkPage}>
            <div>
              <div className="flex lg:flex-row md:flex-row sm:flex-col justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.1)] py-5 px-2 transform hover:scale-105 duration-500 ">
                {" "}
                <h2 className="lg:text-3xl md:text-2xl sm:text-[15px]">
                  {card.name}
                </h2>
                <img src={card.img} className="w-16 pt-2 mx-3" alt="" />
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
