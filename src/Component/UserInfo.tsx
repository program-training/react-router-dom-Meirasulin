import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import usersList from "../utils/usersList";
import HomeButton from "./HomeButton";

type ContactsParams = {
  id: string;
};

const UserInfo = () => {
  const id = useParams<ContactsParams>().id as string;
  const user = usersList.find((u) => Number(id) === u.id);
  const navigate = useNavigate();
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <HomeButton />

      <Box>
        <Typography variant="h4">{user?.name}</Typography>

        <Box sx={{ fontWeight: "bold" }}>
          Email:
          <Typography>{user?.email}</Typography>
        </Box>

        <Box sx={{ fontWeight: "bold" }}>
          Address:
          <Typography>Street: {user?.address.street}</Typography>
          <Typography>Suite: {user?.address.suite}</Typography>
          <Typography>City: {user?.address.city}</Typography>
        </Box>
        <Box sx={{ fontWeight: "bold" }}>
          Phone:
          <Typography>{user?.phone}</Typography>
        </Box>
        <Button
          onClick={() => {
            navigate("/user-info/" + id + "/tasks");
          }}
        >
          Tasks
        </Button>
        <Outlet />
      </Box>
    </Box>
  );
};
export default UserInfo;
