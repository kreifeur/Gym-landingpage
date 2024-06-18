import React from "react";
import image from "../../../public/QA+RED.png";
import { IoLocation } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
const Navbar = () => {
  return (

    <div className="uppercase tracking-wider">
      <div className="h-[7vh] bg-gray-100 px-[4vh] flex items-center justify-between font-bold">
        <div className="flex items-center gap-1"> <IoLocation className="text-md" /> Qatar</div>
        <div className="flex items-center gap-1 ">
            own a gym <FaArrowRightLong  className="text-md text-[#d20a0a]"/>
        </div>
      </div>

      <div className="h-[14vh] sm:flex items-center   border-b justify-between hidden">
        <div className="h-[10vh] px-[4vh]">
          <Image className="h-full" width={100} height={100} src={image.src}  />
        </div>
        <ul className="flex gap-7 items-center h-full">
          <li>Locations</li>
          <li>Classes</li>
          <li>coaching</li>
          <li>about</li>
          <li>memberships & programs</li>
          <li className="px-6 bg-[#d20a0a] h-full flex items-center font-bold text-white">free pass</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
