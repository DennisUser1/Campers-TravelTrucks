import { configureStore } from "@reduxjs/toolkit";
import { campersReducer } from "./slice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

const persistedReducer = persistReducer(persistConfig, campersReducer);

export const store = configureStore({
  reducer: {
    campers: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
