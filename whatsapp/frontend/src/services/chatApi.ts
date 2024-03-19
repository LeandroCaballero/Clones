import { API_URL } from "../utils/constants";

export const fetchChats = async (userId?: number) => {
  try {
    const response = await fetch(`${API_URL}/chats/` + userId, {
      credentials: "include",
    });

    if (!response.ok) throw new Error("Error en la petición");

    return response.json();
  } catch (e) {
    console.log(`Error chat api: ${e}`);
    throw new Error(String(e));
  }
};

// export const fetchUsers = async () => {
//   return await fetch(`${API_URL}/chats`)
//     .then(async (res) => {
//       if (!res.ok) throw new Error("Error en la petición");
//       return await res.json();
//     })
//     .then((res) => res);
// };
