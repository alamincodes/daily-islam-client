import React from "react";
import DuyaSection from "../DuyaSection.json";
import DuyaName from "./DuyaName";
const Duya = () => {
  
  return (
    <div>
      {DuyaSection.map((duya) => (
        <DuyaName key={duya.id} duya={duya} />
      ))}
    </div>
  );
};

export default Duya;
