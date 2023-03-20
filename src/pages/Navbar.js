import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import newLogo from "../Images/newLogo.svg";
// import Logo from "../Images/icons/logo.svg";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  //  active navLink start
  const activeLink = "bg-[#38BDF8] rounded-sm text-white";
  const normalLink = "";
  // active navLink end

  const navbarNames = [
    // { id: 8, name: "হোম", link: "/" },
    { id: 1, name: "নামাজ", link: "/namaj" },
    { id: 2, name: "দোয়া", link: "/duya" },
    { id: 3, name: "যিক্‌র", link: "/jikir" },
    { id: 4, name: "হাদিস", link: "/hadis" },
    { id: 5, name: "কোরআন", link: "/quran" },
    { id: 6, name: "আল্লাহর নাম", link: "/allah" },
  ];
  // phone nav name and link
  const phoneNavbarNames = [
    { id: 8, name: "হোম", link: "/" },
    { id: 1, name: "নামাজ", link: "/namaj" },
    { id: 2, name: "দোয়া", link: "/duya" },
    { id: 3, name: "যিক্‌র", link: "/jikir" },
    { id: 4, name: "হাদিস", link: "/hadis" },
    { id: 5, name: "কোরআন", link: "/quran" },
    { id: 6, name: "আল্লাহর নাম", link: "/allah" },
  ];

  return (
    <div className="w-full bg-[#0B1120]/80 backdrop-blur-3xl transition-colors duration-500 border-b border-gray-600 md:h-[70px] sm:h-[80px] fixed z-20">
      <div className=" max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        {/* nav logo */}
        <NavLink to="/">
          <div>
            <img src={newLogo} className="h-20 w-20 bg-cover " alt="" />
          </div>
        </NavLink>
        {/* top nav */}
        <div className="hidden lg:flex">
          <ul className="flex text-white items-center cursor-pointer gap-2">
            <NavLink to="/">
              {" "}
              <li className="hover:bg-[#38BDF8] rounded-sm text-white px-4 hover:text-white">
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
                <li className="hover:bg-[#38BDF8] rounded-sm text-white px-4 hover:text-white">
                  {navName.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>

        {/* Hamburger menu */}

        <div onClick={handleNav} className="block lg:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-[#38BDF8]" />
          ) : (
            <AiOutlineMenu size={30} className="text-[#38BDF8]" />
          )}
        </div>

        {/* Mobile menu */}
        <div
          className={
            nav
              ? "w-[40%] md:w-[200px] rounded-bl-lg bg-gradient-to-r  from-[#121518] to-slate-800 duration-300 text-[15px] border-gray-600 text-white absolute md:top-[70px] top-[80px] right-0 flex justify-center text-center px-3 lg:hidden"
              : "absolute right-[-100%] top-[80px] duration-300"
          }
        >
          <ul>
            {phoneNavbarNames.map((navName) => {
              return (
                <Link to={navName.link} key={navName.id}>
                  <li
                    className="hover:text-[#38BDF8] rounded-lg p-2 my-2"
                    onClick={() => setNav(false)}
                  >
                    {navName.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
