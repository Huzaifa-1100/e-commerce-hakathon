import * as React from "react";
import { TimerItem } from "./timerItems";



export interface TimerItemProps {
    value: string;
    label: string;
  }
  
  export interface TimerDisplayProps {
    items: TimerItemProps[];
  }

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ items }) => {
  return (
    <div className="flex gap-6 items-start mt-8 text-text2 whitespace-nowrap">
      {items.map((item, index) => (
        <TimerItem key={index} value={item.value} label={item.label} />
      ))}
    </div>
  );
};
