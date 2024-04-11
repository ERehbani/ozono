import { create } from "zustand";
import axios from "axios";
import { persist } from "zustand/middleware";

export interface UserState {
  user: UserData | null; // Tipo del usuario, cambia esto al tipo real del usuario si lo tienes definido
  isAuthenticated: boolean;
  login: (values: Login) => Promise<boolean>;
  logout: () => void;
}

interface UserData {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  country: string;
  city: string;
  image: string;
}

interface Login {
  email: string;
  password: string;
}

const useUserStore = create(
  persist<UserState>(
    // Define el contexto global para el usuario
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (values: Login) => {
        try {
          const result = await axios.post(
            "http://localhost:3001/user/login",
            values
          );
          console.log(result);
          set({ user: result.data, isAuthenticated: true });
          return true;
        } catch (error) {
          console.error(error);
          return false;
        }
      },
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    // Configuración de persistencia
    {
      name: "userStore",
      getStorage: () => localStorage, // Puedes usar sessionStorage o localStorage
    }
  )
);

export default useUserStore;
