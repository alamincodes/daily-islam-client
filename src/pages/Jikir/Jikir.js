import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Jikir = () => {
  const activeLink = "bg-[#38BDF8] text-white";
  const normalLink = "";
  const jikirDay = [
    // { time: "সকাল", link: "/jikir" },
    { id: 1, time: "সন্ধ্যা", link: "evening" },
    { id: 2, time: "রাত", link: "night" },
  ];
  return (
    <div>
      <div className="flex py-5 justify-center">
        <div className="flex border-2 border-white rounded-full overflow-hidden">
          <NavLink to="/jikir">
            <h3 className=" hover:bg-[#38BDF8] hover:text-white px-3"> সকাল</h3>
          </NavLink>
          {jikirDay.map((jikirTime) => (
            <NavLink
              key={jikirTime.id}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to={jikirTime.link}
            >
              <h3 className=" hover:bg-[#38BDF8] hover:z-[0] border-l-2 border-white hover:text-white px-5 ">
                {jikirTime.time}
              </h3>
            </NavLink>
          ))}{" "}
        </div>
      </div>
      <Outlet />
      {/* ---------button-------- */}
      <div className="flex justify-between ">
        <Link
          to="/duya"
          className="border-2 border-[#38BDF8] text-[#38BDF8] rounded-full md:px-5 sm:px-3 py-1"
        >
          <h4>
            <FontAwesomeIcon icon={faArrowLeft} />{" "}
            <span className="mx-4">দোয়া</span>
          </h4>
        </Link>
        <Link
          to="/hadis"
          className="border-2 border-[#38BDF8] text-[#38BDF8] rounded-full md:px-5 sm:px-3 py-1"
        >
          <h4>
            <span className="mx-4">হাদিস</span>{" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default Jikir;
