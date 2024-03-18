import { API_URL } from "../utils/constants";

export const fetchUsers = async () => {
  return await fetch(`${API_URL}/chats`)
    .then(async (res) => {
      if (!res.ok) throw new Error("Error en la petición");
      return await res.json();
    })
    .then((res) => res);
};
