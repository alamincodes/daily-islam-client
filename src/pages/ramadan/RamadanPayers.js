import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "../Loading";
import PayerCard from "./PayerCard";

const RamadanPayers = () => {
  const [payers, setPayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://daily-islam-server.vercel.app/prayers")
      .then((res) => res.json())
      .then((data) => {
        setPayers(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="mt-[100px]">
      {payers.map((payer) => (
        <PayerCard key={payer._id} payer={payer} />
      ))}
    </div>
  );
};

export default RamadanPayers;
