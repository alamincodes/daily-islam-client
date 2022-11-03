import React from "react";
import InfoCards from "./InfoCards";
import tasbihSvg from "../Images/info-img/tasbih.svg";
import namajSvg from "../Images/info-img/namaj.svg";
import quranSvg from "../Images/info-img/quran.svg";
const Info = () => {
  return (
    <div className="mt-24">
        <h2 className="text-[1.875rem] font-bold text-white text-center"> আমাদের <span className="text-[#38BDF8]">সার্ভিস গুলো</span> দেখেনিন</h2>
      <div className="grid md:grid-cols-3 md:gap-3 sm:gap-2 sm:grid-cols-1 md:my-1 sm:my-10">
        <InfoCards
          title="নামাজের দোয়া"
          body="ফরজ নামাজে দোয়া কোথায় কি পরতে হয়ে তা রয়েছে"
          img={namajSvg}
        />
        <InfoCards
          title="কোরআন"
          body="কোরআন পড়তে পারার সুযোগ রয়েছে "
          img={quranSvg}
        />
        <InfoCards
          title="দোয়া ও যিক্‌র"
          body="প্রতিদিন সকাল, সন্ধ্যা, রাতে কখন কোন যিক্‌র পরবেন তা রয়েছে"
          img={tasbihSvg}
        />
      </div>
    </div>
  );
};

export default Info;
