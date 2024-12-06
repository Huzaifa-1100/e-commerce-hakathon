import React from "react";
import CardHeading from "./sub/cardHeading";
import { BsPhone } from "react-icons/bs";
import { CategoryData } from "../../utils/categoryData";
import CategoryCard from "./sub/categoryCard";

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
        <div className="my-10 gap-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {CategoryData.map((category, index) => (
            <CategoryCard
              key={index}
              name={category.name}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
