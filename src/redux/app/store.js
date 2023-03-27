import { configureStore } from "@reduxjs/toolkit";
import numberSlice from "../numbers/numberSlice";

const store = configureStore({
  reducer: {
    numbers: numberSlice.reducer,
  },
});

export default store;
