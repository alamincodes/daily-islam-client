import React from "react";

const SuraDetail = ({ surah }) => {
  return (
    <div>
      <div className="bg-[#0B1120] p-2">
        <div className="bg-[#13283F] p-4 rounded-lg mx-3 my-5 text-[18px]">
          <h2 className="font-bold text-[20px] text-center text-[#38BDF8] mb-2">
            {surah.suraName}
          </h2>
          <h2>
            <span className="font-bold text-[#38BDF8]">উচ্চারনঃ </span>
            <span className="">{surah.suraArbi}</span>
          </h2>
          <br />
          <h2>
            <span className="font-bold text-[#38BDF8]">অর্থঃ </span>
            <span className="">{surah.suraBangla}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SuraDetail;
