import React from 'react';
import eveningJikir from "../../eveningJikir.json"
import Sondha from './Sondha';
const JikirEvening = () => {
    return (
      <div>
      <h2 className="text-center bg-[#009000] text-white rounded-full py-1">
        সন্ধাবেলার যিক্‌র
      </h2>
     {eveningJikir.map((evening, index) => (
      <Sondha key={evening.id} evening={evening} index={index}/>
     ))}
    </div>
    );
};

export default JikirEvening;