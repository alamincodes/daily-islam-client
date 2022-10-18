import React from 'react';
import eveningJikir from "../../eveningJikir.json"
import Sondha from './Sondha';
const JikirEvening = () => {
    return (
      <div>
      <h2 className="text-center bg-[#009000] text-white py-1">
        সন্ধাবেলার যিক্‌র
      </h2>
     {eveningJikir.map(evening => (
      <Sondha key={evening.id} evening={evening}/>
     ))}
    </div>
    );
};

export default JikirEvening;