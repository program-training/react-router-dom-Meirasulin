import { Home } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate("/")}>
      <Home />
    </Button>
  );
};
export default HomeButton;
