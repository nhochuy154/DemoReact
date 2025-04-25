import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/user.slice";
import productSlice from "./slice/product.slice";
export const store = configureStore({
  reducer: {
    hoTen: () => {
      return "Huy";
    },
    // Object Literal
    userSlice,
    productSlice,
  },
});
