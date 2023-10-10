import { Box, Typography } from "@mui/material";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import tasksList from "../utils/task";

type ContactsParams = {
  id: string;
};

const Tasks = () => {
  const navigate = useNavigate();
  const id = useParams<ContactsParams>().id as string;
  const tasks = tasksList.filter((t) => Number(id) === t.userId);
  return (
    <Box>
      <Typography variant="h5">This Tasks list of userId {id}</Typography>
      {tasks?.map((t) => (
        <Typography
          color="#393939"
          variant="h6"
          component="p"
          sx={{
            border: "1px solid black",
            margin: "1em",
            borderRadius: "0.5em",
          }}
          onClick={() => {
            navigate("/user-info/" + id + "/task-info/" + t.id.toString());
          }}
        >
          {t.title}
        </Typography>
      ))}
      <Outlet />
    </Box>
  );
};
export default Tasks;
