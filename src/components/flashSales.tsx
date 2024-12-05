import React from "react";
import Time from "./sub/time";
import { TimeData } from "../../utils/data";

const FlashSales = () => {
  return (
    <div className="wrapper">
      <div className="mb-5">
        <span className="poppins-today border-l-8 border-secondary2 text-secondary2 whitespace-pre ">{`  Today’s`}</span>
      </div>
      {/*  Heading */}
      <div className="flex gap-10">
        <h1 className="inter-flash-sale text-text2">Flash Sales</h1>
        {/* days and time */}
        {TimeData.map((item, index) => (
          <Time heading={item.heading} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default FlashSales;
