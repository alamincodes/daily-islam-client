import React from "react";

const Surah = ({ sura }) => {
  return (
    <div key={sura.id} className="border-b  border-dashed py-2">
      <h2 className="text-[#05ff58] text-[30px]">{sura.ayah_text}</h2>
      <h2 className="lg:text-[22px] sm:text-[17px] text-justify">
        {sura.bn[0].token_trans}
      </h2>
    </div>
  );
};

export default Surah;
