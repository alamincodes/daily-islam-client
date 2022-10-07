import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
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
      {/* ---------button-------- */}
      <div className="flex justify-between ">
        <Link to="/duya"
        className="border px-5 py-1 hover:text-white hover:bg-black"
        >
          <h4>
            <FontAwesomeIcon icon={faArrowLeft} /> <span className="mx-4">দোয়া</span>
          </h4>
        </Link>
        <Link to="/hadis"
        className="border px-5 py-1 hover:text-white hover:bg-black"
        >
          <h4>
            <span className="mx-4">হাদিস</span> <FontAwesomeIcon icon={faArrowRight} />
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Jikir;
