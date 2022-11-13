import React from "react";
import jikirDay from "../../dayJikir.json";
import Sokal from "./Sokal";
const JikirDay = () => {
 
  return (
    <div>
      <h2 className="text-center bg-[#38BDF8] mt-1 rounded-full text-white py-1">
      সকালবেলার যিক্‌র
      </h2>
     {jikirDay.map((day, index) => (
      <Sokal key={day.id} day={day} index={index}/>
     ))}
    </div>
  );
};

export default JikirDay;
