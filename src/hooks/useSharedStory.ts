import React from "react";
import { getRangeNumbers } from "../lib/age";
import { addMonths, addYears } from "date-fns";
import { uuid } from "../lib/uuid";
import { convertIsoToDateTime } from "../lib/date";
import { EventInput } from "@fullcalendar/react";
import {
  RESOURCE_ID__SHARED__AGE,
  RESOURCE_ID__SHARED__LIMIT,
} from "../constants/fullcalendar/settings";
import { WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE } from "../constants/visa";
import { DEPRECATED_SHARED__RESOURCES } from "../constants/fullcalendar/templates";

const getLastYear = () => {
  const BUFFER_YEAR = 10;
  const date = new Date();
  return addYears(date, BUFFER_YEAR).getFullYear();
};

const createWorkingHolidayLimitEvent = (birthday: Date) => {
  const lastYearDate = addYears(
    birthday,
    WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE
  );
  const endDate = addMonths(lastYearDate, +11);
  const end = convertIsoToDateTime(endDate.toISOString());

  const start = convertIsoToDateTime(birthday.toISOString());
  const _event = {
    id: uuid(),
    resourceId: RESOURCE_ID__SHARED__LIMIT,
    title: "Limitation till WorkingHoliday",
    start,
    end,
  };
  return _event;
};

const _generate = (startDate: Date) => {
  // get year num
  const endYear = getLastYear();
  const startYear = new Date(startDate).getFullYear();

  // create years list
  const years = getRangeNumbers(startYear, endYear);

  const workingHolidayLimitEvent = createWorkingHolidayLimitEvent(startDate);

  // create EventInput obj
  const ageEventList = years.map<EventInput>((year, index) => {
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
      resourceId: RESOURCE_ID__SHARED__AGE,
      title: `Aage:${index}`,
      start,
      end,
    };
  });

  return [workingHolidayLimitEvent, ...ageEventList];
};

export const useSharedStory = () => {
  const [events, setEvents] = React.useState<EventInput[]>([]);

  const resources = DEPRECATED_SHARED__RESOURCES;

  const generate = React.useCallback((birthday: string | Date) => {
    const birthDate = new Date(birthday);
    const _events = _generate(birthDate);
    setEvents(_events);
  }, []);

  return [events, resources, generate] as const;
};
