import { addYears, addMonths } from "date-fns";
import { CommunityCollegeCalendar, calendarId } from "./model";
import { AGE_OF_START_STORY } from "../../../constants/fullcalendar/options";
import { WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE } from "../../../constants/visa";
import { COMMUNITY_COLLEGE_EXAMPLE1 } from "../../../constants/school";
import { range } from "../../../lib/util";
import { build } from "../../story/CommunityCollegeStory/build";
import { BaseStory } from "../../story/BaseStory";

const startMonths = COMMUNITY_COLLEGE_EXAMPLE1.startMonths;

const addingNumbers = range(
  AGE_OF_START_STORY,
  WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE
);

const generateStoryList = ({
  birth,
  calendarId,
  canWorkingholiday,
}: {
  birth: Date;
  calendarId: string;
  canWorkingholiday: boolean;
}): BaseStory[] => {
  return addingNumbers
    .map((num) => addYears(birth, num))
    .flatMap((startDate) => {
      const datesInYear = startMonths.map((month) =>
        addMonths(startDate, month)
      );
      return datesInYear;
    })
    .map((startDate) => {
      return build({ startDate, calendarId, canWorkingholiday });
    });
};

export const createCalendar = ({
  birth,
  canWorkingholiday,
}: {
  birth: Date;
  canWorkingholiday: boolean;
}): CommunityCollegeCalendar => {
  const stories = generateStoryList({ birth, calendarId, canWorkingholiday });
  return {
    id: calendarId,
    stories,
  };
};