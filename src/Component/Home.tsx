import { Box, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h3">Walcome to Home Page</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", margin: "1em" }}>
        <Link to={"/products"} style={{ margin: "1em" }}>
          Products
        </Link>
        <Link to={"/users"} style={{ margin: "1em" }}>
          Users
        </Link>
      </Box>
      <Outlet />
    </Box>
  );
};
export default Home;
