import React from "react";
import { addYears, addMonths } from "date-fns";
import { CommunityCollegeAfterwardsWorkingHolidayStory } from "../core/story/CommunityCollegeAfterwardsWorkingHolidayStory";
import { COMMUNITY_COLLEGE_EXAMPLE1 } from "../constants/school";
import { AGE_OF_START_STORY } from "../constants/fullcalendar/options";
import { WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE } from "../constants/visa";
import { range } from "../lib/util";

type Story = any;

const addingNumbers = range(
  AGE_OF_START_STORY,
  WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE
);

const startMonths = COMMUNITY_COLLEGE_EXAMPLE1.startMonths;

export const useStoryList = () => {
  const [stories, setStories] = React.useState<Story[]>([]);

  const generate = React.useCallback((_birth: string) => {
    const birth = new Date(_birth);

    const startDates = addingNumbers
      .map((num) => addYears(birth, num))
      .flatMap((startDate) => {
        const datesInYear = startMonths.map((month) =>
          addMonths(startDate, month)
        );
        return datesInYear;
      });

    const _stories = startDates.map(
      (startDate) =>
        new CommunityCollegeAfterwardsWorkingHolidayStory(startDate)
    );
    setStories(_stories);
  }, []);

  return { stories, generate } as const;
};
