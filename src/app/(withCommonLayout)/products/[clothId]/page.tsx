import Container from "@/components/ui/Container";
import { TCloth } from "@/types";
// import { Rating } from "@smastrom/react-rating";
import { Clock, Heart, Truck } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ILaptopId {
  params: {
    clothId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/api/v1/cloth");
  const cloth = await res.json();
  return cloth?.data?.slice(0, 10).map((cloth: TCloth) => ({
    laptopsId: cloth?._id,
  }));
};

const LaptopDetailPage = async ({ params }: ILaptopId) => {
  const res = await fetch(`http://localhost:5000/api/v1/cloth/${params.clothId}`, {
    cache: "no-store",
  });

  const laptop = await res.json();

  const discountedPrice =
    laptop?.data?.price - laptop?.data?.price * (laptop?.data?.discount / 100);
  return (
    <div className="mt-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start ">
          <div className="w-full h-[350px] sm:h-[500px] border-2 flex justify-center items-center">
            <Image
              src={laptop?.data?.image}
              alt="product-image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[90%] h-[90%]"
            />
          </div>
          <div>
            <div>
              <div className="pb-5 border-b-2 border-b-zinc-900 mb-10">
                <div className="flex justify-between items-center gap-2  mb-3">
                  <h1 className="text-2xl font-bold">{laptop?.data?.name}</h1>
                  <Heart className="text-red-400 cursor-pointer hover:text-red-500" />
                </div>
                <div className="flex items-center gap-5">
                  <p className=" text-xl pe-10 border-e-2 border-e-zinc-900">
                    <span className="text-2xl font-bold">৳</span>
                    <del className="text-slate-600">{laptop?.data?.price}</del>{" "}
                    <span>
                      <span className="text-2xl font-bold">৳</span>
                      {discountedPrice}
                    </span>
                  </p>
                  {/* <Rating
                    style={{ maxWidth: 100 }}
                    value={laptop?.data?.rating}
                    readOnly
                  /> */}
                </div>
              </div>
            </div>
            <ul className="px-5 mt-5">
              <li className="list-disc">Processor: {laptop.data?.processor}</li>
              <li className="list-disc">RAM: {laptop?.data?.ram}</li>
              <li className="list-disc">SSD: {laptop?.data?.ssd}</li>
              <li className="list-disc">Display: {laptop?.data?.display}</li>
              <li className="list-disc">OS: {laptop?.data?.os}</li>
            </ul>
            <div className="mt-10">
              <p className="mb-2 flex items-center gap-2">
                <Truck /> Free worldwide shipping on all orders over $100
              </p>
              <p className=" flex items-center gap-2">
                <Clock /> Delivers in: 3-7 Working Days Shipping & Return
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-bold mb-5">Description</h3>
          <p className="text-slate-700">{laptop?.data?.description}</p>
          <ul className="px-5 mt-5">
            <li className="list-disc">Processor: {laptop.pdata?.rocessor}</li>
            <li className="list-disc">RAM: {laptop?.data?.ram}</li>
            <li className="list-disc">SSD: {laptop?.data?.ssd}</li>
            <li className="list-disc">Display: {laptop?.data?.display}</li>
            <li className="list-disc">OS: {laptop?.data?.os}</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default LaptopDetailPage;
