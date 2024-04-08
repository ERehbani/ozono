import { create } from "zustand";
import { combine } from "zustand/middleware";
import axios from "axios";

type Store = {
  token: string | null;
  loading: boolean;
  error: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

export const useStore = create<Store>(
  combine(
    {
      token: null as string | null,
      loading: false,
      error: null as string | null,
    },
    (set) => ({
      login: async (username: string, password: string) => {
        set({ loading: true, error: null });
        try {
          const response = await axios.post("/api/login", {
            username,
            password,
          });
          set({ token: response.data.token, loading: false });
        } catch (error: any) {
          set({ error: error.message, loading: false });
        }
      },
      logout: () => {
        set({ token: null });
      },
    })
  )
);
