import { addMonths, addYears, setMonth } from "date-fns";
import {
  RESOURCE_ID__SHARED__AGE,
  RESOURCE_ID__SHARED__LIMIT,
} from "@/constants/fullcalendar/settings";
import { EVENTS } from "@/constants/fullcalendar/templates";
import { getRangeNumbers } from "@/lib/age";
import { uuid } from "@/lib/uuid";
import { createDate } from "@/lib/date";
import { WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE } from "@/constants/visa";
import { BaseEvent } from "@/core/event/BaseEvent";

type CreateProfileEventsParams = {
  startDate: Date;
  storyId: string;
  calendarId: string;
  withWorkingholiday: boolean;
  workingholidayPeriod: number;
};
export const createProfileEvents = ({
  startDate,
  storyId,
  calendarId,
  withWorkingholiday,
  workingholidayPeriod,
}: CreateProfileEventsParams): BaseEvent[] => {
  const workingHolidayLimitEvents = withWorkingholiday
    ? createWorkingHolidayLimitEvents({
        startDate,
        storyId,
        calendarId,
        workingholidayPeriod,
      })
    : [];

  // create age events
  const startYear = createDate(startDate).getFullYear();
  const endYear = getLastYear();
  const years = getRangeNumbers(startYear, endYear);
  const ageEventList = years.map((year, index) => {
    const start = (() => {
      startDate.setFullYear(year);
      const isoStr = startDate.toISOString();
      return isoStr;
    })();

    const end = addMonths(createDate(start), +11).toISOString();

    return {
      ...EVENTS.PROFILE.AGE(index),
      id: uuid(),
      start,
      end,
      storyId,
      resourceId: RESOURCE_ID__SHARED__AGE,
      extendedProps: {
        resourceId: RESOURCE_ID__SHARED__AGE,
        calendarId,
        storyId,
        description: "",
      },
    };
  });

  return [...workingHolidayLimitEvents, ...ageEventList];
};

const getLastYear = () => {
  const BUFFER_YEAR = 10;
  const date = createDate();
  return addYears(date, BUFFER_YEAR).getFullYear();
};

const createWorkingHolidayLimitEvents = ({
  startDate,
  storyId,
  calendarId,
  workingholidayPeriod,
}: {
  startDate: Date;
  storyId: string;
  calendarId: string;
  workingholidayPeriod: number;
}): BaseEvent[] => {
  const lastYearDate = addYears(
    startDate,
    WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE
  );
  const start = startDate.toISOString();
  const endDate = addMonths(lastYearDate, workingholidayPeriod);
  const endOfLimit = endDate.toISOString();
  const endOfApplication = addYears(setMonth(endDate, +6), -1).toISOString();

  const limitation = {
    ...EVENTS.PROFILE.WORKING_HOLIDAY,
    id: uuid(),
    start,
    end: endOfLimit,
    resourceId: RESOURCE_ID__SHARED__LIMIT,
    storyId,
    extendedProps: {
      resourceId: RESOURCE_ID__SHARED__LIMIT,
      storyId,
      calendarId,
      description: "",
    },
  };

  const application = {
    ...EVENTS.PROFILE.WORKING_HOLIDAY_APPLICATION_LIMIT,
    id: uuid(),
    start,
    end: endOfApplication,
    storyId,
    resourceId: RESOURCE_ID__SHARED__LIMIT,
    extendedProps: {
      storyId,
      resourceId: RESOURCE_ID__SHARED__LIMIT,
      calendarId,
      description: "",
    },
  };
  return [limitation, application];
};
