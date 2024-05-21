import Banner from "@/components/HomePage/Banner/Banner";
import Brands from "@/components/HomePage/Brands/Brands";
import FlashSale from "@/components/HomePage/FlashSale/FlashSale";
import TrendingProducts from "@/components/TrendingProducts/TrendingProducts";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <FlashSale />
      <Brands />
      <TrendingProducts />
    </div>
  );
};

export default page;
