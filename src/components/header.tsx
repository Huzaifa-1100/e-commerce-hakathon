import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <div className="wrapper flex justify-between items-center mt-[44px]">
        {/* left side /logo */}
        <div>
          <h1 className="inter-logo text-text2">Exclusive</h1>
        </div>
        {/* center side / pages */}
        <div>
          <ul className="poppins-regular flex text-text2 gap-x-12">
            <li>
              <Link href={"#"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>Contact</Link>
            </li>
            <li>
              <Link href={"#"}>About</Link>
            </li>
            <li>
              <Link href={"#"}>Sign Up</Link>
            </li>
          </ul>
        </div>
        {/* right side */}
        <div className="flex text-3xl items-center gap-4">
          <div className="w-[243px] h-[38px] flex bg-secondary rounded-md items-center">
            <Input
              type="search"
              placeholder="What are you looking for?"
              className="h-6 poppins-regular focus:outline-none active:border-0 shadow-none focus:border-none"
            />
            <CiSearch className="h-6 w-6" />
          </div>
          <CiHeart />
          <IoCartOutline />
        </div>
      </div>
      <div className="w-full h-[1px] bg-button opacity-30 mt-[22px]"></div>
    </header>
  );
};

export default Header;
