import React, { useState } from 'react';
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
const DuyaName = ({duya}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
        <div className={isOpen? "bg-[#0B1120] mt-1 px-2 rounded-lg": "bg-[#0B1120] px-2 rounded-lg"}>
          <div
            className=" flex justify-between items-center py-5 pl-2 cursor-pointer my-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h2 className={isOpen? "text-white md:text-2xl sm:text-[18px] font-bold":"text-[#38BDF8] md:text-2xl sm:text-[18px]"}>
              {duya.title}
            </h2>
            {/* un and down icons */}
            {isOpen ? (
              <BiChevronUp
                size={30}
                className="text-white w-7 h-7 flex-shrink-0 ml-1.5"
              />
            ) : (
              <BiChevronDown
                size={30}
                className="text-white w-7 h-7  flex-shrink-0 ml-1.5"
              />
            )}
          </div>
          {isOpen && (
           <div className="py-3 px-3 mt-4 text-gray-300"> 
           <h3 className=" leading-relaxed text-[19px] font-semibold">
             {duya.duyaArbi}
           </h3>
           <h3 className=" leading-relaxed text-[17px] text-white font-bold">
            <span className="text-[#38BDF8]">উচ্চারনঃ</span> {duya.duyaBangla}
           </h3>
           <h3 className="text-[17px]">
           <span className="font-bold text-[#38BDF8]">অর্থঃ</span> <span className="">{duya.meaning}</span>
           </h3>
         </div>
          )}
        </div>
      </div>
    );
};

export default DuyaName;