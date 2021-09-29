import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Deserializer } from "jsonapi-serializer";

const deserializer = new Deserializer({});

export const calendarApiV2 = createApi({
  reducerPath: "calendarApiV2",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:3001/api/v1/",
  }),
  endpoints: (builder) => ({
    fetchCalendars: builder.query<any, any>({
      query: () => ({
        url: "calendars",
      }),
      transformResponse: (response) => {
        const deserialized = deserializer.deserialize(response, (err, data) => {
          if (err) throw new Error(`Invalid when to transformResponse: ${err}`);
          return data;
        });
        return deserialized;
      },
    }),
  }),
});

export const { useFetchCalendarsQuery } = calendarApiV2;
