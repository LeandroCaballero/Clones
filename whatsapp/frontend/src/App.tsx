import { AuthProvider } from "./context/auth/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import router from "./router/router";

const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </CookiesProvider>
    </AuthProvider>
  );
}

export default App;
