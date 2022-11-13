import React from "react";
import Logo from "../Images/icons/logo.svg";
const footer = () => {
  return (
    <div>
      <footer className="bg-[#0B1121]  mt-[150px]">
        <div className="max-w-5xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
          <div className="flex justify-center items-center flex-col">
            <div className="select-none text-white mt-5">
              <h2 className="flex items-center uppercase font-bold md:text-3xl sm:text-2xl">
                <span>Daily</span> 
                <img
                src={Logo}
                draggable="false"
                className="w-12 sm:h-10 md:h-auto"
                alt=""
              />
              <span>islam</span>
              </h2>
              
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
