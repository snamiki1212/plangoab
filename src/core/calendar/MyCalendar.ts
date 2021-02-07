import {
  ProfileStory,
  removeEvent as removeEventInStory,
} from "../story/ProfileStory";

type Story = ProfileStory;

export type MyCalendar = {
  stories: Story[];
};

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
