import { UserCalendar } from "@/core/v1/calendar/UserCalendar/model";
import { ProfileStory } from "@/core/v1/story/ProfileStory/model";

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
