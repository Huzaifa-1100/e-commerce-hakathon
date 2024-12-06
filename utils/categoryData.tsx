import { BsPhone } from "react-icons/bs";
import { CiCamera, CiHeadphones } from "react-icons/ci";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { LuGamepad } from "react-icons/lu";
import { TbDeviceWatchStats } from "react-icons/tb";

export const CategoryData = [
  {
    name: "Phones",
    icon: <BsPhone />,
  },
  {
    name: "Computers",
    icon: <HiOutlineDesktopComputer />,
  },
  {
    name: "SmartWatch",
    icon: <TbDeviceWatchStats />,
  },
  {
    name: "Camera",
    icon: <CiCamera />,
  },
  {
    name: "HeadPhones",
    icon: <CiHeadphones />,
  },
  {
    name: "Gaming",
    icon: <LuGamepad />,
  },
];
