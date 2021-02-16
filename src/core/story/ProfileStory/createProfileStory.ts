import { addMonths, addYears, setMonth } from "date-fns";
import { ProfileStory } from "./model";
import {
  PROFILE_ID,
  RESOURCE_ID__SHARED__AGE,
  RESOURCE_ID__SHARED__LIMIT,
} from "../../../constants/fullcalendar/settings";
import {
  FIELD1,
  FIELD2,
  NAME_OF_STORY_ID,
  NAME_OF_ORDER,
} from "../../../constants/fullcalendar/settings";
import { DARK_BLUE } from "../../../constants/fullcalendar/templates";
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
    resources: createResources({ calendarId, storyId }),
    events: generateEvents({ calendarId, storyId, startDate: _birth }),
  };
};

// TODO: move resource file
export const createResources = ({
  calendarId,
  storyId,
}: {
  calendarId: string;
  storyId: string;
}) => [
  {
    id: RESOURCE_ID__SHARED__AGE,
    [FIELD1]: "",
    [FIELD2]: "Age",
    [NAME_OF_STORY_ID]: storyId,
    [NAME_OF_ORDER]: 0,
    calendarId,
    eventBorderColor: DARK_BLUE,
  },
  {
    id: RESOURCE_ID__SHARED__LIMIT,
    [FIELD1]: "",
    [FIELD2]: "Working Holiday Application Limit",
    [NAME_OF_STORY_ID]: storyId,
    [NAME_OF_ORDER]: 1,
    calendarId,
    eventBorderColor: DARK_BLUE,
  },
];

// TODO: move evnet file
const generateEvents = ({
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

// TODO: move event file
const createWorkingHolidayLimitEvents = (
  birthday: Date,
  storyId: string
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

  const calendarId = "TODO";
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
