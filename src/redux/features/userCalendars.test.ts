import { toStr } from "@/testHelpers/index";
import reducer, {
  // selectors
  selectUserCalendar,
  selectStoryByIdFilter,
  selectEventByIdFilter,

  // actions
  addEventAction,
  addStoryAction,
  removeEventAction,
  removeStoryAction,
  resetAction,
  updateEventAction,
  updateStoryAction,
  updateCalendarsAction,
  updateResourcesAction,
  pushResourceAction,
  removeCalendarAction,
  removeResourceAction,
} from "./userCalendars";
import { RootState } from "../rootReducer";
import {
  createDummyCalendar,
  createDummyStory,
} from "@/testHelpers/factories/core";
import { eventFactory } from "@/testHelpers/factories/core/event";
import { resourceFactory } from "@/testHelpers/factories/core/resource";

const deepClone = (obj: Object) => JSON.parse(JSON.stringify(obj));
const createRootState = (partialState: any) =>
  ({ features: { userCalendars: { calendars: partialState } } } as RootState);

const initialState = { calendars: [] };

describe(toStr({ reducer }), () => {
  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });
  describe(toStr({ resetAction }), () => {
    it("can work.", () => {
      const befState = { calendars: ["dummy", "dummy"] as any[] };
      const aftState = initialState;
      expect(reducer(befState, resetAction())).toEqual(aftState);
    });
  });

  describe("Event of", () => {
    describe(toStr({ addEventAction }), () => {
      // Dummy
      const dummyEvents = Array.from({ length: 3 }).map(() =>
        eventFactory.build()
      );
      const dummyStories = Array.from({ length: 3 }).map((_, idx) => {
        const story = createDummyStory({ id: idx });
        story.events = dummyEvents;
        return story;
      });
      const dummyCalendar = (() => {
        const calendar = createDummyCalendar({ id: "id1" });
        calendar.stories = dummyStories;
        return calendar;
      })();
      const newEvent = eventFactory.build();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });
      it("can work.", () => {
        const targetStoryIdx = 1;
        const aftCalendar = (() => {
          const calendar = deepClone(dummyCalendar);
          calendar.stories[targetStoryIdx].events = [
            ...calendar.stories[targetStoryIdx].events,
            newEvent,
          ];
          return calendar;
        })();

        // payload
        const calendar = dummyCalendar;
        const story = dummyStories[targetStoryIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
          event: newEvent,
        };

        const befState = { calendars: [dummyCalendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, addEventAction(payload))).toEqual(aftState);
      });

      it("cannot work when invalid calendarId.", () => {
        const invalidCalendarId = "Invalid calendar id";
        const targetStoryIdx = 1;
        const story = dummyStories[targetStoryIdx];
        const payload = {
          calendarId: invalidCalendarId,
          storyId: story.id,
          event: newEvent,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, addEventAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          `cannot find calendar on addEvent`,
          invalidCalendarId
        );
      });
      it("cannot work when invalid storyId.", () => {
        const invalidStoryId = "Invalid calendar id";
        const payload = {
          calendarId: dummyCalendar.id,
          storyId: invalidStoryId,
          event: newEvent,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, addEventAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          `cannot find story on addEvent`,
          invalidStoryId
        );
      });
    });

    describe(toStr({ removeEventAction }), () => {
      // Dummy
      const dummyEvents = Array.from({ length: 3 }).map((_) =>
        eventFactory.build()
      );
      const dummyStories = Array.from({ length: 3 }).map((_, idx) => {
        const story = createDummyStory({ id: idx });
        story.events = dummyEvents;
        return story;
      });
      const dummyCalendar = (() => {
        const calendar = createDummyCalendar({ id: "id1" });
        calendar.stories = dummyStories;
        return calendar;
      })();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });
      it("can work.", () => {
        const targetStoryIdx = 1;
        const targetEventIdx = 0;
        const aftCalendar = (() => {
          const calendar = deepClone(dummyCalendar);
          calendar.stories[targetStoryIdx].events.splice(targetEventIdx, 1);
          return calendar;
        })();

        // payload
        const calendar = dummyCalendar;
        const story = dummyStories[targetStoryIdx];
        const event = dummyEvents[targetEventIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
          eventId: event.id,
        };

        const befState = { calendars: [dummyCalendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, removeEventAction(payload))).toEqual(aftState);
      });
      it("cannot work when invalid calendar id.", () => {
        const targetStoryIdx = 1;
        const targetEventIdx = 0;
        const invalidCalendarId = "invalid calendar id";

        // payload
        const story = dummyStories[targetStoryIdx];
        const event = dummyEvents[targetEventIdx];
        const payload = {
          calendarId: invalidCalendarId,
          storyId: story.id,
          eventId: event.id,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, removeEventAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find calendar on removeEvent",
          invalidCalendarId
        );
      });
      it("cannot work when invalid story id.", () => {
        const targetEventIdx = 0;
        const invalidStoryId = "invalid story id";

        // payload
        const calendar = dummyCalendar;
        const event = dummyEvents[targetEventIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: invalidStoryId,
          eventId: event.id,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, removeEventAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find story on removeEvent",
          invalidStoryId
        );
      });
    });

    describe(toStr({ updateEventAction }), () => {
      // Dummy
      const dummyEvents = Array.from({ length: 3 }).map((_, idx) =>
        eventFactory.build()
      );
      const dummyStories = Array.from({ length: 3 }).map((_, idx) => {
        const story = createDummyStory({ id: idx });
        story.events = dummyEvents;
        return story;
      });
      const dummyCalendar = (() => {
        const calendar = createDummyCalendar({ id: "id1" });
        calendar.stories = dummyStories;
        return calendar;
      })();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });
      it("can work.", () => {
        const newEvent = eventFactory.build();
        const targetStoryIdx = 1;
        const targetEventIdx = 0;
        const aftCalendar = (() => {
          const calendar = deepClone(dummyCalendar);
          calendar.stories[targetStoryIdx].events[targetEventIdx] = newEvent;
          return calendar;
        })();

        // payload
        const calendar = dummyCalendar;
        const story = dummyStories[targetStoryIdx];
        const event = dummyEvents[targetEventIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
          eventId: event.id,
          newEvent,
        };

        const befState = { calendars: [dummyCalendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, updateEventAction(payload))).toEqual(aftState);
      });
      it("cannot work when invalid calendar id.", () => {
        const invalidCalendarId = "invalid calendar id";
        const newEvent = eventFactory.build();
        const targetStoryIdx = 1;
        const targetEventIdx = 0;

        // payload
        const story = dummyStories[targetStoryIdx];
        const event = dummyEvents[targetEventIdx];
        const payload = {
          calendarId: invalidCalendarId,
          storyId: story.id,
          eventId: event.id,
          newEvent,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, updateEventAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find calendar on updateEvent",
          invalidCalendarId
        );
      });
      it("cannot work when invalid story id.", () => {
        const invalidStoryId = "invalid story id";
        const newEvent = eventFactory.build();
        const targetEventIdx = 0;

        // payload
        const calendar = dummyCalendar;
        const event = dummyEvents[targetEventIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: invalidStoryId,
          eventId: event.id,
          newEvent,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, updateEventAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find story on updateEvent",
          invalidStoryId
        );
      });
      it("cannot work when invalid event id.", () => {
        const invalidEventId = "invalid event id";
        const newEvent = eventFactory.build();
        const targetStoryIdx = 1;

        // payload
        const calendar = dummyCalendar;
        const story = dummyStories[targetStoryIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
          eventId: invalidEventId,
          newEvent,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, updateEventAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find event on updateEvent",
          invalidEventId
        );
      });
    });
  });

  describe("Story of", () => {
    describe(toStr({ addStoryAction }), () => {
      // Dummy
      const dummyEvents = Array.from({ length: 3 }).map(() =>
        eventFactory.build()
      );
      const dummyStories = Array.from({ length: 3 }).map((_, idx) => {
        const story = createDummyStory({ id: idx });
        story.events = dummyEvents;
        return story;
      });
      const dummyCalendar = (() => {
        const calendar = createDummyCalendar({ id: "id1" });
        calendar.stories = dummyStories;
        return calendar;
      })();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });
      it("can work.", () => {
        const newStory = createDummyStory({ id: "created" });
        const aftCalendar = (() => {
          const calendar = deepClone(dummyCalendar);
          calendar.stories.push(newStory);
          return calendar;
        })();

        // payload
        const calendar = dummyCalendar;
        const payload = {
          calendarId: calendar.id,
          story: newStory,
        };

        const befState = { calendars: [dummyCalendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, addStoryAction(payload))).toEqual(aftState);
      });
      it("cannot work when invalid calendar id.", () => {
        const invalidCalendarId = "invalid calendar id";
        const newStory = createDummyStory({ id: "created" });

        // payload
        const payload = {
          calendarId: invalidCalendarId,
          story: newStory,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, addStoryAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find calendar on addStory",
          invalidCalendarId
        );
      });
    });

    describe(toStr({ removeStoryAction }), () => {
      // Dummy
      const dummyEvents = Array.from({ length: 3 }).map(() =>
        eventFactory.build()
      );
      const dummyStories = Array.from({ length: 3 }).map((_, idx) => {
        const story = createDummyStory({ id: idx });
        story.events = dummyEvents;
        return story;
      });
      const dummyCalendar = (() => {
        const calendar = createDummyCalendar({ id: "id1" });
        calendar.stories = dummyStories;
        return calendar;
      })();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });
      it("can work.", () => {
        const targetStoryIdx = 1;
        const aftCalendar = (() => {
          const calendar = deepClone(dummyCalendar);
          calendar.stories.splice(targetStoryIdx, 1); // remove
          return calendar;
        })();

        // payload
        const calendar = dummyCalendar;
        const story = dummyStories[targetStoryIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
        };

        const befState = { calendars: [dummyCalendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, removeStoryAction(payload))).toEqual(aftState);
      });
      it("cannot work when invalid calendar id.", () => {
        const invalidCalendarId = "invalid calendar id";
        const targetStoryIdx = 1;

        // payload
        const story = dummyStories[targetStoryIdx];
        const payload = {
          calendarId: invalidCalendarId,
          storyId: story.id,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, removeStoryAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find calendar on removeStory",
          invalidCalendarId
        );
      });
    });

    describe(toStr({ updateStoryAction }), () => {
      // Dummy
      const dummyEvents = Array.from({ length: 3 }).map(() =>
        eventFactory.build()
      );
      const dummyStories = Array.from({ length: 3 }).map((_, idx) => {
        const story = createDummyStory({ id: idx });
        story.events = dummyEvents;
        return story;
      });
      const dummyCalendar = (() => {
        const calendar = createDummyCalendar({ id: "id1" });
        calendar.stories = dummyStories;
        return calendar;
      })();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });
      it("can work.", () => {
        const updatedStory = createDummyStory({ id: "updated" });
        const targetStoryIdx = 1;
        const aftCalendar = (() => {
          const calendar = deepClone(dummyCalendar);
          calendar.stories[targetStoryIdx] = updatedStory;
          return calendar;
        })();

        // payload
        const calendar = dummyCalendar;
        const story = dummyStories[targetStoryIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
          newStory: updatedStory,
        };

        const befState = { calendars: [dummyCalendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, updateStoryAction(payload))).toEqual(aftState);
      });
      it("cannot work when invalid calendar id.", () => {
        const invalidCalendarId = "invalid calendad id";
        const updatedStory = createDummyStory({ id: "updated" });
        const targetStoryIdx = 1;

        // payload
        const story = dummyStories[targetStoryIdx];
        const payload = {
          calendarId: invalidCalendarId,
          storyId: story.id,
          newStory: updatedStory,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, updateStoryAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find calendar on updateStory",
          invalidCalendarId
        );
      });
      it("cannot work when invalid story id.", () => {
        const invalidStoryId = "invalid story id";
        const updatedStory = createDummyStory({ id: "updated" });

        // payload
        const calendar = dummyCalendar;
        const payload = {
          calendarId: calendar.id,
          storyId: invalidStoryId,
          newStory: updatedStory,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, updateStoryAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find story on updateStory",
          invalidStoryId
        );
      });
    });
  });

  describe("Resource of", () => {
    describe(toStr({ pushResourceAction }), () => {
      // Dummy
      const dummyResources = Array.from({ length: 3 }).map(() =>
        resourceFactory.build()
      );
      const dummyStories = Array.from({ length: 3 }).map((_, idx) => {
        const story = createDummyStory({ id: idx });
        story.resources = dummyResources;
        return story;
      });
      const dummyCalendar = (() => {
        const calendar = createDummyCalendar({ id: "id1" });
        calendar.stories = dummyStories;
        return calendar;
      })();
      const newResource = resourceFactory.build();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });

      it("can work.", () => {
        const targetStoryIdx = 1;
        const aftCalendar = (() => {
          const calendar = deepClone(dummyCalendar);
          calendar.stories[targetStoryIdx].resources = [
            ...calendar.stories[targetStoryIdx].resources,
            newResource,
          ];
          return calendar;
        })();

        // payload
        const calendar = dummyCalendar;
        const story = dummyStories[targetStoryIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
          resource: newResource,
        };

        const befState = { calendars: [dummyCalendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, pushResourceAction(payload))).toEqual(
          aftState
        );
      });

      it("cannot work when invalid calendarId using.", () => {
        const targetStoryIdx = 1;
        const invalidCalendarId = "invalid calendar id";

        // payload
        const story = dummyStories[targetStoryIdx];
        const payload = {
          calendarId: invalidCalendarId,
          storyId: story.id,
          resource: newResource,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, pushResourceAction(payload))).toEqual(
          befState
        );
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          `Cannot find calendar on pushResource`,
          invalidCalendarId
        );
      });

      it("cannot work when invalid storyId using.", () => {
        const invalidStoryId = "invalid story id";

        // payload
        const calendar = dummyCalendar;
        const payload = {
          calendarId: calendar.id,
          storyId: invalidStoryId,
          resource: newResource,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, pushResourceAction(payload))).toEqual(
          befState
        );
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          `Cannot find story on pushResource`,
          invalidStoryId
        );
      });
    });

    describe(toStr({ removeResourceAction }), () => {
      // Dummy
      const dummyResources = Array.from({ length: 3 }).map(() =>
        resourceFactory.build()
      );
      const dummyStories = Array.from({ length: 3 }).map((_, idx) => {
        const story = createDummyStory({ id: idx });
        story.resources = dummyResources;
        return story;
      });
      const dummyCalendar = (() => {
        const calendar = createDummyCalendar({ id: "id1" });
        calendar.stories = dummyStories;
        return calendar;
      })();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });

      it("can work.", () => {
        const targetStoryIdx = 0;
        const targetResourceIdx = 1;
        const aftCalendar = (() => {
          const calendar = deepClone(dummyCalendar);
          calendar.stories[targetStoryIdx].resources.splice(
            targetResourceIdx,
            1
          ); // remove mutably
          return calendar;
        })();

        // payload
        const calendar = dummyCalendar;
        const story = dummyStories[targetStoryIdx];
        const resource = dummyResources[targetResourceIdx];
        const payload = {
          calendarId: calendar.id,
          resourceId: resource.id,
          storyId: story.id,
        };

        const befState = { calendars: [dummyCalendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, removeResourceAction(payload))).toEqual(
          aftState
        );
      });
      it("cannot work because not find calendar", () => {
        const invalidCalendarId = "invalid calendar id";
        const targetStoryIdx = 0;
        const targetResourceIdx = 1;

        // payload
        const story = dummyStories[targetStoryIdx];
        const resource = dummyResources[targetResourceIdx];
        const payload = {
          calendarId: invalidCalendarId,
          resourceId: resource.id,
          storyId: story.id,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, removeResourceAction(payload))).toEqual(
          befState
        );
      });
      it("cannot work because not find story", () => {
        const invalidStoryId = "invalid story id";
        const targetResourceIdx = 1;

        // payload
        const calendar = dummyCalendar;
        const resource = dummyResources[targetResourceIdx];
        const payload = {
          calendarId: calendar.id,
          resourceId: resource.id,
          storyId: invalidStoryId,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, removeResourceAction(payload))).toEqual(
          befState
        );
      });

      it("cannot work because not resource id.", () => {
        const invalidResourceId = "invalid resource id";
        const targetStoryId = 0;

        // payload
        const calendar = dummyCalendar;
        const story = dummyStories[targetStoryId];
        const payload = {
          calendarId: calendar.id,
          resourceId: invalidResourceId,
          storyId: story.id,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, removeResourceAction(payload))).toEqual(
          befState
        );
      });
    });

    describe(toStr({ updateResourcesAction }), () => {
      // Dummy
      const dummyResources = Array.from({ length: 3 }).map(() =>
        resourceFactory.build()
      );
      const dummyStories = Array.from({ length: 3 }).map((_, idx) => {
        const story = createDummyStory({ id: idx });
        story.resources = dummyResources;
        return story;
      });
      const dummyCalendar = (() => {
        const calendar = createDummyCalendar({ id: "id1" });
        calendar.stories = dummyStories;
        return calendar;
      })();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });

      it("can work.", () => {
        const updatedResources = Array.from({ length: 3 }).map(() =>
          resourceFactory.build()
        );
        const targetStoryIdx = 0;
        const aftCalendar = (() => {
          const calendar = deepClone(dummyCalendar);
          calendar.stories[targetStoryIdx].resources = updatedResources;
          return calendar;
        })();

        // payload
        const calendar = dummyCalendar;
        const story = dummyStories[targetStoryIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
          newResources: updatedResources,
        };

        const befState = { calendars: [dummyCalendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, updateResourcesAction(payload))).toEqual(
          aftState
        );
      });
      it("cannot work when to invalid calendarId.", () => {
        const updatedResources = Array.from({ length: 3 }).map(() =>
          resourceFactory.build()
        );
        const targetStoryIdx = 1;
        const invalidCalendarId = "invalid calendar id";

        // payload
        const story = dummyStories[targetStoryIdx];
        const payload = {
          calendarId: invalidCalendarId,
          storyId: story.id,
          newResources: updatedResources,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, updateResourcesAction(payload))).toEqual(
          befState
        );
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find calendar on updateResource",
          invalidCalendarId
        );
      });
      it("cannot work when to invalid storyId.", () => {
        const updatedResources = Array.from({ length: 3 }).map(() =>
          resourceFactory.build()
        );
        const invalidStoryId = "invalid story id";

        // payload
        const calendar = dummyCalendar;
        const payload = {
          calendarId: calendar.id,
          storyId: invalidStoryId,
          newResources: updatedResources,
        };

        const befState = { calendars: [dummyCalendar] };
        expect(reducer(befState, updateResourcesAction(payload))).toEqual(
          befState
        );
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find story on updateResource",
          invalidStoryId
        );
      });
    });
  });

  describe("Calendar of", () => {
    describe(toStr({ removeCalendarAction }), () => {
      it("can work.", () => {
        const id1 = "this is dummy1";
        const id2 = "this is dummy2";
        const dummyCalendar1 = createDummyCalendar({ id: id1 });
        const dummyCalendar2 = createDummyCalendar({ id: id2 });
        const befState = { calendars: [dummyCalendar1, dummyCalendar2] };
        const aftState = { calendars: [dummyCalendar1] };
        expect(
          reducer(
            befState,
            removeCalendarAction({ calendarId: dummyCalendar2.id })
          )
        ).toEqual(aftState);
      });
    });
    describe(toStr({ updateCalendarsAction }), () => {
      it("can work.", () => {
        const dummyCalendar1 = createDummyCalendar({ id: "id1" });
        const dummyCalendar2 = createDummyCalendar({ id: "id2" });
        const befState = { calendars: [dummyCalendar1] };
        const aftState = {
          calendars: [dummyCalendar2, dummyCalendar1, dummyCalendar2],
        };
        const props = [dummyCalendar2, dummyCalendar1, dummyCalendar2];
        expect(
          reducer(befState, updateCalendarsAction({ calendars: props }))
        ).toEqual(aftState);
      });
    });
  });
});

