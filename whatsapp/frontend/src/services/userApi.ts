import { API_URL } from "../utils/constants";

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      credentials: "include",
    });

    if (!response.ok) throw new Error("Error en la petición");

    return response.json();
  } catch (e) {
    console.log(`Error user api: ${e}`);
    throw new Error(String(e));
  }
};
