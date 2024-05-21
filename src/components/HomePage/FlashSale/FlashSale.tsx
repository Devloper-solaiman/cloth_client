import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import { TCloth } from "@/types";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { Box } from "@mui/material";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/api/v1/cloth", {
    next: {
      revalidate: 30,
    },
  });

  const clothData = await res.json();

  const flashSaleCloth = clothData?.data?.filter((cloth: TCloth) => cloth.flashSale);

  const sortedFlashSaleCloth = flashSaleCloth.sort(
    (a: TCloth, b: TCloth) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <Box
      borderRadius={3}
      sx={{
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
            paddingTop: "10px",
            fontWeight: "bold",
            color: "#06284B ",
          }}
        >
          <Box>Discount!</Box>
          <Box>Discount!!</Box>
          <Box> Discount!!!</Box>
        </Box>
        <Box className=" mx-auto  flex justify-center items-center text-center flex-col">
          <h2 className="text-sm md:text-xl lg:text-2xl text-[#34495E] w-[80%] text-justify my-9 font-semibold">
            This Eid-ul-Azha, <span className="text-green-500">Rim zhim</span> is back with all the
            attractive offers! All the clothes you need are now available at very affordable prices!
          </h2>
        </Box>
        <Box className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-8 justify-items-center items-start">
          {sortedFlashSaleCloth.slice(0, 8).map((cloth: TCloth) => (
            <ProductCard key={cloth?._id} cloth={cloth} />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            justifyItems: "center",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#06284B ",
          }}
        >
          <Link
            className="border border-black px-3 py-1 bg-gray-400 hover:bg-green-500 hover:text-yellow-500 rounded-xl "
            href="/flash-sale"
          >
            All flash-sale
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default FlashSale;
