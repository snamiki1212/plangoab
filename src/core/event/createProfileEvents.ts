import { addMonths, addYears, setMonth } from "date-fns";

import {
  RESOURCE_ID__SHARED__AGE,
  RESOURCE_ID__SHARED__LIMIT,
} from "../../constants/fullcalendar/settings";
import { getRangeNumbers } from "../../lib/age";
import { uuid } from "../../lib/uuid";
import { convertIsoToDateTime } from "../../lib/date";
import { WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE } from "../../constants/visa";
import { BaseEvent } from "../event/BaseEvent";

export const createProfileEvents = ({
  startDate,
  storyId,
  calendarId,
}: {
  startDate: Date;
  storyId: string;
  calendarId: string;
}): BaseEvent[] => {
  // get year num
  const startYear = new Date(startDate).getFullYear();
  const endYear = getLastYear();

  // create years list
  const years = getRangeNumbers(startYear, endYear);

  const workingHolidayLimitEvents = createWorkingHolidayLimitEvents(
    startDate,
    storyId,
    calendarId
  );

  // create EventInput obj
  const ageEventList = years.map((year, index) => {
    const start = (() => {
      startDate.setFullYear(year);
      const isoStr = startDate.toISOString();
      const str = convertIsoToDateTime(isoStr);
      return str;
    })();

    const isoStr = addMonths(new Date(start), +11).toISOString();
    const end = convertIsoToDateTime(isoStr);

    return {
      id: uuid(),
      title: `Aage:${index}`,
      start,
      end,
      storyId,
      resourceId: RESOURCE_ID__SHARED__AGE,
      extendedProps: {
        resourceId: RESOURCE_ID__SHARED__AGE,
        calendarId,
        storyId,
      },
    };
  });

  return [...workingHolidayLimitEvents, ...ageEventList];
};

const getLastYear = () => {
  const BUFFER_YEAR = 10;
  const date = new Date();
  return addYears(date, BUFFER_YEAR).getFullYear();
};

const createWorkingHolidayLimitEvents = (
  birthday: Date,
  storyId: string,
  calendarId: string
): BaseEvent[] => {
  const lastYearDate = addYears(
    birthday,
    WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE
  );
  const start = convertIsoToDateTime(birthday.toISOString());
  const endDate = addMonths(lastYearDate, +11);
  const endOfLimit = convertIsoToDateTime(endDate.toISOString());
  const endOfApplication = convertIsoToDateTime(
    addYears(setMonth(endDate, +6), -1).toISOString()
  );

  const limitation = {
    id: uuid(),
    title: "Limitation till WorkingHoliday",
    start,
    end: endOfLimit,
    resourceId: RESOURCE_ID__SHARED__LIMIT,
    storyId,
    extendedProps: {
      resourceId: RESOURCE_ID__SHARED__LIMIT,
      storyId,
      calendarId,
    },
  };

  const application = {
    id: uuid(),
    title: "Application Limit",
    start,
    end: endOfApplication,
    storyId,
    resourceId: RESOURCE_ID__SHARED__LIMIT,
    extendedProps: {
      storyId,
      resourceId: RESOURCE_ID__SHARED__LIMIT,
      calendarId,
    },
  };
  return [limitation, application];
};
