"use client";
import { Booking, Listing } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API slice with endpoints
export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getAvailableListings: builder.query<Listing[], string>({
      query: (location) => `listings?location=${location}`, // Query listings by location
    }),
    createBooking: builder.mutation<void, Booking>({
      query: (newBooking) => ({
        url: "bookings",
        method: "POST",
        body: newBooking,
      }),
    }),
  }),
});

export const { useGetAvailableListingsQuery, useCreateBookingMutation } =
  bookingApi;
