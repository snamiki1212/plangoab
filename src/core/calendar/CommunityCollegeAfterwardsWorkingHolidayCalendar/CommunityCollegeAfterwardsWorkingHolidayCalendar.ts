import { BaseCalendar } from "../BaseCalendar";
import { CommunityCollegeAfterwardsWorkingHolidayStory } from "../../story/CommunityCollegeAfterwardsWorkingHolidayStory/CommunityCollegeAfterwardsWorkingHolidayStory";
import { COMMUNITY_COLLEGE_AFTERWARDS_WORKING_HOLIDAY_CALENDAR_ID } from "../../../constants/fullcalendar/settings";

type Story = CommunityCollegeAfterwardsWorkingHolidayStory;

export type CommunityCollegeAfterwardsWorkingHolidayCalendar = BaseCalendar;

export const calendarId = COMMUNITY_COLLEGE_AFTERWARDS_WORKING_HOLIDAY_CALENDAR_ID;

export const createMyCalendar = ({
  stories = [],
}: {
  stories?: Story[];
}): CommunityCollegeAfterwardsWorkingHolidayCalendar => {
  return {
    id: calendarId,
    stories,
  };
};
