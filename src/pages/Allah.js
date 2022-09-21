import React from "react";
import AllahNames from "../AllahName.json";
import AllahName from "./AllahName";
const Allah = () => {
  return (
    <div>
      {/* <h1>Hello</h1> */}
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-2 mt-4">
        {AllahNames.map((allahName) => (
          <AllahName allahName={allahName} key={allahName.id} />
        ))}
      </div>
    </div>
  );
};

export default Allah;
