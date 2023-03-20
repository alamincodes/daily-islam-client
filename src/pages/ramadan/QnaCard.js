import React, { useState } from "react";
import { HiOutlinePlay } from "react-icons/hi";
import ModalVideo from "react-modal-video";
import "../../videoModal.scss";
const QnaCard = ({ q }) => {
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
          ভিডিও দেখুন
          <HiOutlinePlay size={24} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default QnaCard;
