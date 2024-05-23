import Container from "@/components/ui/Container";
// import FilterBox from "@/components/ui/FilterBox";
import ProductCard from "@/components/ui/ProductCard";
import { TCloth } from "@/types";
import { Box } from "@mui/material";

const ClothsPage = async () => {
  const res = await fetch(`https://cloth-server-weld.vercel.app/api/v1/cloth`, {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <Container>
      <Box className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-8 justify-items-center items-start">
        {data?.data?.map((cloth: TCloth) => (
          <ProductCard key={cloth?._id} cloth={cloth} />
        ))}
      </Box>
    </Container>
  );
};

export default ClothsPage;
