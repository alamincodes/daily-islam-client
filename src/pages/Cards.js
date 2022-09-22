import React from "react";
import Namaj from "../Images/icons/namaj.svg";
import Tasbih from "../Images/icons/tasbih.svg";
import Hadis from "../Images/icons/hadis.svg";
import Duya from "../Images/icons/duya.svg";
import Allah from "../Images/icons/allah.svg";
import Sura from "../Images/icons/sura.svg";
import { Link } from "react-router-dom";
const Cards = () => {
  const cards = [
    { name: "নামাজ", img: Namaj, linkPage: "namaj" },
    { name: "দোয়া", img: Duya, linkPage: "duya" },
    { name: "যিকির", img: Tasbih, linkPage: "jikir" },
    { name: "হাদিস", img: Hadis, linkPage: "hadis" },
    { name: "সূরা", img: Sura, linkPage: "sura" },
    { name: "আল্লাহর ৯৯টি নাম", img: Allah, linkPage: "allah" },
  ];
  return (
    <div>
      <h3 className="text-center text-3xl mt-10"> ফিচার</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 lg:gap-4 md:gap-4 gap-3 my-5">
        {cards.map((card) => (
          <Link to={card.linkPage}>
            <div key={card.img}>
              <div className="flex  lg:flex-row md:flex-row flex-col justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.1)] py-5 px-2 transform hover:scale-105 duration-500">
                {" "}
                <h2 className="lg:text-3xl md:text-2xl text-[20px]">
                  {card.name}
                </h2>
                <img src={card.img} className="w-16 pt-2 mx-3" alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
