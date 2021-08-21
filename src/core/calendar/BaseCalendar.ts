import { BaseStory } from "@/core/story/BaseStory";
import { removeEvent as removeEventInStory } from "@/core/story/BaseStory";

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

export type TemplateOption = {
  schoolPeriod: number;
  coopPeriod: number;
  pgwpPeriod: number;
  workingholidayPeriod: number;
  monthsOfStartSchool: number[];
};
