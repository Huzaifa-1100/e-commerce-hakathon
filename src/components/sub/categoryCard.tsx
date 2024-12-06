import React, { FC } from "react";

interface Iprops {
  name: string;
  icon: JSX.Element;
}

const CategoryCard: FC<Iprops> = ({ name, icon }) => {
  return (
    <div className="border border-button border-opacity-30 h-[145px] cursor-pointer rounded-md flex flex-col items-center justify-center hover:bg-secondary2 hover:text-text transition-all duration-500">
      <div className="text-4xl">{icon}</div>
      <p className="poppins-regular mt-4">{name}</p>
    </div>
  );
};

export default CategoryCard;
