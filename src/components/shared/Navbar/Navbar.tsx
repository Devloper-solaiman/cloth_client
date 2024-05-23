"use client";
import React, { useState } from "react";
import { Box, Button, Container, Drawer, Link, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logoImg from "@/assets/image/Rimjim.logo.png";
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box sx={{ display: "flex" }}>
          <Link
            href="/"
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#FFC300",
              cursor: "pointer",
            }}
          >
            Rim JHIM
          </Link>
          <Link href="/">
            <Image src={logoImg} height={40} width={40} alt="logo Image" />
          </Link>
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          gap={4}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Link
            href="/flash-sale"
            underline="hover"
            sx={{
              fontSize: "18px",
              fontWeight: "semibold",
              color: "#333",
              cursor: "pointer",
            }}
          >
            flash-sale
          </Link>
          <Link
            href="/cloths"
            underline="hover"
            sx={{
              fontSize: "18px",
              fontWeight: "semibold",
              color: "#333",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            cloths
          </Link>
          <Link
            href="dashboard"
            underline="hover"
            sx={{
              fontSize: "18px",
              fontWeight: "semibold",
              color: "#333",
              cursor: "pointer",
            }}
          >
            dashboard
          </Link>
        </Stack>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Button onClick={handleDrawerToggle}>
            <MenuIcon />
          </Button>
        </Box>
        <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
          <Stack
            sx={{ width: 200 }}
            role="presentation"
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
          >
            <Stack spacing={2} p={2}>
              <Link
                href="/flash-sale"
                underline="hover"
                sx={{
                  fontSize: "18px",
                  fontWeight: "semibold",
                  color: "#333",
                  cursor: "pointer",
                }}
              >
                flash-sale
              </Link>
              <Link
                href="/cloths"
                underline="hover"
                sx={{
                  fontSize: "18px",
                  fontWeight: "semibold",
                  color: "#333",
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                cloths
              </Link>
              <Link
                href="/dashboard"
                underline="hover"
                sx={{
                  fontSize: "18px",
                  fontWeight: "semibold",
                  color: "#333",
                  cursor: "pointer",
                }}
              >
                dashboard
              </Link>
              <Button component={Link} href="/login">
                Login
              </Button>
            </Stack>
          </Stack>
        </Drawer>
        <Stack sx={{ display: { xs: "none", sm: "flex" } }}>
          <Button component={Link} href="/login">
            Login
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
