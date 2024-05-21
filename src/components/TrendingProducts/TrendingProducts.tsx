import Link from "next/link";
import Container from "../ui/Container";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import ProductCard from "../ui/ProductCard";
import { TCloth } from "@/types";
import { Box } from "@mui/material";

const TrendingProducts = async () => {
  const res = await fetch("http://localhost:5000/api/v1/cloth", {
    next: {
      revalidate: 30,
    },
  });

  const clothData = await res.json();

  const sortedLaptopData = clothData?.data
    ?.slice()
    .sort((b: { rating: number }, a: { rating: number }) => a.rating - b.rating);

  return (
    <Box
      sx={{
        paddingBottom: "60px",
        background:
          "linear-gradient(90deg, rgba(10,207,255,0.6241684173669468) 0%, rgba(181,179,181,0.9406950280112045) 59%, rgba(255,252,255,1) 100%)",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            justifyItems: "center",
            fontSize: "20px",
            paddingTop: "60px",
            fontWeight: "bold",
            color: "#06284B ",
          }}
        >
          <Box>Best selling!</Box>
          <Box>Good Review!!</Box>
          <Box> Rejonable Price!!!</Box>
        </Box>
        <Box>
          <h2 className="text-slate-900 md:w-2/3 mx-auto mt-7 font-semibold text-xl underline  text-center">
            Trending Products
          </h2>
        </Box>
        <Box>
          <h2 className="text-slate-600 md:w-2/3 mx-auto my-8  text-center">
            Explore our collection of trending styles at{" "}
            <span className="text-slate-900 font-semibold">Rim Jhime</span>, where creativity and
            fashion converge to bring you the latest in apparel excellence.
          </h2>
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center items-start">
          {sortedLaptopData.slice(0, 8).map((cloth: TCloth) => (
            <ProductCard key={cloth?._id} cloth={cloth} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TrendingProducts;
