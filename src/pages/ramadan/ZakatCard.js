import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { HiOutlinePlay } from "react-icons/hi";

const ZakatCard = ({ q }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="p-2 bg-[#121923] rounded-md  h-[150px] flex flex-col">
        <h2 className="text-[20px]">{q.qnaName}</h2>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId={q.link}
          onClose={() => setOpen(false)}
        />
      </div>
      <div>
        <button
          onClick={() => setOpen(true)}
          className="w-full flex text-sm justify-center items-center  text-center bottom-0 absolute rounded-sm py-3 bg-gradient-to-tr from-cyan-600 to-blue-500 hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400 "
        >
          <HiOutlinePlay size={24} className="mr-1 mb-1" />
          ভিডিও দেখুন
        </button>
      </div>
    </div>
  );
};

export default ZakatCard;
