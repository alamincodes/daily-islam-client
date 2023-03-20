import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    console.log(password);

    if (password === "") {
      setError("পাসওয়ার্ড দিন*");
      return;
    }
    if (password === "alamin2003") {
      navigate("/admin/login/success/page");
      setError("");
      console.log("yes");
    } else {
      setError("আপনার পাসওয়ার্ড টি ভুল.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-48 flex flex-col justify-center items-center">
      <h2 className="text-3xl text-center font-bold text-[#38bdf8]">
        অ্যাডমিন পাসওয়ার্ড দিয়ে লগিন করুন
      </h2>
      <form className="flex items-center relative mt-5" onSubmit={handleSubmit}>
        <input type="password" placeholder="Enter password" name="password" />

        <button className="bg-[#38bdf8] absolute right-0 bottom-[0.5px] py-[10px] px-6 rounded-[2px] mt-3">
          Login
        </button>
      </form>
      <p className="text-red-500 text-sm font-semibold mt-4">{error}</p>
    </div>
  );
};

export default Admin;
