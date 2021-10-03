import { calendarApi } from "~/src/redux/v2/services/calendarApi";

export const {
  useFetchCalendarsQuery,
  useCreateCalendarMutation,
  useFetchCalendarQuery,
} = calendarApi;
