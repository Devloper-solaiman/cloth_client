import Banner from "@/components/HomePage/Banner/Banner";
import Brands from "@/components/HomePage/Brands/Brands";
import FlashSale from "@/components/HomePage/FlashSale/FlashSale";
import TrendingProducts from "@/components/TrendingProducts/TrendingProducts";
import { Box } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box>
      <Banner />
      <FlashSale />
      <Brands />
      <TrendingProducts />
    </Box>
  );
};

export default page;
