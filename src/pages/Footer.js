import React from "react";
import Logo from "../Images/newLogo.svg";
const footer = () => {
  return (
    <div>
      <footer className="bg-[#0B1121]  mt-[150px]">
        <div className="max-w-5xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-center items-center flex-col">
            <div>
              <img src={Logo} className="h-20 w-20 bg-cover " alt="" />
            </div>
            <div className="flex text-white">
              {/* <h2 className="bg-black px-2 rounded-full text-[15px]">
              Facebook 
            </h2> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default footer;
