import { BaseStory } from "../story/BaseStory";
import { removeEvent as removeEventInStory } from "../story/BaseStory";

export type BaseCalendar = {
  id: string;
  stories: BaseStory[];
};

export const removeEvent = (
  obj: BaseCalendar,
  eventId: string
): BaseCalendar => {
  const newStories = obj.stories.map<BaseStory>((story) => {
    const newStory = removeEventInStory(story, eventId);
    return newStory;
  });
  return { ...obj, stories: newStories };
};
