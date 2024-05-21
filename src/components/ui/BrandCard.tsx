import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const BrandCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <Link href={`/cloths?brand=${encodeURIComponent(title)}`}>
      <Box
        sx={{
          height: "200px",
          width: "160px",
        }}
        className="  hover:scale-110 duration-500 flex justify-center items-center flex-col transition-all"
      >
        <Image
          src={image}
          alt="brand-image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full rounded-xl"
        />
      </Box>
      <p className="font-semebold mt-1 text-center">{title}</p>
    </Link>
  );
};

export default BrandCard;
