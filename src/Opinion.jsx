import React from "react";
import { FiSend } from "react-icons/fi";
const Opinion = () => {
  return (
    <section>

      <div className="text-black flex flex-col justify-center items-center">
      <h2 className="text-[1.875rem] sm:text-2xl font-bold text-white my-10">
          {" "}
          আপানার <span className="text-[#38BDF8] ">
            মতামত
          </span>{" "}
          দিন
        </h2>
        <form
          action="https://formsubmit.co/mdalamincodes@gmail.com"
          method="POST"
        >
          {/* <div className="flex flex-col"> */}
          <div className="flex flex-col">
            <label className="text-white text-sm"> আপানার ইমেল দিন *</label>
            <input
              type="email"
              placeholder="আপানার ইমেল দিন "
              className="my-3"
              name="email"
              id=""
              required
            />
            {/* </div> */}
            <label className="text-white text-sm"> আপনার মতামত দিন *</label>
            <textarea
              className="my-3"
              placeholder="আপনার মতামত দিন"
              name="opinion"
              id=""
              cols="10"
              rows="2"
              required
            ></textarea>
            <input type="hidden" name="_next" value="https://dailyislam.xyz/thankyou"></input>
            <input type="hidden" name="_captcha" value="false"></input>
          </div>
          <button
            type="submit"
            className="text-white text-[20px] bg-[#38bdf8] flex items-center px-6 py-2 rounded-md"
          >
            Submit <FiSend className="send-icon" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Opinion;
