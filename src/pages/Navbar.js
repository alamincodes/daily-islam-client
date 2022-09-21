import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from '../Images/icons/logo.svg';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-[90px] bg-white sticky shadow-md">
      <div className=" max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <Link to="/"><div className="flex justify-center items-center">
          <h1 className="text-black"> DAILY ISLAM</h1>
          <img src={Logo} className="w-12" alt="" />
        </div></Link>
        <div className="hidden md:flex">
          <ul className="flex text-black items-center cursor-pointer">
          <li className="hover:bg-black hover:text-white rounded-lg">
             <Link to="/">হোম</Link>
            </li>
            <li className="hover:bg-black hover:text-white rounded-lg">
             <Link to="/namaj">নামাজ</Link>
            </li>
            <li className="hover:bg-black hover:text-white rounded-lg"> <Link to="/duya">দোয়া</Link></li>
            <li className="hover:bg-black hover:text-white rounded-lg">
            <Link to="/jikir">যিকির</Link>
            </li>
            <li className="hover:bg-black hover:text-white rounded-lg">
            <Link to="/hadis">হাদিস</Link>
            </li>
            <li className="hover:bg-black hover:text-white rounded-lg"> <Link to="/sura">সূরা</Link></li>
            <li className="hover:bg-black hover:text-white rounded-lg"> <Link to="/allah">আল্লাহর নাম</Link></li>
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
          <li className="hover:bg-white hover:text-black rounded-lg">
             <Link to="/">হোম</Link>
            </li>
            <li className="hover:bg-white hover:text-black rounded-lg">
             <Link to="/namaj">নামাজ</Link>
            </li>
            <li className="hover:bg-white hover:text-black rounded-lg"> <Link to="/duya">দোয়া</Link></li>
            <li className="hover:bg-white hover:text-black rounded-lg">
            <Link to="/jikir">যিকির</Link>
            </li>
            <li className="hover:bg-white hover:text-black rounded-lg">
            <Link to="/hadis">হাদিস</Link>
            </li>
            <li className="hover:bg-white hover:text-black rounded-lg"> <Link to="/sura">সূরা</Link></li>
            <li className="hover:bg-white hover:text-black rounded-lg"> <Link to="/allah">আল্লাহর নাম</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
