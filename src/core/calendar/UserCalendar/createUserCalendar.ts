import { UserCalendar } from "@/core/calendar/UserCalendar/model";
import { ProfileStory } from "@/core/story/ProfileStory/model";

type Story = ProfileStory;

export const createUserCalendar = ({
  id,
  stories,
}: {
  id: string;
  stories: Story[];
}): UserCalendar => {
  return {
    id,
    stories,
  };
};
