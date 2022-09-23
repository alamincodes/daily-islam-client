import React from "react";
import DuyaSection from "../DuyaSection.json";
const Duya = () => {
  return (
    <div>
      {DuyaSection.map((duya) => (
        <details class="my-3 group ">
          <summary class="p-4 flex items-center justify-between  rounded-lg cursor-pointer  bg-white  shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
            <h5 class=" text-black md:text-2xl sm:text-[20px]">{duya.title}</h5>

            <span class="relative flex-shrink-0 ml-1.5 w-5 h-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p class="px-4 mt-4 leading-relaxed text-[19px] text-black font-semibold">{duya.duyaArbi}</p>
          <p class="px-4 mt-4 leading-relaxed text-[17px] text-rose-500 font-bold">{duya.duyaBangla}</p>
          <p class="px-4 mt-4 leading-relaxed text-[17px] text-black">{duya.meaning}</p>
        </details>
      ))}
    </div>
  );
};

export default Duya;
