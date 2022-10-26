import React from "react";
import Logo from "../Images/icons/logo.svg";
const footer = () => {
  return (
    <div>
      <footer class="bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg md:rounded-t-[50px] sm:rounded-t-[20px] mt-[150px]">
        <div class="max-w-5xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
          <div class="flex justify-center items-center flex-col">
            <div className="flex items-center select-none rounded-[3px] px-2 text-white mt-5">
              <h2 className="uppercase font-bold md:text-3xl sm:text-2xl">
                Daily islam
              </h2>
              <img
                src={Logo}
                draggable="false"
                className="w-12 sm:h-10 md:h-auto"
                alt=""
              />
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
