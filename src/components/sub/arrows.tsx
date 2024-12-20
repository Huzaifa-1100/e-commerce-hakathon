import React from "react";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";

const Arrows = () => {
  return (
    <div className="flex gap-2">
      <div className="rounded-full bg-secondary hover:bg-secondary2 hover:text-secondary text-3xl p-1 h-[46px] w-[46px] cursor-pointer transition-all duration-500 ">
        <IoArrowBackSharp className="mx-auto my-1" />
      </div>
      <div className="rounded-full bg-secondary hover:bg-secondary2 hover:text-secondary text-3xl p-1 h-[46px] w-[46px] cursor-pointer transition-all duration-500">
        <IoArrowForwardSharp className="mx-auto my-1" />
      </div>
    </div>
  );
};

export default Arrows;
