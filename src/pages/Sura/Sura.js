import React from "react";
import SuraFile from "../../Sura.json";
import SuraDetail from "./SuraDetail";
const Sura = () => {
  return (
    <div className="mt-[100px]">
      <div>
        {SuraFile.map((surah) =><SuraDetail key={surah.id} surah={surah} /> )}
      </div>
    </div>
  );
};

export default Sura;
