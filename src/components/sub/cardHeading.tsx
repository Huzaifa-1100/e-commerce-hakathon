import React, { FC } from "react";
import Arrows from "./arrows";
import { TimeData } from "../../../utils/data";
import Time from "./time";

interface Iprops {
  subHeading: string;
  mainHeading: string;
  daysTime: boolean;
  arrowType: boolean;
}

const CardHeading: FC<Iprops> = ({
  subHeading,
  mainHeading,
  daysTime,
  arrowType,
}) => {
  return (
    <div>
      <div>   
        {/* Top Side */}
        <div className="mb-5">
          <span className="poppins-today border-l-8 border-secondary2 text-secondary2 whitespace-pre ">{`  ${subHeading}`}</span>
        </div>
        {/*  Heading */}
        <div className="md:flex justify-between items-center">
          <div className="md:flex gap-10 items-center">
            <h1 className="inter-flash-sale text-text2">{mainHeading}</h1>
            {/* days and time */}
            <div className="flex gap-10 my-5">
              {daysTime
                ? TimeData.map((item, index) => (
                    <Time
                      key={index}
                      heading={item.heading}
                      content={item.content}
                    />
                  ))
                : false}
            </div>
          </div>

          {/* left side arrows */}
          <div className="">{arrowType ? <Arrows /> : false}</div>
        </div>
      </div>
    </div>
  );
};

export default CardHeading;
