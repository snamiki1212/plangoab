import { addYears, setMonth, compareAsc } from "date-fns";
import {
  PrivateCollegeCalendar,
  PRIVATE_COLLEGE_CALENDAR_ID,
  PUBLIC_COLLEGE_CALENDAR_ID,
} from "./model";
import { AGE_OF_START_STORY } from "~/src/constants/fullcalendar";
import { WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE } from "~/src/constants/visa";
import { range } from "~/src/lib/util";
import { createDate } from "~/src/lib/date";
import { createPrivateCollegeStory } from "~/src/core/v1/story/PrivateCollegeStory/createPrivateCollegeStory";
import { createPublicCollegeStory } from "~/src/core/v1/story/PublicCollegeStory/createPublicCollegeStory";
import { BaseStory } from "~/src/core/v1/story/BaseStory";
import { TemplateOption } from "~/src/core/v1/calendar/BaseCalendar";

const scopeAges = range(
  AGE_OF_START_STORY,
  WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE
);

const shouldViewPast = false;
const now = createDate();

type CreateStoryListParams = {
  birth: Date;
  calendarId: string;
  canWorkingholiday: boolean;
  storyCreater: Function;
};
const createStoryList = (
  { birth, calendarId, canWorkingholiday, storyCreater }: CreateStoryListParams,
  options: TemplateOption
): BaseStory[] => {
  const monthsOfStartSchool = options.monthsOfStartSchool;

  return scopeAges
    .map((num) => addYears(birth, num))
    .filter((date) => {
      if (shouldViewPast) return true;
      const isPastPeriod = compareAsc(now, date) !== -1;
      return !isPastPeriod;
    })
    .flatMap((startDate) => {
      const startDateListInYear = monthsOfStartSchool.map((month) =>
        setMonth(startDate, month - 1)
      );
      return startDateListInYear;
    })
    .map((startDate) => {
      const params = { startDate, calendarId, canWorkingholiday };
      return storyCreater(params, options);
    });
};

type CreatePrivateCollegeCalendarParams = {
  birth: Date;
  canWorkingholiday: boolean;
};

export const createPrivateCollegeCalendar = (
  { birth, canWorkingholiday }: CreatePrivateCollegeCalendarParams,
  options: TemplateOption
): PrivateCollegeCalendar => {
  const params = {
    birth,
    calendarId: PRIVATE_COLLEGE_CALENDAR_ID,
    canWorkingholiday,
    storyCreater: createPrivateCollegeStory,
  };
  const stories = createStoryList(params, options);
  return {
    id: PRIVATE_COLLEGE_CALENDAR_ID,
    stories,
  };
};

type CreatePublicCollegeCalendarParams = {
  birth: Date;
  canWorkingholiday: boolean;
};
export const createPublicCollegeCalendar = (
  { birth, canWorkingholiday }: CreatePublicCollegeCalendarParams,
  options: TemplateOption
): PrivateCollegeCalendar => {
  const params = {
    birth,
    calendarId: PUBLIC_COLLEGE_CALENDAR_ID,
    canWorkingholiday,
    storyCreater: createPublicCollegeStory,
  };
  const stories = createStoryList(params, options);
  return {
    id: PUBLIC_COLLEGE_CALENDAR_ID,
    stories,
  };
};
