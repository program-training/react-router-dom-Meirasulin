import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import tasksList from "../utils/task";

const TaskInfo = () => {
  const tsakId = useParams().tsakId as string;
  const id = useParams().id as string;

  const task = tasksList.find(
    (t) => t.id === Number(tsakId) && t.userId === Number(id)
  );
  if (!task)
    return (
      <Typography variant="h6" sx={{ color: "red" }}>
        Invalid task number or user
      </Typography>
    );
  return (
    <Box>
      <Typography>Task Title: {task?.title}</Typography>
      <Typography>Task ID: {task?.id}</Typography>
      <Typography>completed: {task?.completed.toString()}</Typography>
    </Box>
  );
};
export default TaskInfo;
