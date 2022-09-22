import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../Images/icons/logo.svg";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-white sticky shadow-md">
      <div className=" max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <Link to="/">
          <div className="flex justify-center items-center">
            <h1 className="text-black"> DAILY ISLAM</h1>
            <img src={Logo} className="w-12" alt="" />
          </div>
        </Link>
        <div className="hidden md:flex">
          <ul className="flex text-black items-center cursor-pointer">
            <Link to="/">
              <li className="hover:bg-black hover:text-white rounded-lg">
                হোম
              </li>
            </Link>
            <Link to="/namaj">
              <li className="hover:bg-black hover:text-white rounded-lg">
                নামাজ
              </li>
            </Link>
            <Link to="/duya">
              <li className="hover:bg-black hover:text-white rounded-lg">
                দোয়া
              </li>
            </Link>
            <Link to="/jikir">
              <li className="hover:bg-black hover:text-white rounded-lg">
                যিকির
              </li>
            </Link>
            <Link to="/hadis">
              <li className="hover:bg-black hover:text-white rounded-lg">
                হাদিস
              </li>
            </Link>
            <Link to="/sura">
              <li className="hover:bg-black hover:text-white rounded-lg">
                {" "}
                সূরা
              </li>
            </Link>
            <Link to="/allah">
              <li className="hover:bg-black hover:text-white rounded-lg">
                {" "}
                আল্লাহর নাম
              </li>
            </Link>
          </ul>
        </div>

        {/* Hamburger menu */}

        <div onClick={handleNav} className="block md:hidden lg:hidden">
          {nav ? (
            <AiOutlineClose size={30} className="text-black" />
          ) : (
            <AiOutlineMenu size={30} className="text-black" />
          )}
        </div>

        {/* Mobile menu */}
        <div
          className={
            nav
              ? " w-full bg-black text-white absolute top-[90px] left-0 flex justify-center text-center"
              : "absolute left-[-100%]"
          }
        >
          <ul>
            <Link to="/">
              <li className="hover:bg-white hover:text-black rounded-lg">
                হোম
              </li>
            </Link>
            <Link to="/namaj">
              <li className="hover:bg-white hover:text-black rounded-lg">
                নামাজ
              </li>
            </Link>
            <Link to="/duya">
              <li className="hover:bg-white hover:text-black rounded-lg">
                {" "}
                দোয়া
              </li>
            </Link>{" "}
            <Link to="/jikir">
              <li className="hover:bg-white hover:text-black rounded-lg">
                যিকির
              </li>
            </Link>
            <Link to="/hadis">
              <li className="hover:bg-white hover:text-black rounded-lg">
                হাদিস
              </li>
            </Link>
            <Link to="/sura">
              <li className="hover:bg-white hover:text-black rounded-lg">
                {" "}
                সূরা
              </li>
            </Link>
            <Link to="/allah">
              <li className="hover:bg-white hover:text-black rounded-lg">
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
