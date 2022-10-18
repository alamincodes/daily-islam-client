import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const NamajTime = () => {
  const [fajrTime, setFajrTime] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
      alert(
        "It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it."
      );
    }
  }, []);

  function geoSuccess(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    fetch(
      `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${long}&method=1&school=1`
    )
      .then((res) => res.json())
      .then((json) => setFajrTime(json.data.timings.Fajr));
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
  return (
    <div>
      {/* {fajrTime && <h1>{fajrTime}</h1>} */}
      <h2 className="text-center">নামাজের সময়</h2>
      <div className="flex items-center justify-evenly bg-gray-200 text-black rounded-md">
        <h2>ফজর</h2> <h2>{fajrTime}</h2>
      </div>
    </div>
  );
};

export default NamajTime;
