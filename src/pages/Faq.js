import React from "react";
import faq from "../Images/faq.svg";
import queAns from "../Faq.json";
const Faq = () => {
  return (
    <div className="my-24">
      <div className="flex md:flex-row sm:flex-col">
        {/* left side */}
        <div className="md:w-[50%] sm:w-auto">
          <div className="flex sm:justify-center md:justify-start md:items-start flex-col sm:items-center">
            <img src={faq} className="w-[50%]" alt="" />
            <div className="text-4xl font-bold flex sm:flex-col md:flex-row">
              <h2 className="">সাধারন কিছু</h2>
              <h2 className="text-[#38BDF8] lgw-2/3 mx-1">প্রশ্নের উওর</h2>
            </div>
          </div>{" "}
        </div>
        {/* right side */}
        <div className="md:w-[50%] sm:w-auto sm:my-3 md:my-auto rounded-md">
          {queAns.map((qus) => (
            <div key={qus.id}>
              <details className="group shadow-1 p-2 sm:px-2 md:px-3 bg-slate-800/[0.6] my-1 ">
                <summary className="flex cursor-pointer items-center justify-between">
                  <h2 className="text-[16px] font-medium text-gray-400">
                    {qus.question}
                  </h2>

                  <span className="ml-1.5 flex-shrink-0 rounded-full bg-[#13283F] p-1.5 text-[#38BDF8] sm:p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 select-none leading-relaxed text-[16px] text-gray-300">
                  {qus.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
