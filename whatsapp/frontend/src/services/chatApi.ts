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

export const createChat = async (newChatData: {
  users: string[];
  type: string;
}) => {
  try {
    const response = await fetch(API_URL + "/new-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(newChatData),
    });

    if (!response.ok) throw new Error("Error en la petición");

    return response.json();
  } catch (e) {
    console.log(`Error chat api: ${e}`);
    throw new Error(String(e));
  }
};

// export const login = async (loginData: { email: string; password: string }) => {
//   try {
//     const response = await fetch(API_URL + "/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//       body: JSON.stringify(loginData),
//     });

//     if (!response.ok) throw new Error("Error en la petición");

//     return response.json();
//   } catch (e) {
//     console.log(`is logged in error ${e}`);
//     throw new Error(String(e));
//   }
// };

export const getOneChat = async (chatId: number) => {
  try {
    const response = await fetch(`${API_URL}/chat/${chatId}`, {
      credentials: "include",
    });

    if (!response.ok) throw new Error("Error en la petición");

    return response.json();
  } catch (e) {
    console.log(`Error chat api: ${e}`);
    throw new Error(String(e));
  }
};
