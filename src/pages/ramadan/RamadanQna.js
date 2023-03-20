import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import QnaCard from "./QnaCard";

const RamadanQna = () => {
  const [qna, setQna] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://daily-islam-server.vercel.app/ramadanqna")
      .then((res) => res.json())
      .then((data) => {
        setQna(data);
        setIsLoading(false);
        console.log(data);
      });
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
      {qna.map((q) => (
        <QnaCard key={q._id} q={q} />
      ))}
    </div>
  );
};

export default RamadanQna;
