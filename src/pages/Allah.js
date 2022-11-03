import React from "react";
import AllahNames from "../AllahName.json";
import AllahName from "./AllahName";
const Allah = () => {
  return (
    <div className="mt-24">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2 mt-4">
        {AllahNames.map((allahName) => (
          <AllahName allahName={allahName} key={allahName.id} />
        ))}
      </div>
    </div>
  );
};

export default Allah;
