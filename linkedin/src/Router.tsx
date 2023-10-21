import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"
import Feed from "./Pages/Feed"
import MyNetwork from "./Pages/MyNetwork"
import MainLoyout from "./layouts/Main"

{
  /* <Route
path="/"
element: <Feed />,
  ) */
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLoyout />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/mynetwork",
        element: <MyNetwork />,
      },
    ],
  },
])
