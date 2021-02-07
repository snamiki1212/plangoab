import { BaseCalendar } from "../BaseCalendar";
import { CommunityCollegeAfterwardsWorkingHolidayStory } from "../../story/CommunityCollegeAfterwardsWorkingHolidayStory/CommunityCollegeAfterwardsWorkingHolidayStory";

type Story = CommunityCollegeAfterwardsWorkingHolidayStory;

export type CommunityCollegeAfterwardsWorkingHolidayCalendar = BaseCalendar;

export const CALENDAR_ID = "test"; // TODO:

export const createMyCalendar = ({
  stories = [],
}: {
  stories?: Story[];
}): CommunityCollegeAfterwardsWorkingHolidayCalendar => {
  return {
    id: CALENDAR_ID,
    stories,
  };
};
