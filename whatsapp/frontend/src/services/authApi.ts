import { API_URL } from "../utils/constants";

export const isLogged = async (cookies: any) => {
  try {
    if (cookies.wptoken) {
      const response = await fetch(`${API_URL}/status`, {
        credentials: "include",
      });

      if (response?.ok) {
        return response.json();
      }
    }
  } catch (e) {
    console.log(`is logged in error ${e}`);
    throw new Error(String(e));
  }
};
