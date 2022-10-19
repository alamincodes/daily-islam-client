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
    setIsLoading(true)
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    

    fetch(
      `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${long}&method=1&school=1`
    )
      .then((res) => res.json())
      .then((json) => {
        setTimings(json.data.timings);
        setIsLoading(false)
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

  return (
    <div>
      {/* --------------- */}
      <h2 className="text-center my-3 text-[17px] font-semibold"><span className="bg-gradient-to-r from-[#f2f3e2] via-[#b2e5f8] to-[#f4b3ef] text-black rounded-full px-16">নামাজের সময়</span></h2>
      {/* ---------- */}
      {timings && (
        <div className="sm:text-[15px] md:text-2xl font-semibold text-gray-800">
          <div className="flex items-center py-5 justify-between  bg-gray-200 rounded-md">
            <h2 className="md:mx-20 sm:mx-4">ফজর</h2>{" "}
            <h2 className="md:mx-20 sm:mx-4">{get12hTimeStr(timings.Fajr)}</h2>
          </div>
          <div className="flex items-center py-5 my-2 justify-between  bg-gray-200 rounded-md">
            <h2 className="md:mx-20 sm:mx-4">যোহর</h2>{" "}
            <h2 className="md:mx-20 sm:mx-4">{get12hTimeStr(timings.Dhuhr)}</h2>
          </div>
          <div className="flex items-center py-5 my-2 justify-between bg-gray-200 rounded-md">
            <h2 className="md:mx-20 sm:mx-4">আসর</h2>{" "}
            <h2 className="md:mx-20 sm:mx-4">{get12hTimeStr(timings.Asr)}</h2>
          </div>
          <div className="flex items-center py-5 my-2 justify-between bg-gray-200 rounded-md">
            <h2 className="md:mx-20 sm:mx-4">মাগরিব</h2>{" "}
            <h2 className="md:mx-20 sm:mx-4">
              {get12hTimeStr(timings.Maghrib)}
            </h2>
          </div>
          <div className="flex items-center py-5 my-2 justify-between bg-gray-200 rounded-md">
            <h2 className="md:mx-20 sm:mx-4">এশা</h2>{" "}
            <h2 className="md:mx-20 sm:mx-4">{get12hTimeStr(timings.Isha)}</h2>
          </div>
          {/* --------------- */}
          <h2 className="text-center my-3 text-[17px] font-semibold"><span className="bg-gradient-to-r from-[#f2f3e2] via-[#b2e5f8] to-[#f4b3ef] text-black rounded-full px-7">সূর্যোদয় এবং সূর্যাস্তের সময়</span></h2>
          {/* ------------------ */}
          <div className="flex items-center py-5 my-2 justify-between  bg-gray-200 rounded-md">
            <h2 className="md:mx-20 sm:mx-4">সূর্যোদয়</h2>{" "}
            <h2 className="md:mx-20 sm:mx-4">
              {get12hTimeStr(timings.Sunrise)}
            </h2>
          </div>
          <div className="flex items-center py-5 my-2 justify-between  bg-gray-200  rounded-md">
            <h2 className="md:mx-20 sm:mx-4">সূর্যাস্ত</h2>{" "}
            <h2 className="md:mx-20 sm:mx-4">
              {get12hTimeStr(timings.Sunset)}
            </h2>
          </div>
          <div className="flex items-center py-5 my-2 justify-between  bg-gray-200  rounded-md">
            <h2 className="md:mx-20 sm:mx-4 ">রাতের প্রথম তৃতীয়ার্ধ</h2>{" "}
            <h2 className="md:mx-20 sm:mx-4">
              {get12hTimeStr(timings.Firstthird)}
            </h2>
          </div>
          <div className="flex items-center py-5 my-2 justify-between  bg-gray-200 rounded-md">
            <h2 className="md:mx-20 sm:mx-4">মধ্যরাত</h2>{" "}
            <h2 className="md:mx-20 sm:mx-4">
              {get12hTimeStr(timings.Midnight)}
            </h2>
          </div>
          <div className="flex items-center py-5 my-2 justify-between  bg-gray-200 rounded-md">
            <h2 className="md:mx-20 sm:mx-4 ">রাতের শেষ তৃতীয়ার্ধ</h2>{" "}
            <h2 className="md:mx-20 sm:mx-4">
              {get12hTimeStr(timings.Lastthird)}
            </h2>
          </div>
          <div className="flex items-center py-5 my-2 justify-between  bg-gray-200 rounded-md">
            <h2 className="md:mx-20 sm:mx-4">সেহরির শেষ সময়</h2>{" "}
            <h2 className="md:mx-20 sm:mx-4">{get12hTimeStr(timings.Imsak)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default NamajTime;
