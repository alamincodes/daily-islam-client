import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Jikir = () => {
  const activeLink = "bg-[#009000] z-[-1] text-white";
  const normalLink = "";
  const jikirDay = [
    // { time: "সকাল", link: "/jikir" },
    { id: 1, time: "সন্ধ্যা", link: "evening" },
    { id: 2, time: "রাত", link: "night" },
  ];
  return (
    <div>
      <div className="flex py-5 justify-center">
        <div className="flex  border border-white rounded-full overflow-hidden">
          <NavLink to="/jikir">
            <h3 className=" hover:bg-[#009000] hover:text-white px-3"> সকাল</h3>
          </NavLink>
          {jikirDay.map((jikirTime) => (
            <NavLink
              key={jikirTime.id}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              to={jikirTime.link}
            >
              <h3 className=" hover:bg-[#009000] hover:z-[0] border-l border-white hover:text-white px-5 ">
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
          className="border md:px-5 sm:px-3 py-1 hover:text-white hover:bg-black"
        >
          <h4>
            <FontAwesomeIcon icon={faArrowLeft} />{" "}
            <span className="mx-4">দোয়া</span>
          </h4>
        </Link>
        <Link
          to="/hadis"
          className="border md:px-5 sm:px-3 py-1 hover:text-white hover:bg-black"
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
