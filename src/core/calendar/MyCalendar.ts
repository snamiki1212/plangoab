import { BaseCalendar } from "./BaseCalendar";
import { ProfileStory } from "../story/ProfileStory";
import { removeEvent as removeEventInStory } from "../story/BaseStroy";

type Story = ProfileStory;

export type MyCalendar = BaseCalendar;

export const createMyCalendar = ({
  stories = [],
}: {
  stories?: Story[];
}): MyCalendar => {
  return {
    stories,
  };
};

export const removeEvent = (obj: MyCalendar, eventId: string): MyCalendar => {
  const newStories = obj.stories.map<Story>((story) => {
    const newStory = removeEventInStory(story, eventId);
    return newStory;
  });
  return { ...obj, stories: newStories };
};
