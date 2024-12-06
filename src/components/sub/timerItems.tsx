import * as React from "react";
import { TimerItemProps } from "./timeDisplay";


export const TimerItem: React.FC<TimerItemProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col w-[62px]">
      <div className="flex flex-col justify-center items-center px-1.5 bg-primary rounded-full fill-primary h-[62px] w-[62px]">
        <div className="flex flex-col items-center">
          <div className="poppins-semibold leading-none">
            {value}
          </div>
          <div className="poppins-regular text-xs ">{label}</div>
        </div>
      </div>
    </div>
  );
};