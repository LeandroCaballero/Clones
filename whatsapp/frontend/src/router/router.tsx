import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
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
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  // console.log("SE RENDERIZA PRIVATE ROUTE", isLoading, isError, data, error);

  if (isLoading) {
    return <span>Cargando usuario</span>;
  }

  if (isError) {
    console.log("ENTRA EN ISERROR", isError, error);
    return <Navigate to="/login" />;
  }

  if (!data) {
    console.log(data);
    return <Navigate to="/login" />;
  }

  return children;
}

export default router;
