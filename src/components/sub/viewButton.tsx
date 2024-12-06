import React, { FC } from "react";
import { Button } from "../ui/button";

interface Iporps {
  text: string;
}
const ViewButton: FC<Iporps> = ({ text }) => {
  return (
    <Button className="bg-button2 hover:bg-secondary hover:text-button2 text-text py-6 px-12">
      {text}
    </Button>
  );
};

export default ViewButton;
