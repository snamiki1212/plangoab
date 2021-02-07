import { BaseStory } from "../story/BaseStroy";
import { removeEvent as removeEventInStory } from "../story/BaseStroy";

export type BaseCalendar = {
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
