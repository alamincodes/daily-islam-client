import React from "react";

const RamadanQnaAdd = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const qnaName = form.qnaName.value;
    const link = form.link.value;

    const qnaInfo = { qnaName, link };
    console.log(qnaName, link);
    fetch("https://daily-islam-server.vercel.app/ramadanqna", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(qnaInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
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

        <button type="submit" className="bg-[#38bdf8] p-2 w-full rounded-sm">
          অ্যাড করুন
        </button>
      </form>
    </div>
  );
};

export default RamadanQnaAdd;
