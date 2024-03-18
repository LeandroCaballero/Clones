import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
