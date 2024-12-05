// FooterContent.tsx
import React, { FC } from "react";

interface Iprops {
  heading: string;
  descriptions?: string[]; // Array of strings for descriptions
}

const FooterContent: FC<Iprops> = ({ heading, descriptions }) => {
  return (
    <div className="text-text text-[20px] ">
      <h2 className="poppins-medium mb-5">{heading}</h2>
      <ul className="poppins-regular text-[16px] space-y-4">
        {descriptions &&
          descriptions.map((description, index) => (
            <li key={index}>{description}</li>
          ))}
      </ul>
    </div>
  );
};

export default FooterContent;
