import React from "react";
import { Link } from "react-router-dom";
const ThankyouPage = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="p-6 flex flex-col justify-center items-center bg-slate-600/40 rounded-lg">
        <div className="-mt-16">
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            id="IconChangeColor"
            height="100"
            width="200"
          >
            <path
              fill="#38bdf8"
              d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
              id="mainIconPathAttribute"
              filter="url(#shadow)"
              stroke="#aeff00"
              strokeWidth="0"
            ></path>
            <filter id="shadow">
              <feDropShadow
                id="shadowValue"
                stdDeviation=".5"
                dx="0"
                dy="0"
                floodColor="black"
              ></feDropShadow>
            </filter>
            <filter id="shadow">
              <feDropShadow
                id="shadowValue"
                stdDeviation=".5"
                dx="0"
                dy="0"
                floodColor="black"
              ></feDropShadow>
            </filter>
          </svg>
        </div>
        <p className="my-6 text-center">ধন্যবাদ আপনার মতামত জানানোর জন্য।</p>
        <Link to={"/"}>
          <button
            type="submit"
            className="text-white text-[20px] bg-[#38bdf8] px-6 py-2 rounded-md"
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankyouPage;
