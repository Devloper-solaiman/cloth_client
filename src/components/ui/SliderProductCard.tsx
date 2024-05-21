import { TCloth } from "@/types";
import { Box } from "@mui/material";
import Image from "next/image";

const SliderProductCard = ({ product }: { product: TCloth }) => {
  return (
    <Box className="  w-[280px] overflow-hidden mx-auto">
      <Box
        borderRadius={2}
        display={"flex"}
        className=" w-[280px] h-[210px] justify-center items-center group overflow-hidden"
      >
        <Image
          src={product?.image}
          alt="product-image"
          width={0}
          height={0}
          sizes="100vw"
          className="group-hover:scale-110 transition-all duration-500 w-[280px] h-auto"
        />
      </Box>
    </Box>
  );
};

export default SliderProductCard;
