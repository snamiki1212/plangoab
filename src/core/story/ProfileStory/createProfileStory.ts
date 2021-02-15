import { addMonths, addYears } from "date-fns";
import { ProfileStory } from "./model";
import {
  PROFILE_ID,
  RESOURCE_ID__SHARED__AGE,
  RESOURCE_ID__SHARED__LIMIT,
} from "../../../constants/fullcalendar/settings";
import { DEPRECATED_SHARED__RESOURCES } from "../../../constants/fullcalendar/templates";
import { createStoryName } from "../BaseStory";
import { getRangeNumbers } from "../../../lib/age";
import { uuid } from "../../../lib/uuid";
import { convertIsoToDateTime } from "../../../lib/date";
import { WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE } from "../../../constants/visa";
import { BaseEvent } from "../../event/BaseEvent";

export const createProfileStory = ({
  birth,
  calendarId,
}: {
  birth: string | Date;
  calendarId: string;
}): ProfileStory => {
  const _birth = new Date(birth);

  const storyId = PROFILE_ID;

  return {
    id: storyId,
    calendarId,
    name: createStoryName(_birth),
    resources: DEPRECATED_SHARED__RESOURCES,
    events: generateEvents(_birth, storyId),
  };
};

const generateEvents = (startDate: Date, storyId: string): BaseEvent[] => {
  // get year num
  const endYear = getLastYear();
  const startYear = new Date(startDate).getFullYear();

  // create years list
  const years = getRangeNumbers(startYear, endYear);

  const workingHolidayLimitEvent = createWorkingHolidayLimitEvent(
    startDate,
    storyId
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
      resourceId: RESOURCE_ID__SHARED__AGE,
      title: `Aage:${index}`,
      storyId,
      start,
      end,
    };
  });

  return [workingHolidayLimitEvent, ...ageEventList];
};

const getLastYear = () => {
  const BUFFER_YEAR = 10;
  const date = new Date();
  return addYears(date, BUFFER_YEAR).getFullYear();
};

const createWorkingHolidayLimitEvent = (
  birthday: Date,
  storyId: string
): BaseEvent => {
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
    storyId,
    start,
    end,
  };
  return _event;
};
