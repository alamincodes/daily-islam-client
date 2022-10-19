import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const NamajTime = () => {
  const [timings, setTimings] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
      alert("আপনার ডিভাইসটি জিও-লোকেশন সাপোর্ট করছে না, যা আমাদের সার্ভিসের জন্য প্রযোজ্য।");
    }
  }, []);

  function geoSuccess(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${long}&method=1&school=1`)
      .then((res) => res.json())
      .then((json) => {
        setTimings(json.data.timings);
      });
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
    return new Date("1970-01-01T" + oldTimeStr + "Z").toLocaleTimeString("en-US", {
      timeZone: "UTC",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    });
  }

  return (
    <div>
      <h2 className="text-center">নামাজের সময়</h2>
      {timings && (
        <div>
          <div className="flex items-center justify-evenly bg-gray-200 text-black rounded-md">
            <h2>ফজর</h2> <h2>{get12hTimeStr(timings.Fajr)}</h2>
          </div>
          <div className="flex items-center justify-evenly bg-gray-200 text-black rounded-md">
            <h2>যোহর</h2> <h2>{get12hTimeStr(timings.Dhuhr)}</h2>
          </div>
          <div className="flex items-center justify-evenly bg-gray-200 text-black rounded-md">
            <h2>আসর</h2> <h2>{get12hTimeStr(timings.Asr)}</h2>
          </div>
          <div className="flex items-center justify-evenly bg-gray-200 text-black rounded-md">
            <h2>মাগরিব</h2> <h2>{get12hTimeStr(timings.Maghrib)}</h2>
          </div>
          <div className="flex items-center justify-evenly bg-gray-200 text-black rounded-md">
            <h2>এশা</h2> <h2>{get12hTimeStr(timings.Isha)}</h2>
          </div>
          <div className="flex items-center justify-evenly bg-gray-200 text-black rounded-md">
            <h2>সূর্যোদয়</h2> <h2>{get12hTimeStr(timings.Sunrise)}</h2>
          </div>
          <div className="flex items-center justify-evenly bg-gray-200 text-black rounded-md">
            <h2>সূর্যাস্ত</h2> <h2>{get12hTimeStr(timings.Sunset)}</h2>
          </div>
          <div className="flex items-center justify-evenly bg-gray-200 text-black rounded-md">
            <h2>রাতের প্রথম তৃতীয়ার্ধ</h2> <h2>{get12hTimeStr(timings.Firstthird)}</h2>
          </div>
          <div className="flex items-center justify-evenly bg-gray-200 text-black rounded-md">
            <h2>মধ্যরাত</h2> <h2>{get12hTimeStr(timings.Midnight)}</h2>
          </div>
          <div className="flex items-center justify-evenly bg-gray-200 text-black rounded-md">
            <h2>রাতের শেষ তৃতীয়ার্ধ</h2> <h2>{get12hTimeStr(timings.Lastthird)}</h2>
          </div>
          <div className="flex items-center justify-evenly bg-gray-200 text-black rounded-md">
            <h2>সেহরির শেষ সময়</h2> <h2>{get12hTimeStr(timings.Imsak)}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default NamajTime;
