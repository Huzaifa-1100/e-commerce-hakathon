import Image from "next/image";
import * as React from "react";
import { TimerDisplay } from "./sub/timeDisplay";
// import { TimerDisplay } from "./TimerDisplay";

const timerItems = [
  { value: "23", label: "Hours" },
  { value: "05", label: "Days" },
  { value: "59", label: "Minutes" },
  { value: "35", label: "Seconds" },
];

export const MusicEnhancer: React.FC = () => {
  return (
    <div className="wrapper mt-32">
      <div className="overflow-hidden px-12 py-10 bg-black max-md:px-5">
        <div className="flex gap-5 max-lg:flex-col items-center">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-lg:w-full">
            <div className="flex flex-col items-start self-stretch my-auto w-full text-text max-md:mt-10 max-md:max-w-full">
              <div className="text-base font-semibold leading-none text-button1">
                Categories
              </div>
              <div className="self-stretch mt-8 text-5xl font-semibold tracking-widest leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
                Enhance Your Music Experience
              </div>
              <TimerDisplay items={timerItems} />
              <button className="gap-2.5 self-stretch md:w-fit px-12 py-4 mt-10 text-base font-medium bg-button1 rounded max-md:px-5">
                Buy Now!
              </button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-lg:w-full relative items-center">
              <div className="blur-[150px] absolute  z-10  bg-[#D9D9D9] w-64 h-64 rounded-full lg:h-80 lg:w-80 "></div>
            <Image
              loading="lazy"
              src="/music/01.png"
              alt="Music enhancement product showcase"
              className="object-contain grow z-20 aspect-[1.43] max-md:mt-10 max-md:max-w-full"
              width={568}
              height={330}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
