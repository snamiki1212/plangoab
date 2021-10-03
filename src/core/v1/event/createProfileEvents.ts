import { addMonths, addYears, setMonth } from "date-fns";
import {
  RESOURCE_ID__SHARED__AGE,
  RESOURCE_ID__SHARED__LIMIT,
  EVENTS,
} from "~/src/constants/fullcalendar";
import { getRangeNumbers } from "~/src/lib/age";
import { uuid } from "~/src/lib/uuid";
import { createDate } from "~/src/lib/date";
import { WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE } from "~/src/constants/visa";
import { BaseEvent } from "~/src/core/v1/event/BaseEvent";

// type BaseEventWithOptions = BaseEvent & { [key: string]: any };
type BaseEventWithOptions = any;

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
}: CreateProfileEventsParams): BaseEventWithOptions[] => {
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
    const item: BaseEventWithOptions = {
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

    return item;
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
}): BaseEventWithOptions[] => {
  const lastYearDate = addYears(
    startDate,
    WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE
  );
  const start = startDate.toISOString();
  const endDate = addMonths(lastYearDate, workingholidayPeriod);
  const endOfLimit = endDate.toISOString();
  const endOfApplication = addYears(setMonth(endDate, +6), -1).toISOString();

  const limitation: BaseEventWithOptions = {
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

  const application: BaseEventWithOptions = {
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
