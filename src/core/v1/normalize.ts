import { UserCalendar } from "~/src/core/v1/calendar/UserCalendar/model";
import { BaseStory } from "~/src/core/v1/story/BaseStory";
import { BaseResource } from "~/src/core/v1/resource/BaseResource";
import { BaseEvent } from "~/src/core/v1/event/BaseEvent";
import { PROFILE_ID } from "~/src/constants/fullcalendar";

// --------------------
// Calendar
// -----------------------
export const normalizeCalendar = (obj: UserCalendar) => {
  const stories = normalizeStoriesList(obj.stories);
  return {
    id: obj.id,
    stories,
  };
};

export type NormalizedUserCalendar = {
  id: string;
  stories: NormalizedStory[];
};

// --------------------
// Story
// -----------------------
export type NormalizedStory = {
  id: string;
  title: string;
  resources: NormalizedResource[];
};

const isProfileStory = (maybe: BaseStory) => maybe.id === PROFILE_ID;

const normalizeStoriesList = (list: BaseStory[]): NormalizedStory[] =>
  list
    .filter((item) => !isProfileStory(item))
    .map((item) => normalizeStory(item));

const normalizeStory = (obj: BaseStory): NormalizedStory => {
  const resources = normalizeResourcesList(obj.resources, obj.events);
  return {
    id: obj.id,
    title: obj.name,
    resources,
  };
};

// -----------------------
// Resource
// -----------------------
type NormalizedResource = {
  id: string;
  title: string;
  events: NormalizedEvent[];
  order: number;
};

const normalizeResourcesList = (
  resources: BaseResource[],
  events: BaseEvent[]
): NormalizedResource[] => {
  return resources.map((item) => {
    const thisEvents = events.filter((it) => it.resourceId === item.id);
    const normalizedEvents = normalizeEventsList(thisEvents);
    return {
      id: item.id,
      title: item.FIELD,
      order: item.order ?? 0,
      events: normalizedEvents,
    };
  });
};

// -----------------------
// Event
// -----------------------
type NormalizedEvent = {
  id: string;
  title: string;
  description: string;
  startedAt: string;
  endedAt: string;
  backgroundColor?: string;
};
const normalizeEventsList = (obj: BaseEvent[]): NormalizedEvent[] =>
  obj.map((it) => normalizeEvent(it));

const normalizeEvent = (obj: BaseEvent): NormalizedEvent => ({
  id: obj.id,
  title: obj.title,
  description: obj.extendedProps?.description ?? "",
  startedAt: obj.start as string,
  endedAt: obj.end as string,
  // options
  backgroundColor: obj.backgroundColor,
});

// -----------------------
