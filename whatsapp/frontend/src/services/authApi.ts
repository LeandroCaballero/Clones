import { API_URL } from "../utils/constants";

export const login = async (loginData: { email: string; password: string }) => {
  try {
    const response = await fetch(API_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      let errorMessage = "Error en la petición";
      try {
        const responseData = await response.json();
        if (responseData && responseData.message) {
          errorMessage = responseData.message;
        }
      } catch (error) {
        console.error("Error al extraer el mensaje de error:", error);
      }
      throw new Error(errorMessage);
    }

    return response.json();
  } catch (e) {
    // console.log(e);
    throw e;
  }
};

export const isLogged = async (cookies: any) => {
  console.log(cookies);
  try {
    if (cookies.wptoken) {
      const response = await fetch(`${API_URL}/status`, {
        credentials: "include",
      });

      if (!response.ok) throw new Error("Error en la petición");

      let res = await response.json();
      console.log(1, res);
      return await res;
    }
  } catch (e) {
    console.log(`is logged in error ${e}`);
    throw new Error(String(e));
  }
};
