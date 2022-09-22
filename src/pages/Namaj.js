import React from "react";
import NamajDuya from "../NamajDuya.json";
const Namaj = () => {
  return (
    <div>
      {NamajDuya.map((namaj) => (
        <details class="group my-3">
          <summary class="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-white  shadow-[0_3px_10px_rgb(0,0,0,0.1)]">
            <h5 class="font-medium text-red-500 ">{namaj.title}</h5>

            <svg
              class="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p class="px-4 mt-4 leading-relaxed text-[19px] text-black font-semibold">{namaj.duyaArbi}</p>
          <p class="px-4 mt-4 leading-relaxed text-[17px] text-green-500 font-bold">{namaj.duyaBangla}</p>
          <p class="px-4 mt-4 leading-relaxed text-[17px] text-black">{namaj.meaning}</p>
        </details>
      ))}
    </div>
  );
};

export default Namaj;
