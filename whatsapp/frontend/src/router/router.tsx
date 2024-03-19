import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../components/login/Login";
import { ReactNode } from "react";
import { useCookies } from "react-cookie";
import { isLogged } from "../services/authApi";
import { useQuery } from "react-query";

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

  const { isLoading, isError, data } = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => isLogged(cookies),
  });

  if (isLoading) {
    return <span>Cargando usuario</span>;
  }

  if (isError) {
    return <span>Hubo un error</span>;
  }

  if (!data) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default router;
