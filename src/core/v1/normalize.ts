import { UserCalendar } from "@/core/v1/calendar/UserCalendar/model";
import { BaseStory } from "@/core/v1/story/BaseStory";
import { BaseResource } from "@/core/v1/resource/BaseResource";
import { BaseEvent } from "@/core/v1/event/BaseEvent";
import { PROFILE_ID } from "@/constants/fullcalendar";

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
export type NormalizedStory = {
  id: string;
  name: string;
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
    name: obj.name,
    resources,
  };
};

// -----------------------
// Resource
type NormalizedResource = {
  id: string;
  FIELD: string;
  eventBorderColor?: string;
  order?: number;
  events: NormalizedEvent[];
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
      FIELD: item.FIELD,
      eventBorderColor: item.eventBorderColor,
      order: item.order,
      events: normalizedEvents,
    };
  });
};

// -----------------------
// Event
type NormalizedEvent = {
  id: string;
  title: string;
  start: string;
  end: string;
  backgroundColor?: string;
  description?: string;
};
const normalizeEventsList = (obj: BaseEvent[]): NormalizedEvent[] =>
  obj.map((it) => normalizeEvent(it));

const normalizeEvent = (obj: BaseEvent): NormalizedEvent => ({
  id: obj.id,
  title: obj.title,
  start: obj.start as string,
  end: obj.end as string,
  // options
  backgroundColor: obj.backgroundColor,
  description: obj.extendedProps?.description,
});
