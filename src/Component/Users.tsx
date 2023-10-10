import { Box, Typography } from "@mui/material";
import usersList from "../utils/usersList";
import { useNavigate } from "react-router-dom";
import HomeButton from "./HomeButton";

const Users = () => {
  const navigate = useNavigate();
  const navigateTo = (to: string) => navigate(to);
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <HomeButton />
      <Box>
        {usersList.map((u) => (
          <Box
            sx={{
              border: "2px solid #f9cc9d",
              margin: "1em",
              borderRadius: "1em",
              bgcolor: "#f9cc9d4a",
            }}
          >
            <Typography
              color="#393939"
              variant="h3"
              component="p"
              onClick={() => navigateTo("/user-info/" + u.id.toString())}
            >
              {u.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Users;
