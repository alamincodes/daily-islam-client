import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

import Logo from "../Images/icons/logo.svg";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  // navbar scroll and change color *start*
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 40) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  // navbar scroll and change color *end*

  //  active navLink start
  const activeLink = "bg-rose-600 rounded-sm text-white";
  const normalLink = "";
  // active navLink end



  const navbarNames = [
    // { name: "হোম", link: "/" },
    { id: 1, name: "নামাজ", link: "/namaj" },
    { id: 2, name: "দোয়া", link: "/duya" },
    { id: 3, name: "যিক্‌র", link: "/jikir" },
    { id: 4, name: "হাদিস", link: "/hadis" },
    { id: 5, name: "আল্লাহর নাম", link: "/allah" },
  ];

  return (
    <div
      className={
        color
          ? " w-full md:h-[70px] sm:h-[80px] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg fixed z-20"
          : "w-full md:h-[90px] sm:h-[80px] fixed z-20"
      }
    >
      <div className=" max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        {/* nav logo */}
        <NavLink to="/">
          <div className="select-none text-black ">
            <h1
              className={
                color
                  ? "md:text-3xl sm:text-2xl font-bold text-white flex items-center bg-black px-5 rounded-lg"
                  : "md:text-3xl sm:text-2xl font-bold text-white flex items-center"
              }
            >
              {" "}
              <span>DAILY</span>{" "}
              <img src={Logo} draggable="false" className="w-12" alt="" />
              <span>ISLAM</span>
            </h1>
          </div>
        </NavLink>
        {/* top nav */}
        <div className="hidden md:flex">
          <ul className="flex text-white items-center cursor-pointer gap-2">
            <NavLink to="/">
              {" "}
              <li
                className={
                  color
                    ? " hover:bg-rose-600 rounded-sm  text-black px-4 hover:text-white"
                    : "hover:bg-rose-600 rounded-sm  text-white  px-4 hover:text-white"
                }
              >
                হোম
              </li>
            </NavLink>
            {/* navbar start namaj route */}
            {navbarNames.map((navName) => (
              <NavLink
                key={navName.id}
                to={navName.link}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                <li
                  className={
                    color
                      ? "hover:bg-rose-600 rounded-sm  text-black px-4 hover:text-white"
                      : "hover:bg-rose-600 rounded-sm text-white  px-4 hover:text-white"
                  }
                >
                  {navName.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Hamburger menu */}

        <div onClick={handleNav} className="block md:hidden lg:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <AiOutlineMenu size={30} className="text-white" />
          )}
        </div>

        {/* Mobile menu */}
        <div
          className={
            nav
              ? " w-full bg-black text-white absolute top-[80px] left-0 flex justify-center text-center md:hidden"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <Link to="/">
              <li className="hover:bg-white hover:text-black rounded-lg p-4 my-1">
                হোম
              </li>
            </Link>
            <Link to="/namaj">
              <li className="hover:bg-white hover:text-black rounded-lg p-4">
                নামাজ
              </li>
            </Link>
            <Link to="/duya">
              <li className="hover:bg-white hover:text-black rounded-lg p-4">
                {" "}
                দোয়া
              </li>
            </Link>{" "}
            <Link to="/jikir">
              <li className="hover:bg-white hover:text-black rounded-lg p-4">
                যিক্‌র
              </li>
            </Link>
            <Link to="/hadis">
              <li className="hover:bg-white hover:text-black rounded-lg p-4">
                হাদিস
              </li>
            </Link>
            <Link to="/sura">
              <li className="hover:bg-white hover:text-black rounded-lg p-4">
                {" "}
                সূরা
              </li>
            </Link>
            <Link to="/allah">
              <li className="hover:bg-white hover:text-black mb-1 rounded-lg p-4">
                {" "}
                আল্লাহর নাম
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
