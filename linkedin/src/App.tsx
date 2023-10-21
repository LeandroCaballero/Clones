import { RouterProvider } from "react-router-dom"
import { router } from "./Router"
import MainLoyout from "./layouts/Main"
import Feed from "./Pages/Feed"

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
