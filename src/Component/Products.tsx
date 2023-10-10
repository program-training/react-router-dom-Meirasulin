import { Box, Typography } from "@mui/material";
import HomeButton from "./HomeButton";

const Products = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
        <HomeButton/>

      <Typography variant="h3">this is products page</Typography>
    </Box>
  );
};
export default Products;
