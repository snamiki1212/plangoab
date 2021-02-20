import { convertIsoToYearAndMonth } from "../../lib/date";
import { BaseEvent, initEvent } from "../event/BaseEvent";
import { BaseResource, initResource } from "../resource/BaseResource";
import { uuid } from "../../lib/uuid";

export type BaseStory = {
  id: string;
  calendarId: string;
  events: BaseEvent[];
  resources: BaseResource[];
  name: string;
};

export const removeEvent = (story: BaseStory, eventId: string): BaseStory => {
  const newEvents = story.events.filter((event) => event.id !== eventId);
  return { ...story, events: newEvents };
};

export const createStoryName = (birth: Date) => {
  return "from " + convertIsoToYearAndMonth(birth.toISOString());
};

export const initStory = (props?: Partial<BaseStory>): BaseStory => {
  const { id, calendarId: _calendarId, events, resources, name } = props ?? {};

  const storyId = id ?? uuid();
  const calendarId = _calendarId ?? uuid();
  const eventId = uuid();
  const _events = events ?? [initEvent({ id: eventId, storyId })];
  const _resources = resources ?? [initResource({ calendarId, storyId })];

  return {
    id: storyId,
    calendarId,
    events: _events,
    resources: _resources,
    name: name ?? "No Name",
  };
};

export const updateStory = (story: BaseStory, params: Partial<BaseStory>) => {
  if (!!params.name) story = { ...story, name: params.name };
  if (!!params.resources) {
    const newResources = params.resources.reduce((prev, curr) => {
      const idx = story.resources.findIndex(
        (resource) => resource.id === curr.id
      );

      const shouldCreate = idx === -1;
      if (shouldCreate) {
        // TODO: create case
        console.warn("not upsert feature on story yet");
        return prev;
      }

      // Update case
      const resource = story.resources[idx];
      const newResource = { ...resource, ...curr };
      return [...prev, newResource];
    }, [] as BaseResource[]);
    story = { ...story, resources: newResources };
  }
  if (!!params.calendarId) {
    story = {
      ...story,
      calendarId: params.calendarId,
      events: story.events.map((event) => ({
        ...event,
        calendarId: params.calendarId,
      })),
      resources: story.resources.map((resource) => ({
        ...resource,
        calendarId: params.calendarId as string,
      })),
    };
  }
  return story;
};
