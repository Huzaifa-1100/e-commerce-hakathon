import React, { FC } from "react";

interface Iprops {
  heading: string;
  content: string;
}

const Time: FC<Iprops> = ({ heading, content }) => {
  return (
    <div>
      <h4 className="poppins-medium">{heading}</h4>
      <p className="inter-time">{content}</p>
    </div>
  );
};

export default Time;
