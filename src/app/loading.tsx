import { Box } from "@mui/material";
import { FadeLoader } from "react-spinners";

const loading = () => {
    return (
        <Box className=" isolate aspect-video h-screen w-full flex justify-center items-center">
      <FadeLoader color="#000000" />
      <p className="font-bold"> Loading</p>
    </Box>
    );
};

export default loading;
