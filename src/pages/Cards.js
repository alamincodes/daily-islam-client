import React from "react";
import Namaj from "../Images/icons/namaj.svg";
import Tasbih from "../Images/icons/tasbih.svg";
import Hadis from "../Images/icons/hadis.svg";
import Duya from "../Images/icons/duya.svg";
import Allah from "../Images/icons/duya.svg";
import { Link } from "react-router-dom";
const Cards = () => {
  const cards = [
    { name: "নামাজ", img: Namaj },
    { name: "দোয়া", img: Duya },
    { name: "যিকির", img: Tasbih },
    { name: "হাদিস", img: Hadis },
    { name: "সূরা", img: Hadis },
    { name: "আল্লাহর ৯৯টি নাম", img: Allah, linkPage: "allah"}
  ];
  return (
    <div>
        <h3 className="text-center text-3xl mt-10"> ফিচার</h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-2 my-5">
        {cards.map((card) => (
          <Link to={card.linkPage}>
          <div key={card.img}>
            <div className="flex justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.1)] py-5 px-2">
              <h2 className="lg:text-3xl md:text-3xl text-2xl">{card.name}</h2>
              <img src={card.img} className="w-16 mx-3" alt="" />
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
