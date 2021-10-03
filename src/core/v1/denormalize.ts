import { UserCalendar } from "~/src/core/v1/calendar/UserCalendar/model";
import { BaseStory } from "~/src/core/v1/story/BaseStory";
import { BaseResource } from "~/src/core/v1/resource/BaseResource";
import { BaseEvent } from "~/src/core/v1/event/BaseEvent";

// --------------------
// Calendar
// --------------------
export type ResponseCalendar = {
  id: string;
  stories: ResponseStory[];
};

export const denormalizeCalendar = (
  obj: ResponseCalendar | undefined
): UserCalendar => {
  if (obj == undefined) return undefined;
  const stories = denormalizeStoriesList(obj.stories, { calendarId: obj.id });
  return {
    id: obj.id,
    stories,
  };
};

// --------------------
// Story
// --------------------
export type ResponseStory = {
  id: string;
  title: string;
  resources: ResponseResource[];
};

type StoryParam = { calendarId: string };

// const isProfileStory = (maybe: BaseStory) => maybe.id === PROFILE_ID;

const denormalizeStoriesList = (
  list: ResponseStory[],
  params: StoryParam
): BaseStory[] => list.map((item) => denormalizeStory(item, params));

const denormalizeStory = (
  obj: ResponseStory,
  params: StoryParam
): BaseStory => {
  const resources = denormalizeResourcesList(obj.resources, {
    calendarId: params.calendarId,
    storyId: obj.id,
  });

  const events = obj.resources.flatMap((resource) =>
    denormalizeEventsList(resource.events, {
      calendarId: params.calendarId,
      storyId: obj.id,
      resourceId: resource.id,
    })
  );

  return {
    id: obj.id,
    calendarId: params.calendarId,
    name: obj.title,
    resources,
    events,
  };
};

// -----------------------
// Resource
// --------------------
type ResponseResource = {
  id: string;
  title: string;
  events: ResponseEvent[];
  order: number;
};

type ResourceParam = { calendarId: string; storyId: string };

const denormalizeResourcesList = (
  resources: ResponseResource[],
  params: ResourceParam
): BaseResource[] => {
  return resources.map((item) => denormalizeResource(item, params));
};

const denormalizeResource = (
  obj: ResponseResource,
  params: ResourceParam
): BaseResource => {
  return {
    id: obj.id,
    calendarId: params.calendarId,
    eventBorderColor: undefined,
    FIELD: obj.title,
    storyId: params.storyId,
    order: obj.order,
  };
};

// -----------------------
// Event
// --------------------
type ResponseEvent = {
  id: string;
  title: string;
  description: string;
  startedAt: string;
  endedAt: string;
  backgroundColor?: string;
};
type EventParam = { calendarId: string; storyId: string; resourceId: string };

const denormalizeEventsList = (
  list: ResponseEvent[],
  params: EventParam
): BaseEvent[] => list.map((item) => denormalizeEvent(item, params));

const denormalizeEvent = (
  obj: ResponseEvent,
  params: EventParam
): BaseEvent => {
  return {
    id: obj.id,
    calendarId: params.calendarId,
    resourceId: params.resourceId,
    storyId: params.storyId,
    title: obj.title,
    start: obj.startedAt,
    end: obj.endedAt,
    description: obj.description,
    // options
    backgroundColor: obj.backgroundColor,
    extendedProps: {
      calendarId: params.calendarId,
      storyId: params.storyId,
      resourceId: params.resourceId,
      description: obj.description ?? "",
    },
  };
};

// --------------------
