import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import authSliceReducer from "./slices/auth.slice.js";
import tmdbSliceReducer from "./slices/tmdb.slice.js";
import bookingSliceReducer from "./slices/booking.slice.js";
import {
  FLUSH,
  PERSIST,
  persistCombineReducers,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
//

const persistConfig = {
  key: "userName",
  storage,
  // blacklist:"password"
};

const persistedReducer = persistCombineReducers(persistConfig, {
  auth: authSliceReducer,
  tmdb: tmdbSliceReducer,
  booking: bookingSliceReducer,
});

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [PERSIST, REHYDRATE, FLUSH, REGISTER, PURGE],
      },
    }),
});

export const persistedStore = persistStore(store);
export default store;
