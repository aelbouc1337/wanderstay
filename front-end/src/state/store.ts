"use client";
import { configureStore } from "@reduxjs/toolkit";
import { bookingApi } from "./BookingSlice";

export const store = configureStore({
  reducer: {
    [bookingApi.reducerPath]: bookingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookingApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
