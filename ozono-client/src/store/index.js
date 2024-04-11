import { createWithEqualityFn } from "zustand/traditional";
import { userStore } from "./userStore";

export const useBoundStore = createWithEqualityFn((...a) => ({
  ...userStore(...a),
}));
