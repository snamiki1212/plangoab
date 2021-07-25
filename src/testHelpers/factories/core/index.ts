import {
  PrivateCollegeCalendar,
  PublicCollegeCalendar,
} from "@/core/calendar/TemplateCalendar/model";

export const createDummyPrivateCollegeCalendar = () =>
  "dummy private college calendar" as any as PrivateCollegeCalendar;
export const createDummyPublicCollegeCalendar = () =>
  "dummy public college calendar  " as any as PublicCollegeCalendar;

type DummyCalendar = any;

const createDummyCalendarId = (str: String | number) => `CALENDAR_${str}`;

export const createDummyCalendar = ({ id }: { id: any }) =>
  ({ id: createDummyCalendarId(id) } as DummyCalendar);
