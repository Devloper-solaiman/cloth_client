"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import iconImg from "@/assets/image/Rimjim.logo.png";
import Sidebar from "../SideBar/Sidebar";
import { Box } from "@mui/material";

const DashBoardLayoutCompo = ({ children }: { children: React.ReactNode }) => {
  const [slider, setSlider] = useState(false);
  return (
    <Box className="grid grid-cols-12 relative">
      <Box
        className={`${
          slider ? "fixed left-0 top-0 bottom-0 lg:w-full w-3/4 sm:w-1/2" : "col-span-1 "
        } lg:relative lg:col-start-1 lg:col-end-3 z-40`}
      >
        <Sidebar slider={slider} setSlider={setSlider} />
      </Box>
      <Box className={`${slider ? "col-span-12" : "col-span-11"}  lg:col-span-10`}>
        <Box className="bg-slate-900  flex justify-center items-end flex-col">
          <Image
            src={iconImg.src}
            width={40}
            height={40}
            alt="profile-image"
            className="rounded-full"
          ></Image>
        </Box>
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};

export default DashBoardLayoutCompo;
