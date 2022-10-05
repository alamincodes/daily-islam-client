import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Jikir = () => {
  const activeLink = "bg-[#FF284F] z-[-1] text-white";
  const normalLink = "";
  const jikirDay = [
    // { time: "সকাল", link: "" },
    { time: "সন্ধ্যা", link: "evening" },
    { time: "রাত", link: "night" },
  ];
  return (
    <div>
      <div className="flex  border-b-4 border-[#FF284F] py-5 ">
        <div className="flex border rounded-full overflow-hidden">
        <NavLink to="/jikir">
          <h3 className=" hover:bg-[#FF284F] hover:text-white px-3">
            {" "}
            সকাল
          </h3>
        </NavLink>
        {jikirDay.map((jikirTime) => (
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            to={jikirTime.link}
          >
            <h3 className=" hover:bg-[#FF284F] hover:z-[0] border-l hover:text-white px-5 ">
              {jikirTime.time}
            </h3>
          </NavLink>
        ))}{" "}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Jikir;
