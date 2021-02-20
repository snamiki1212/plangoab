import { addYears, addMonths } from "date-fns";
import { PrivateCollegeCalendar, calendarId } from "./model";
import { AGE_OF_START_STORY } from "../../../constants/fullcalendar/options";
import { WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE } from "../../../constants/visa";
import { COMMUNITY_COLLEGE_EXAMPLE1 } from "../../../constants/school";
import { range } from "../../../lib/util";
import { build } from "../../story/PrivateCollegeStory/build";
import { BaseStory } from "../../story/BaseStory";
import { TemplateOption } from "../BaseCalendar";

const startMonths = COMMUNITY_COLLEGE_EXAMPLE1.startMonths;

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
  return addingNumbers
    .map((num) => addYears(birth, num))
    .flatMap((startDate) => {
      const datesInYear = startMonths.map((month) =>
        addMonths(startDate, month)
      );
      return datesInYear;
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
