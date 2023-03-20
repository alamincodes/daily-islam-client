import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "../videoModal.scss";
import { HiOutlinePlay } from "react-icons/hi";
const ModalVideos = ({ video }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex justify-between text-[#38BDF8] items-center bg-[#0B1120] py-4 rounded-lg px-2 md:text-2xl sm:text-[18px] my-3">
      <h3 className="pl-2">{video.name}</h3>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={video.link}
        onClose={() => setOpen(false)}
      />
      <button
        className="text-[17px] flex items-center bg-[#38bdf8] text-white px-4 py-2 rounded-[6px]"
        onClick={() => setOpen(true)}
      >
        ভিডিও
        <HiOutlinePlay className="ml-1" size={22} />
      </button>
    </div>
  );
};

export default ModalVideos;
