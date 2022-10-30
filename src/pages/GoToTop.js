import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToTopBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div>
      {isVisible && (
        <button className="bg-white right-5 bottom-10  w-[40px] h-[40px] fixed rounded-full z-[2] flex shadow-[0_3px_10px_rgb(0,0,0,0.1)] items-center justify-center" onClick={goToTopBtn}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"/></svg>
        </button>
      )}
    </div>
  );
};

export default GoToTop;
