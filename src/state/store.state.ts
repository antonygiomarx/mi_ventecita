import { atom } from "recoil";

export const storeState = atom({
  key: "storeState",
  default: {
    products: [],
  },
});
