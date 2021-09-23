import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const calendarApiV1 = createApi({
  reducerPath: "calendarApiV1",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:3001/api/v1/",
  }),
  endpoints: (builder) => ({
    getCalendars: builder.query<any, any>({ query: () => "calendars" }),
  }),
});

export const { useGetCalendarsQuery } = calendarApiV1;
