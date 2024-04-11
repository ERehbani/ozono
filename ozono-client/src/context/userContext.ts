import create from "zustand";

interface User {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  country: string;
  city: string;
  __v: number;
}

const useGlobalUser = create((set) => ({
  user: null,

  // Función para actualizar el usuario
  setUser: (user: User) => set({ user }),
}));

// **Crucially, export the function:**
export default useGlobalUser;
