import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/social/facebook.png";
import instagramIcon from "@/assets/social/instagram.png";
import twitterIcon from "@/assets/social/twitter.png";
import linkedIcon from "@/assets/social/linkedin.png";
import logoIcon from "@/assets/image/rimjhim.png.png";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 34, 26)" py={5}>
      <Container>
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#fff",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Shopflash-sale{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#fff",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            products
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#fff",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            dashboard
          </Typography>
        </Stack>

        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={instagramIcon} width={30} height={30} alt="facebook" />
          <Image src={twitterIcon} width={30} height={30} alt="facebook" />
          <Image src={linkedIcon} width={30} height={30} alt="facebook" />
        </Stack>
        <div className="border-b-[1px] border-dashed"></div>
        <Stack direction="row" gap={2} justifyContent="space-between" alignItems="center" py={3}>
          <Typography component="p" color="white">
            &copy;2024 Rem-jhim Developers
          </Typography>
          <Typography component="h1" color="white">
            Rimzhim is an international t-shirt company, controlled by Ankur
          </Typography>

          <Typography component="p" color="white">
            truthfulness is Best Life
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
