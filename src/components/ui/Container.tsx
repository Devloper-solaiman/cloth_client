import { cn } from "@/lib/utils";
import { Box } from "@mui/material";
import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <Box className={cn("w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 mx-auto", className)}>
      {children}
    </Box>
  );
};

export default Container;
