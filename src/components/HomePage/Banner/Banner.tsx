import React from "react";
import banner from "@/assets/image/HomeBanner.png";
import ImageSlider from "@/components/ui/ImageSlider";
import { Box } from "@mui/material";
import Container from "@/components/ui/Container";
const Banner = () => {
  return (
    <Box
      borderRadius={2}
      display="flex"
      justifyItems="center"
      justifyContent="center"
      textAlign="center"
      className="bg-center bg-cover min-h-screen"
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)),url(${banner.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          width: "full",
        }}
        className="  items-center "
      >
        <Container>
          <Box className=" mx-auto  flex justify-center items-center text-center flex-col">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold">
              Welcome to Rim jhim
              <br />
              Give triall!! Take a selfie Show your friends <br />
              <span className="text-red-700 underline">Buy now with Injoy</span>
            </h2>
            <p className="md:text-xl text-white mb-10">
              Welcome to the attractive, flashy and tasteful variety of design apparel market
            </p>
          </Box>
          <Box>
            <ImageSlider />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
