import Container from "@/components/ui/Container";
import { Box, Rating } from "@mui/material";
import { Clock, Heart, Truck } from "lucide-react";
import Image from "next/image";

export interface TClothId {
  params: {
    clothsId: string;
  };
}

const page = async ({ params }: TClothId) => {
  const res = await fetch(`https://cloth-server-weld.vercel.app/api/v1/cloth/${params.clothsId}`);
  const deat = await res.json();
  const discoutedPrice = (
    deat?.data?.price -
    deat?.data?.price * (deat?.data?.discount / 100)
  ).toFixed(2);

  return (
    <Container>
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start ">
        <Box className="w-full h-[350px] sm:h-[500px]  flex justify-center items-center">
          <Image
            src={deat?.data?.image}
            alt="product-image"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[90%] h-[90%]"
          />
        </Box>
        <Box>
          <Box>
            <Box className="pb-5 border-b-2 border-b-zinc-900 mb-10">
              <Box className="flex justify-between items-center gap-2  mb-3">
                <h1 className="text-2xl font-bold">{deat?.data?.name}</h1>
                <Heart />
              </Box>
              <Box className="flex items-center gap-5">
                <p className=" text-xl pe-10 border-e-2 border-e-zinc-900">
                  <span className="text-2xl font-bold">$</span>
                  <del className="text-slate-600">{deat?.data?.price}</del>{" "}
                  <span>
                    <span className="text-2xl font-bold">$</span>
                    {discoutedPrice}
                  </span>
                </p>
                <Rating style={{ maxWidth: 100 }} value={deat?.data?.rating} readOnly />
              </Box>
            </Box>
          </Box>
          <ul className="px-5 mt-5">
            <li className="list-disc">name: {deat?.data?.name}</li>
            <li className="list-disc">discount: {deat?.data?.discount}</li>
            <li className="list-disc">flashSale: {deat?.data?.flashSale}</li>
            <li className="list-disc">material: {deat?.data?.material}</li>
            <li className="list-disc">size: {deat?.data?.size?.[1]}</li>
          </ul>
          <Box className="mt-10">
            <p className="mb-2 flex items-center gap-2">
              <Truck /> Free worldwide shipping on all orders over $100
            </p>
            <p className=" flex items-center gap-2">
              <Clock /> Delivers in: 3-7 Working Days Shipping & Return
            </p>
          </Box>
        </Box>
      </Box>
      <Box className="mt-10">
        <h3 className="text-2xl font-bold mb-5">Description</h3>
        <p className="text-slate-700">{deat?.data?.description}</p>
        <ul className="px-5 mt-5">
          <li className="list-disc">name: {deat?.data?.name}</li>
          <li className="list-disc">discount: ${deat?.data?.discount}</li>
          <li className="list-disc">flashSale: {deat?.data?.flashSale}</li>
          <li className="list-disc">material: {deat?.data?.material}</li>
          <li className="list-disc">size: {deat?.data?.size?.[1]}</li>
        </ul>
      </Box>
    </Container>
  );
};

export default page;
