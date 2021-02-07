import { convertIsoToYearAndMonth } from "../../lib/date";
import { BaseEvent } from "../event/BaseEvent";
import { BaseResource } from "../resource/BaseResource";

export type BaseStory = {
  id: string;
  events: BaseEvent[];
  resources: BaseResource[];
  name: string;
};

export const removeEvent = (story: BaseStory, eventId: string): BaseStory => {
  const newEvents = story.events.filter((event) => event.id !== eventId);
  return { ...story, events: newEvents };
};

export const createStoryName = (birth: Date) => {
  return convertIsoToYearAndMonth(birth.toISOString());
};
