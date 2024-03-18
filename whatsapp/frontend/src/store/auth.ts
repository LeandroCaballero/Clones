import { create } from "zustand";
import { User } from "../../types";

interface authState {
  currentUser?: User;
  setCurrentUser: (user: User) => void;
  resetCurrentUser: () => void;
}

export const authStore = create<authState>()((set) => ({
  currentUser: undefined,
  setCurrentUser: (user) => set({ currentUser: user }),
  resetCurrentUser: () => set({ currentUser: undefined }),
}));
