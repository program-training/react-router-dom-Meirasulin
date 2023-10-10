import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ROUTES from "./routes/routerModel";
import Users from "./Component/Users";
import UserInfo from "./Component/UserInfo";
import Tasks from "./Component/Tasks";
import TaskInfo from "./Component/TaskInfo";
import Home from "./Component/Home";
import Products from "./Component/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: ROUTES.USERS,
    element: <Users />,
  },
  {
    path: ROUTES.USER_INFO,
    element: <UserInfo />,
    children: [
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "task-info/:tsakId",
        element: <TaskInfo />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
