import React, { FC } from "react";

import { timeData } from "../../../utils/data";
import Time from "./time";

import { Separator } from "./seprator";

interface Iprops {
  subHeading: string;
  mainHeading: string;
  daysTime: boolean;
}

const CardHeading: FC<Iprops> = ({ subHeading, mainHeading, daysTime }) => {
  return (
    <div>
      <div>
        {/* Top Side */}
        <div className="mb-5">
          <span className="poppins-today border-l-8 border-secondary2 text-secondary2 whitespace-pre ">{`  ${subHeading}`}</span>
        </div>
        {/*  Heading */}
        <div className="md:flex justify-between items-end">
          <div className="md:flex gap-x-10 items-end ">
            <h1 className="inter-flash-sale text-text2">{mainHeading}</h1>
            {/* days and time */}
            <div className="flex gap-x-5 items-center justify-center">
              {daysTime &&
                timeData.map((item, index) => (
                  <React.Fragment key={index}>
                    <Time heading={item.heading} content={item.content} />
                    {/* Render ':' only if not the last item */}
                    {index < timeData.length - 1 && (
                      <span className="text-4xl text-hoverButton">:</span>
                    )}
                    {index < timeData.length - 1 && <Separator />}
                  </React.Fragment>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHeading;
