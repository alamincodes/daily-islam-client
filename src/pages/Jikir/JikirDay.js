import React from "react";
import jikirDay from "../../dayJikir.json";
import Sokal from "./Sokal";
const JikirDay = () => {
 
  return (
    <div>
      <h2 className="text-center bg-[#009000] text-white py-1">
      সকালবেলার যিক্‌র
      </h2>
     {jikirDay.map(day => (
      <Sokal key={day.id} day={day}/>
     ))}
    </div>
  );
};

export default JikirDay;
