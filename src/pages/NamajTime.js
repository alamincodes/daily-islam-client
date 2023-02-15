import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "./Loading";

const NamajTime = () => {
  const [timings, setTimings] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
      alert(
        "আপনার ডিভাইসটি জিও-লোকেশন সাপোর্ট করছে না, যা আমাদের সার্ভিসের জন্য প্রযোজ্য।"
      );
    }
  }, []);

  function geoSuccess(position) {
    setIsLoading(true);
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    fetch(
      `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${long}&method=1&school=1`
    )
      .then((res) => res.json())
      .then((json) => {
        setTimings(json.data.timings);
        setIsLoading(false);
      });
  }

  if(isLoading){
   return <Loading/>
  }

  function geoError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        break;
    }
  }

  function get12hTimeStr(oldTimeStr) {
    return new Date("1970-01-01T" + oldTimeStr + "Z").toLocaleTimeString(
      "en-US",
      {
        timeZone: "UTC",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
      }
    );
  }
  const finalEnglishToBanglaNumber = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };

  String.prototype.getDigitBanglaFromEnglish = function () {
    let retStr = this;
    for (const x in finalEnglishToBanglaNumber) {
      retStr = retStr.replace(
        new RegExp(x, "g"),
        finalEnglishToBanglaNumber[x]
      );
    }
    return retStr;
  };
  return (
    <div>
      {/* --------------- */}
      <h2 className="md:text-center sm:text-start my-3 text-[20px] font-semibold text-[#38BDF8]">
        নামাজের সময়
      </h2>
      {/* ---------- */}

      <div className="sm:text-[18px] md:text-2xl font-semibold">
        <div className="flex items-center py-5 justify-between text-white bg-slate-800/[0.6] rounded-md">
          <h2 className="md:mx-20 sm:mx-4">ফজর</h2>{" "}
          {timings && (
            <h2 className="md:mx-20 sm:mx-4 tracking-[0.3rem]">
              {get12hTimeStr(timings.Fajr).getDigitBanglaFromEnglish()}
            </h2>
          )}
        </div>
        <div className="flex items-center py-5 my-2 justify-between  text-white bg-slate-800/[0.6] rounded-md">
          <h2 className="md:mx-20 sm:mx-4">যোহর</h2>{" "}
          {timings && (
            <h2 className="md:mx-20 sm:mx-4 tracking-[0.3rem]">
              {get12hTimeStr(timings.Dhuhr).getDigitBanglaFromEnglish()}
            </h2>
          )}
        </div>
        <div className="flex items-center py-5 my-2 justify-between text-white bg-slate-800/[0.6] rounded-md">
          <h2 className="md:mx-20 sm:mx-4">আসর</h2>{" "}
          {timings && (
            <h2 className="md:mx-20 sm:mx-4 tracking-[0.3rem]">
              {get12hTimeStr(timings.Asr).getDigitBanglaFromEnglish()}
            </h2>
          )}
        </div>
        <div className="flex items-center py-5 my-2 justify-between text-white bg-slate-800/[0.6] rounded-md">
          <h2 className="md:mx-20 sm:mx-4">মাগরিব</h2>{" "}
          {timings && (
            <h2 className="md:mx-20 sm:mx-4 tracking-[0.3rem]">
              {get12hTimeStr(timings.Maghrib).getDigitBanglaFromEnglish()}
            </h2>
          )}
        </div>
        <div className="flex items-center py-5 my-2 justify-between text-white bg-slate-800/[0.6] rounded-md">
          <h2 className="md:mx-20 sm:mx-4">এশা</h2>{" "}
          {timings && (
            <h2 className="md:mx-20 sm:mx-4 tracking-[0.3rem] tracking-[0.3rem]">
              {get12hTimeStr(timings.Isha).getDigitBanglaFromEnglish()}
            </h2>
          )}
        </div>
        {/* --------------- */}
        <h2 className="md:text-center sm:text-start my-3 text-[20px] font-semibold text-[#38BDF8]">
          সূর্যোদয় এবং সূর্যাস্তের সময়
        </h2>
        {/* ------------------ */}
        <div className="flex items-center py-5 my-2 justify-between  text-white bg-slate-800/[0.6] rounded-md">
          <h2 className="md:mx-20 sm:mx-4">সূর্যোদয়</h2>{" "}
          {timings && (
            <h2 className="md:mx-20 sm:mx-4 tracking-[0.3rem]">
              {get12hTimeStr(timings.Sunrise).getDigitBanglaFromEnglish()}
            </h2>
          )}
        </div>
        <div className="flex items-center py-5 my-2 justify-between  text-white bg-slate-800/[0.6]  rounded-md">
          <h2 className="md:mx-20 sm:mx-4">সূর্যাস্ত</h2>{" "}
          {timings && (
            <h2 className="md:mx-20 sm:mx-4 tracking-[0.3rem]">
              {get12hTimeStr(timings.Sunset).getDigitBanglaFromEnglish()}
            </h2>
          )}
        </div>
        {/* --------------- */}
        <h2 className="md:text-center sm:text-start my-3 text-[20px] font-semibold text-[#38BDF8]">
          রাতের বিভিন্ন অংশ
        </h2>
        {/* ------------------ */}
        <div className="flex items-center py-5 my-2 justify-between  text-white bg-slate-800/[0.6]  rounded-md">
          <h2 className="md:mx-20 sm:mx-4">রাতের প্রথম তৃতীয়ার্ধ</h2>{" "}
          {timings && (
            <h2 className="md:mx-20 sm:mx-4 tracking-[0.3rem]">
              {get12hTimeStr(timings.Firstthird).getDigitBanglaFromEnglish()}
            </h2>
          )}
        </div>
        <div className="flex items-center py-5 my-2 justify-between  text-white bg-slate-800/[0.6] rounded-md">
          <h2 className="md:mx-20 sm:mx-4">মধ্যরাত</h2>{" "}
          {timings && (
            <h2 className="md:mx-20 sm:mx-4 tracking-[0.3rem]">
              {get12hTimeStr(timings.Midnight).getDigitBanglaFromEnglish()}
            </h2>
          )}
        </div>
        <div className="flex items-center py-5 my-2 justify-between  text-white bg-slate-800/[0.6] rounded-md">
          <h2 className="md:mx-20 sm:mx-4 ">রাতের শেষ তৃতীয়ার্ধ</h2>{" "}
          {timings && (
            <h2 className="md:mx-20 sm:mx-4 tracking-[0.3rem]">
              {get12hTimeStr(timings.Lastthird).getDigitBanglaFromEnglish()}
            </h2>
          )}
        </div>
        <div className="flex items-center py-5 my-2 justify-between  text-white bg-slate-800/[0.6] rounded-md">
          <h2 className="md:mx-20 sm:mx-4">সেহরির শেষ সময়</h2>{" "}
          {timings && (
            <h2 className="md:mx-20 sm:mx-4 tracking-[0.3rem]">
              {get12hTimeStr(timings.Imsak).getDigitBanglaFromEnglish()}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default NamajTime;
