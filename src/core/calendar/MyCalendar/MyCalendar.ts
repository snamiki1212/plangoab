import { BaseCalendar } from "../BaseCalendar";
import { ProfileStory } from "../../story/ProfileStory/ProfileStory";
import { MY_CALENDAR_ID } from "../../../constants/fullcalendar/settings";

type Story = ProfileStory;

export const calendarId = MY_CALENDAR_ID;
export type MyCalendar = BaseCalendar;

export const createMyCalendar = ({
  stories = [],
}: {
  stories?: Story[];
}): MyCalendar => {
  return {
    id: calendarId,
    stories,
  };
};
