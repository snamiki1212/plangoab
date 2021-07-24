import {
  PrivateCollegeCalendar,
  PublicCollegeCalendar,
} from "@/core/calendar/TemplateCalendar/model";

export const createDummyPrivateCollegeCalendar = () =>
  "dummy private college calendar" as any as PrivateCollegeCalendar;
export const createDummyPublicCollegeCalendar = () =>
  "dummy public college calendar  " as any as PublicCollegeCalendar;

type DummyCalendar = any;
type DummyStory = any;
type DummyResource = any;

const createDummyCalendarId = (str: String | number) => `CALENDAR_${str}`;
const createDummyStoryId = (str: String | number) => `STORY_${str}`;
const createDummyResourceId = (str: String | number) => `RESOURCE_${str}`;

export const createDummyCalendar = ({ id }: { id: any }) =>
  ({ id: createDummyCalendarId(id) } as DummyCalendar);

export const createDummyStory = ({ id }: { id: any }) =>
  ({ id: createDummyStoryId(id) } as DummyStory);

export const createDummyResource = ({ id }: { id: any }) =>
  ({ id: createDummyResourceId(id) } as DummyResource);
