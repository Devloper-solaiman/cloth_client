import Container from "@/components/ui/Container";
import CountdownTimer from "@/components/ui/CountDownTimer";
import ProductCard from "@/components/ui/ProductCard";
import { TCloth } from "@/types";
import { Box } from "@mui/material";

const FlashSalePage = async () => {
  const res = await fetch("https://cloth-server-weld.vercel.app/api/v1/cloth", {
    cache: "no-store",
  });

  const clothData = await res.json();

  const flashSaleCloths = clothData.data.filter((cloth: TCloth) => cloth.flashSale);

  return (
    <Container>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            justifyItems: "center",
            fontSize: "20px",
            marginTop: "32px",
            fontWeight: "bold",
            color: "#06284B ",
          }}
        >
          <Box>
            <p>
              {" "}
              5 to 20% discount{" "}
              <span className="text-green-500 font-semibold">immediately buy now</span>
            </p>
          </Box>
          <Box
            sx={{
              marginLeft: "-250px",
              fontSize: "32px",
            }}
          >
            Flash Sale
          </Box>
          <Box> Hurry!!!</Box>
        </Box>
        <Box>
          <CountdownTimer />
        </Box>
        <h4 className="text-center text-gray-600 text-xl font-semibold w-[60%] mx-auto ">
          This Eid-ul-Azha, <span className="text-green-500">Rim zhim</span> is back with all the
          attractive offers! All the clothes you need are now available at very affordable prices!
        </h4>
      </Box>

      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {flashSaleCloths.map((cloth: TCloth) => (
          <ProductCard key={cloth?._id} cloth={cloth} />
        ))}
      </Box>
    </Container>
  );
};

export default FlashSalePage;
