import { UserCalendar } from "./model";
import { ProfileStory } from "../../story/ProfileStory/model";

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
