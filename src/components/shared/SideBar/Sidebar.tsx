import { Box } from "@mui/material";
import { AlignJustify, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Dispatch } from "react";

type TSlider = {
  slider: boolean;
  setSlider: Dispatch<React.SetStateAction<boolean>>;
};
const MenuItem = [
  <>
    <Link href="/dashboard/all-products">All Cloths</Link>
  </>,
];

const Sidebar = ({ slider, setSlider }: TSlider) => {
  return (
    <Box className=" bg-slate-900 text-white h-full pt-10">
      <Box className="lg:hidden">
        {slider ? (
          <Box className="flex justify-center items-end flex-col px-5">
            <button onClick={() => setSlider(!slider)}>
              <ArrowLeft />
            </button>
          </Box>
        ) : (
          <button onClick={() => setSlider(!slider)}>
            <AlignJustify />
          </button>
        )}
      </Box>
      <Box className={`${slider ? "block" : "hidden lg:block "} `}>
        <h1 className="text-xl cursor-pointer flex justify-start items-center px-5 mb-10">
          <Link href="/">
            <span className="font-bold">Home</span>
          </Link>
        </h1>
        <Box className="hidden lg:block ">
          <ul className=" flex justify-center items-start flex-col gap-5 px-5">
            <li>{MenuItem}</li>
          </ul>
        </Box>
        <Box className="block lg:hidden">
          <ul className=" flex justify-center items-start flex-col gap-5  px-5">
            <li onClick={() => setSlider(!slider)}>{MenuItem}</li>
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
