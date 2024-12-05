import React from "react";
import { Input } from "./ui/input";
import { VscSend } from "react-icons/vsc";
import FooterContent from "./sub/footerContent";
import { AccoutData, QuickLink, SportsData } from "../../utils/data";
import Image from "next/image";
import {
  RiCopyrightLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiTwitterLine,
} from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-[440px] bg-button flex flex-col justify-between ">
      <div className="my-auto">
        <div className="wrapper h-[236px]  flex items-start justify-between ">
          {/* Exclusive */}
          <div className="text-text  space-y-6 ">
            <h1 className="inter-logo">Exclusive</h1>
            <FooterContent
              heading={"Subscribe"}
              descriptions={["Get 10% off your first order"]}
            />

            <div className="w-[217px] h-[48px] flex justify-between px-4 text-text rounded-md items-center border-[1.5px] ">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-6 poppins-regular w-[130px] focus:outline-none active:border-0 shadow-none focus:border-none"
              />
              <VscSend className="h-6 w-6" />
            </div>
          </div>
          {/* Support */}
          <div className="max-w-[175px]">
            <FooterContent heading={"Support"} descriptions={SportsData} />
          </div>

          {/* Account */}
          <FooterContent heading={"Account"} descriptions={AccoutData} />

          {/* Quick Link */}
          <FooterContent heading={"Quick Link"} descriptions={QuickLink} />

          {/* Download App */}
          <div>
            <FooterContent heading={"Download App"} />
            <p className="text-text poppins-medium opacity-70 text-[12px]">
              Save $3 with App New User Only
            </p>
            <div className="flex gap-2 mt-2">
              <div>
                <Image
                  src={"/footer/Qrcode1.png"}
                  alt={"QrCode"}
                  height={76}
                  width={76}
                />
              </div>
              <div>
                <Image
                  src={"/footer/GooglePlay.png"}
                  alt={"GooglePlay"}
                  height={30}
                  width={104}
                />
                <Image
                  src={"/footer/AppStore.png"}
                  alt={"AppStore"}
                  height={30}
                  width={104}
                />
              </div>
            </div>
            <div className="text-primary text-2xl gap-6 mt-6 flex">
              <RiFacebookLine />
              <RiTwitterLine />
              <FaInstagram />
              <RiLinkedinLine />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="text-primary opacity-40 border-t-[1px] text-center py-4 flex items-center justify-center gap-2 ">
        <RiCopyrightLine className="text-xl" />
        <p> Copyright Rimel 2022. All right reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
{
  /* <span className="text-2xl text-">{`©`}</span> */
}
