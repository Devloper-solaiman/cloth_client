import { TCloth } from "@/types";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import SliderProductCard from "./SliderProductCard";

const ImageSlider = async () => {
  const res = await fetch("https://cloth-server-weld.vercel.app/api/v1/cloth", {
    next: {
      revalidate: 30,
    },
  });

  const productData = await res.json();
  console.log("data", productData);
  const clothDataCreateAt = productData?.data?.sort(
    (a: TCloth, b: TCloth) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent>
        {clothDataCreateAt.slice(0, 15).map((product: TCloth) => (
          <CarouselItem key={product._id} className="md:basis-1/2 lg:basis-1/3">
            <SliderProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageSlider;
