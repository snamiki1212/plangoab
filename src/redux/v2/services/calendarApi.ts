import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { deserializer as calendarListDeserializer } from "~/src/redux/v2/serializer/calendarList";
import { deserializer as calendarDetailDeserializer } from "~/src/redux/v2/serializer/calendarDetail";

export const calendarApi = createApi({
  reducerPath: "calendarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:3001/api/v1/",
  }),
  endpoints: (builder) => ({
    fetchCalendars: builder.query<any, any>({
      query: () => ({
        url: "calendars",
      }),
      transformResponse: (response) => {
        const deserialized = calendarListDeserializer.deserialize(
          response,
          (err, data) => {
            if (err)
              throw new Error(
                `Invalid deserialize calendar lsit when doing transformResponse: ${err}`
              );
            return data;
          }
        );
        return deserialized;
      },
    }),
    fetchCalendar: builder.query<any, any>({
      query: (id: string) => ({
        url: `calendars/${id}`,
      }),
      transformResponse: (response) => {
        const deserialized = calendarDetailDeserializer.deserialize(
          response,
          (err, data) => {
            if (err)
              throw new Error(
                `Invalid deserialize calendar detail when doing transformResponse: ${err}`
              );
            return data;
          }
        );
        return deserialized;
      },
    }),
    createCalendar: builder.mutation<any, any>({
      query: ({ id, ...params }) => ({
        url: `calendars`,
        method: "POST",
        body: params,
      }),
    }),
  }),
});

export const {
  useFetchCalendarsQuery,
  useCreateCalendarMutation,
  useFetchCalendarQuery,
} = calendarApi;
