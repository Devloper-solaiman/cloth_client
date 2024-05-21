import { TCloth } from "@/types";
import { Box } from "@mui/material";
import { CirclePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ cloth }: { cloth: TCloth }) => {
  const discountedPrice = (cloth.price - cloth.price * (cloth.discount / 100)).toFixed(2);
  return (
    <Link href={`/cloth/${cloth?._id}`}>
      <Box
        sx={{
          borderRadius: "8px",
          width: "280px",
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "360px",
            widows: "280px",
            position: "relative",
            overflow: "hidden",
          }}
          className=" border-b-2 items-center group"
        >
          <Image
            src={cloth?.image}
            alt="product-image"
            width={0}
            height={0}
            sizes="100vw"
            className="group-hover:scale-110 transition-all duration-500 rounded-xl w-full h-[230px] "
          />
          <p className="absolute top-5 left-5 bg-[#3D3D3D] text-white text-xs py-1 px-3 rounded-xl">
            -{cloth?.discount}%
          </p>
        </Box>
        <Box className="p-2">
          <h2 className="text-left  mb-2">{cloth?.name}</h2>
          <Box className="flex justify-between items-center text-sm">
            <Box>
              <span className="text-xl font-semebold">৳</span>
              <del className="text-slate-500">{cloth?.price}</del>
              {""}
              <span className="text-gray-900 font-semibold">
                <span className="text-xl  ">৳</span>
                {discountedPrice}
              </span>
            </Box>
            <CirclePlus className="font-light h-5 w-5 cursor-pointer" />
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default ProductCard;
