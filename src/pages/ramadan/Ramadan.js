import React from "react";
import ramadanBanner from "../../Images/ramadanBanner.png";
import RamadanCard from "./RamadanCard";
const Ramadan = () => {
  const cards = [
    {
      id: 1,
      title:
        "রমজানের বিশেষ দোয়া ও আমল গুলো জেনে নিতে পারেন যদি আপনার না জানা থাকে।",
      link: "/ramadanPayer",
      buttonText: "রমজানের দোয়া",
    },
    {
      id: 2,
      title: "রমজানের সম্পর্কে কিছু প্রশ্নের উত্তর।",
      link: "/ramadanQna",
      buttonText: "জেনে নিন",
    },
    {
      id: 3,
      title:
        "জেনে নিন যাকাত দেওয়ার নিওম ও যাকাত কাকে দেওয়া যাবে এবং কখন জাকাত ফরয হয়",
      link: "/ramadanzakat",
      buttonText: "জেনে নিন",
    },
  ];
  return (
    <div className="my-[100px]">
      <img src={ramadanBanner} className="rounded-md w-full" alt="" />
      <h2 className="my-10 md:text-5xl text-3xl text-center font-bold bg-clip-text bg-gradient-to-r from-cyan-400  to-indigo-600 text-transparent ">
        রমজান সম্পর্কে জেনেনিন
      </h2>

      <div className="grid md:grid-cols-3 grid-cols-1 lg:gap-6 gap-3 mt-10">
        {cards.map((card) => (
          <RamadanCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Ramadan;
