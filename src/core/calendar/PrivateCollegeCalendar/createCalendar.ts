import { addYears, setMonth } from "date-fns";
import { PrivateCollegeCalendar, calendarId } from "./model";
import { AGE_OF_START_STORY } from "../../../constants/fullcalendar/options";
import { WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE } from "../../../constants/visa";
import { range } from "../../../lib/util";
import { build } from "../../story/PrivateCollegeStory/build";
import { BaseStory } from "../../story/BaseStory";
import { TemplateOption } from "../BaseCalendar";

const addingNumbers = range(
  AGE_OF_START_STORY,
  WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE
);

const generateStoryList = (
  {
    birth,
    calendarId,
    canWorkingholiday,
  }: {
    birth: Date;
    calendarId: string;
    canWorkingholiday: boolean;
  },
  options: TemplateOption
): BaseStory[] => {
  const monthsOfStartSchool = options.monthsOfStartSchool;

  return addingNumbers
    .map((num) => addYears(birth, num))
    .flatMap((startDate) => {
      const startDateListInYear = monthsOfStartSchool.map((month) =>
        setMonth(startDate, month - 1)
      );
      return startDateListInYear;
    })
    .map((startDate) => {
      const params = { startDate, calendarId, canWorkingholiday };
      return build(params, options);
    });
};

export const createCalendar = (
  {
    birth,
    canWorkingholiday,
  }: {
    birth: Date;
    canWorkingholiday: boolean;
  },
  options: TemplateOption
): PrivateCollegeCalendar => {
  const params = { birth, calendarId, canWorkingholiday };
  const stories = generateStoryList(params, options);
  return {
    id: calendarId,
    stories,
  };
};
