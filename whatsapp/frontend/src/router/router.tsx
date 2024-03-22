import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/login/Login";
import { ReactNode } from "react";
import { useCookies } from "react-cookie";
import { isLogged } from "../services/authApi";
import { useQuery } from "@tanstack/react-query";

interface Props {
  children: ReactNode;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    Component: () => (
      <>
        <p>Pagina no encontrada</p>
      </>
    ),
  },
]);

function PrivateRoute({ children }: Props) {
  const [cookies] = useCookies();

  // const { currentUser } = authStore();
  // if (currentUser) children;

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => isLogged(cookies),
    retry: false,
  });

  if (isLoading) {
    return <span>Cargando usuario</span>;
  }

  if (isError) {
    return <Navigate to="/login" />;
  }

  if (!data) {
    console.log(data);
    return <Navigate to="/login" />;
  }

  // console.log("desde el router", data);

  return children;
}

export default router;
