import { Box, Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        fontSize: "32px",
        marginTop: "74px",
      }}
    >
      Creaged later.............
      <Box>
        <Link href="/">
          <Button>Home</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default LoginPage;
