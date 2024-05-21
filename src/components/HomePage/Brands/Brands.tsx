import assets from "@/assets";
import BrandCard from "@/components/ui/BrandCard";
import Container from "@/components/ui/Container";
import { Box } from "@mui/material";

const Brands = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(90deg, rgba(10,207,255,0.6241684173669468) 0%, rgba(181,179,181,0.9406950280112045) 59%, rgba(255,252,255,1) 100%)",
      }}
    >
      <Container>
        <Box sx={{ marginBottom: "50px" }}>
          <h1 className="text-2xl pt-10 text-center font-bold">Necessary Brands </h1>
          <p className="text-slate-600 md:w-2/3 mx-auto mt-5  text-center">
            where elegance meets comfort. Our premium tops blend sophisticated design with superior
            fabrics, offering a flattering fit for every occasion. Embrace style and sustainability
            with <span className="text-slate-800 font-semibold">Rim Jhim</span>.
          </p>
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center items-center gap-5">
          <BrandCard image={assets.Tshart} title="Tshart" />
          <BrandCard image={assets.blazer} title="Blazer" />
          <BrandCard image={assets.sari} title="Sari" />
          <BrandCard image={assets.pant} title="jins Pant" />
          <BrandCard image={assets.Tshart2} title="T-Shart" />
          <BrandCard image={assets.blazer2} title="Blazer" />
          <BrandCard image={assets.sari2} title="Sari" />
          <BrandCard image={assets.pant2} title="stis pant" />
        </Box>
      </Container>
    </Box>
  );
};

export default Brands;
