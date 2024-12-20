import { configureStore } from "@reduxjs/toolkit";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import todoSlice from "./slices/todoSlice";

const persistConfig = {
  key: "root",
  storage: localStorage,
};

const persistedReducer = persistReducer(persistConfig, todoSlice.reducer);
const store = configureStore({
  reducer: {
    todos: persistedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistedStore = persistStore(store);

export default store;
