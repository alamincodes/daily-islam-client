import React, { useState } from "react";

const ZakatAdd = () => {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const qnaName = form.qnaName.value;
    const link = form.link.value;
    const qnaInfo = { qnaName, link };
    console.log(qnaName, link);

    if (qnaName === "") {
      setError("প্রশ্নের নাম লিখুন");
      return;
    }

    fetch("https://daily-islam-server.vercel.app/zakat", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(qnaInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        setError("");
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mt-[100px] max-w-2xl mx-auto">
      <form className="space-y-3  flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full"
          name="qnaName"
          placeholder="প্রশ্নের নাম"
        />

        <input
          type="text"
          className="w-full"
          name="link"
          placeholder="ভিডিওর লিঙ্ক"
        />
        <p className="text-sm text-red-500 font-bold">{error}</p>
        <button type="submit" className="bg-[#38bdf8] p-2 w-full rounded-sm">
          অ্যাড করুন
        </button>
      </form>
    </div>
  );
};

export default ZakatAdd;
