import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Box } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#F2F3F4", paddingTop: "5px" }}>
        <Navbar />
      </Box>
      <Box sx={{ height: "screen" }}> {children}</Box>
      <Footer />
    </Box>
  );
};

export default CommonLayout;
