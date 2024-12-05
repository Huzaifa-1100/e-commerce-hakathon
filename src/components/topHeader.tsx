import React from "react";
import { FaChevronDown } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="w-full h-[48px] bg-button text-text">
      <div className="wrapper h-full flex justify-between items-center">
        <div>
        </div>
        <div>
          <h2 className="poppins-regular">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <span className="underline poppins-semibold ml-2">ShopNow</span>
          </h2>
        </div>
        <div className="flex items-center gap-x-3 text-lg">
          <h2 className="poppins-regular">English</h2>
          <FaChevronDown />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
