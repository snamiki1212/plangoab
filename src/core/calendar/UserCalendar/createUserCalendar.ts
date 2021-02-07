import { UserCalendar, calendarId } from "./model";
import { ProfileStory } from "../../story/ProfileStory/ProfileStory";

type Story = ProfileStory;

export const createUserCalendar = ({
  stories = [],
}: {
  stories?: Story[];
}): UserCalendar => {
  return {
    id: calendarId,
    stories,
  };
};
