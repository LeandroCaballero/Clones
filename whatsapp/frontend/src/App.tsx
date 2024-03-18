import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { useEffect } from "react";
import { isLogged } from "./services/authApi";
import { useCookies } from "react-cookie";
import { authStore } from "./store/auth";

const queryClient = new QueryClient();

export function App() {
  // const [tokenCookie] = useCookies(["wptoken"]);

  // const { setCurrentUser, currentUser } = authStore();

  // useEffect(() => {
  //   checkLoggedIn();
  // }, [tokenCookie]);

  // async function checkLoggedIn() {
  //   // console.log(tokenCookie);
  //   try {
  //     if (tokenCookie && tokenCookie.wptoken) {
  //       const user = await isLogged(tokenCookie.wptoken);
  //       setCurrentUser(user);
  //     }
  //   } catch (error) {
  //     console.error("Error checking if user is logged in:", error);
  //   }
  // }

  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
      <RouterProvider router={router} />
      {/* </AuthProvider> */}
    </QueryClientProvider>
  );
}
