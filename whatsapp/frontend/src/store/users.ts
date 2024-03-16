import { create } from "zustand";
import { User } from "../../types";

interface ContactFilteredState {
  initialContacts: User[];
  contactsFiltered: User[];
  setInitialContacts: (users: User[]) => void;
  setContactsFiltered: (users: User[]) => void;
}

export const filterContactsStore = create<ContactFilteredState>()((set) => ({
  initialContacts: [],
  contactsFiltered: [],
  setInitialContacts: (users) => set({ initialContacts: users }),
  setContactsFiltered: (users) => set({ contactsFiltered: users }),
}));
