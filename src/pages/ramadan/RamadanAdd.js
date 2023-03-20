import React from "react";

const RamadanAdd = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const arabic = form.arabic.value;
    const bangla = form.bangla.value;
    const meaning = form.meaning.value;
    const payerName = form.payerName.value;
    const payersInfo = { payerName, arabic, bangla, meaning };
    console.log(arabic, bangla, meaning);
    fetch("https://daily-islam-server.vercel.app/ramadanPrayers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payersInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        console.log(data);
      });
  };
  return (
    <div className="mt-[100px] max-w-2xl mx-auto">
      <form className="space-y-3  flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full"
          name="payerName"
          placeholder="দোয়ার নাম"
        />

        <textarea
          type="text"
          className="w-full"
          name="arabic"
          placeholder="আরবি উচ্চারন"
        />
        <textarea
          type="text"
          className="w-full"
          name="bangla"
          placeholder="বাংলা উচ্চারন"
        />
        <textarea
          type="text"
          className="w-full"
          name="meaning"
          placeholder="অর্থ"
        />
        <button type="submit" className="bg-[#38bdf8] p-2 w-full rounded-sm">
          অ্যাড করুন
        </button>
      </form>
    </div>
  );
};

export default RamadanAdd;