describe("Selectors of", () => {
  // Dummy data
  const dummyEvents = Array.from({ length: 3 }).map(() => eventFactory.build());
  const dummyStories = Array.from({ length: 3 }).map((_, idx) => {
    let story = createDummyStory({ id: idx });
    story.events = dummyEvents;
    return story;
  });
  const dummyCalendar = (() => {
    let item = createDummyCalendar({ id: "0" });
    item.stories = dummyStories;
    return item;
  })();

  // console spy
  const consoleSpy = jest.spyOn(console, "warn").mockImplementation();

  describe(toStr({ selectUserCalendar }), () => {
    it("can select.", () => {
      const rootState = createRootState([dummyCalendar]);
      expect(selectUserCalendar(rootState)).toEqual(dummyCalendar);
    });

    it("cannot select because of null.", () => {
      const rootState = createRootState([]);
      expect(selectUserCalendar(rootState)).toEqual(undefined);
    });
  });

  describe(toStr({ selectStoryByIdFilter }), () => {
    beforeEach(() => {
      consoleSpy.mockClear();
    });
    it("can select.", () => {
      const rootState = createRootState([dummyCalendar]);
      const calendarId = dummyCalendar.id;
      const storyId = dummyStories[1].id;
      const expected = dummyStories.find((item) => item.id === storyId);

      expect(selectStoryByIdFilter(rootState)(calendarId, storyId)).toEqual(
        expected
      );
    });

    it("cannot select because cannot find calendar.", () => {
      const rootState = createRootState([dummyCalendar]);
      const calendarId = "this is calendarId but not exist";
      const storyId = dummyStories[1].id;
      expect(selectStoryByIdFilter(rootState)(calendarId, storyId)).toEqual(
        undefined
      );
      expect(console.warn).toBeCalledTimes(1);
      expect(console.warn).toHaveBeenLastCalledWith(
        `Cannot find calendar: ${calendarId}.`
      );
    });

    it("cannot select because cannot find story.", () => {
      const rootState = createRootState([dummyCalendar]);
      const calendarId = dummyCalendar.id;
      const storyId = "this is storyId but not exist";
      expect(selectStoryByIdFilter(rootState)(calendarId, storyId)).toEqual(
        undefined
      );
    });
  });

  describe(toStr({ selectEventByIdFilter }), () => {
    beforeEach(() => {
      consoleSpy.mockClear();
    });
    it("can select.", () => {
      const rootState = createRootState([dummyCalendar]);
      const calendarId = dummyCalendar.id;
      const storyId = dummyStories[1].id;
      const eventId = dummyEvents[1].id;
      const expected = dummyEvents.find((item) => item.id === eventId);

      expect(
        selectEventByIdFilter(rootState)(calendarId, storyId, eventId)
      ).toEqual(expected);
    });

    it("cannot select because cannot find calendar.", () => {
      const rootState = createRootState([dummyCalendar]);
      const calendarId = "this is calendarId but not exist";
      const storyId = dummyStories[0].id;
      const eventId = dummyEvents[1].id;
      expect(
        selectEventByIdFilter(rootState)(calendarId, storyId, eventId)
      ).toEqual(undefined);
      expect(console.warn).toBeCalledTimes(1);
      expect(console.warn).toHaveBeenLastCalledWith(
        `Cannot find calendar: ${calendarId}.`
      );
    });

    it("cannot select because cannot find story.", () => {
      const rootState = createRootState([dummyCalendar]);
      const calendarId = dummyCalendar.id;
      const storyId = "this is storyId but not exist";
      const eventId = dummyEvents[1].id;
      expect(
        selectEventByIdFilter(rootState)(calendarId, storyId, eventId)
      ).toEqual(undefined);
      expect(console.warn).toBeCalledTimes(1);
      expect(console.warn).toHaveBeenLastCalledWith(
        `Cannot find story: ${storyId}.`
      );
    });

    it("cannot select because cannot find event.", () => {
      const rootState = createRootState([dummyCalendar]);
      const calendarId = dummyCalendar.id;
      const storyId = dummyStories[1].id;
      const eventId = "this is storyId but not exist";
      expect(
        selectEventByIdFilter(rootState)(calendarId, storyId, eventId)
      ).toEqual(undefined);
      expect(console.warn).toBeCalledTimes(1);
      expect(console.warn).toHaveBeenLastCalledWith(
        `Cannot find event: ${eventId}.`
      );
    });
  });
});
