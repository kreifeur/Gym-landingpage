"use client";
import React, { useState } from "react";
import image from "../../../public/QA+RED.png";
import { IoLocation } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
const Navbar = () => {
  const [menu, setMenu] = useState("hidden");
  return (
    <div className="uppercase tracking-wider sticky top-0 z-[100]">
      <div className="h-[7vh] bg-gray-100 px-[4vh] flex items-center justify-between font-bold">
        <div className="flex items-center gap-1">
          {" "}
          <IoLocation className="text-md" /> Qatar
        </div>
        <div className="flex items-center gap-1 ">
          own a gym <FaArrowRightLong className="text-md text-[#d20a0a]" />
        </div>
      </div>

      <div className="h-[14vh] flex items-center   border-b justify-between bg-white">
        <div className="h-[10vh] px-[4vh] z-[3]">
          <Image className="h-full" width={100} height={100} src={image.src} />
        </div>
        <ul className="flex gap-7 items-center h-full">
          <div className="sm:flex hidden gap-7 items-center h-full ">
            <li>Locations</li>
            <li>Classes</li>
            <li>coaching</li>
            <li>about</li>
            <li>memberships & programs</li>
          </div>
          <div className="flex h-full">
            <li className="sm:px-6 px-4 bg-[#d20a0a] h-full flex items-center font-bold text-white">
              free pass
            </li>
            <li className="sm:px-10 px-4 bg-black h-full flex items-center font-bold text-white sm:hidden  z-[3]">
              {menu == "hidden" ? (
                <FiMenu onClick={()=>setMenu('fixed')}  className="text-3xl" />
              ) : (
                
                <MdClose onClick={()=>setMenu('hidden')} className="text-3xl" /> 
              )}
            </li>
          </div>
        </ul>
      </div>

      <ul className={`${menu} h-[100vh] w-full bg-black flex flex-col items-center justify-center text-white gap-5 inset-0 z-[2] sm:hidden`} >
        <li>Locations</li>
        <li>Classes</li>
        <li>coaching</li>
        <li>about</li>
        <li>memberships & programs</li>
      </ul>
    </div>
  );
};

export default Navbar;
