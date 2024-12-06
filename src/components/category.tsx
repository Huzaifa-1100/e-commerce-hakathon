import React from "react";
import CardHeading from "./sub/cardHeading";
import { BsPhone } from "react-icons/bs";

const Category = () => {
  return (
    <div className="wrapper">
      <div className="border-t-[0.5px] border-b-[0.5px] border-opacity-30 border-button py-16">
        <div>
          <CardHeading
            subHeading={"Categories"}
            mainHeading={"Browse By Category"}
            daysTime={false}
            arrowType={true}
          />
        </div>
        {/* Bottom Card */}
        <div className="my-10">
          <div className="border border-button border-opacity-30 w-[170px] h-[145px] rounded-md flex flex-col items-center justify-center hover:bg-secondary2 hover:text-text transition-all duration-5 00">
            <div className="text-4xl">
              <BsPhone />
            </div>
            <p className="poppins-regular mt-4">Phone</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
