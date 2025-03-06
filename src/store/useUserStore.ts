import { create } from "zustand";
import axios from "axios";

// Define types
interface User {
  id: number;
  name: string;
  email: string;
}

interface UserStore {
  users: User[];
  fetchUsers: () => Promise<void>;
  addUser: (name: string, email: string) => Promise<void>;
}

// Zustand Store
const useUserStore = create<UserStore>((set) => ({
  users: [],
  fetchUsers: async () => {
    const { data } = await axios.get<User[]>("http://localhost:3002/users");
    set({ users: data });
  },
  addUser: async (name, email) => {
    const { data } = await axios.post<User>("http://localhost:3002/users", {
      name,
      email,
    });
    set((state) => ({ users: [...state.users, data] }));
  },
}));

export default useUserStore;
