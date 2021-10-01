import { toStr } from "~/src/testHelpers/index";
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
import { RootState } from "~/src/redux/rootReducer";
import { eventFactory } from "~/src/testHelpers/v1/factories/core/event";
import { resourceFactory } from "~/src/testHelpers/v1/factories/core/resource";
import { storyFactory } from "~/src/testHelpers/v1/factories/core/story";
import { calendarFactory } from "~/src/testHelpers/v1/factories/core/calendar";

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
      const befState = { calendars: calendarFactory.buildList(2) };
      const aftState = initialState;
      expect(reducer(befState, resetAction())).toEqual(aftState);
    });
  });

  describe("Event of", () => {
    describe(toStr({ addEventAction }), () => {
      const calendar = calendarFactory.build();
      const newEvent = eventFactory.build();

      // check console
      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });

      it("can work.", () => {
        const targetStoryIdx = 1;
        const aftCalendar = (() => {
          const _calendar = deepClone(calendar);
          _calendar.stories[targetStoryIdx].events = [
            ..._calendar.stories[targetStoryIdx].events,
            newEvent,
          ];
          return _calendar;
        })();

        // payload
        const story = calendar.stories[targetStoryIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
          event: newEvent,
        };

        const befState = { calendars: [calendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, addEventAction(payload))).toEqual(aftState);
      });

      it("cannot work when invalid calendarId.", () => {
        const invalidCalendarId = "Invalid calendar id";
        const targetStoryIdx = 1;
        const story = calendar.stories[targetStoryIdx];
        const payload = {
          calendarId: invalidCalendarId,
          storyId: story.id,
          event: newEvent,
        };

        const befState = { calendars: [calendar] };
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
          calendarId: calendar.id,
          storyId: invalidStoryId,
          event: newEvent,
        };

        const befState = { calendars: [calendar] };
        expect(reducer(befState, addEventAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          `cannot find story on addEvent`,
          invalidStoryId
        );
      });
    });

    describe(toStr({ removeEventAction }), () => {
      const calendar = calendarFactory.build();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });
      it("can work.", () => {
        const targetStoryIdx = 1;
        const targetEventIdx = 0;
        const aftCalendar = (() => {
          const _calendar = deepClone(calendar);
          _calendar.stories[targetStoryIdx].events.splice(targetEventIdx, 1);
          return _calendar;
        })();

        // payload
        const story = calendar.stories[targetStoryIdx];
        const event = calendar.stories[targetStoryIdx].events[targetEventIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
          eventId: event.id,
        };

        const befState = { calendars: [calendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, removeEventAction(payload))).toEqual(aftState);
      });
      it("cannot work when invalid calendar id.", () => {
        const targetStoryIdx = 1;
        const targetEventIdx = 0;
        const invalidCalendarId = "invalid calendar id";

        // payload
        const story = calendar.stories[targetStoryIdx];
        const event = calendar.stories[targetStoryIdx].events[targetEventIdx];
        const payload = {
          calendarId: invalidCalendarId,
          storyId: story.id,
          eventId: event.id,
        };

        const befState = { calendars: [calendar] };
        expect(reducer(befState, removeEventAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find calendar on removeEvent",
          invalidCalendarId
        );
      });
      it("cannot work when invalid story id.", () => {
        const targetStoryIdx = 1;
        const targetEventIdx = 0;
        const invalidStoryId = "invalid story id";

        // payload
        const event = calendar.stories[targetStoryIdx].events[targetEventIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: invalidStoryId,
          eventId: event.id,
        };

        const befState = { calendars: [calendar] };
        expect(reducer(befState, removeEventAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find story on removeEvent",
          invalidStoryId
        );
      });
    });

    describe(toStr({ updateEventAction }), () => {
      const calendar = calendarFactory.build();

      // check console
      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });

      it("can work.", () => {
        const newEvent = eventFactory.build();
        const targetStoryIdx = 1;
        const targetEventIdx = 0;
        const aftCalendar = (() => {
          const _calendar = deepClone(calendar);
          _calendar.stories[targetStoryIdx].events[targetEventIdx] = newEvent;
          return _calendar;
        })();

        // payload
        const story = calendar.stories[targetStoryIdx];
        const event = calendar.stories[targetStoryIdx].events[targetEventIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
          eventId: event.id,
          newEvent,
        };

        const befState = { calendars: [calendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, updateEventAction(payload))).toEqual(aftState);
      });
      it("cannot work when invalid calendar id.", () => {
        const invalidCalendarId = "invalid calendar id";
        const newEvent = eventFactory.build();
        const targetStoryIdx = 1;
        const targetEventIdx = 0;

        // payload
        const story = calendar.stories[targetStoryIdx];
        const event = calendar.stories[targetStoryIdx].events[targetEventIdx];
        const payload = {
          calendarId: invalidCalendarId,
          storyId: story.id,
          eventId: event.id,
          newEvent,
        };

        const befState = { calendars: [calendar] };
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
        const targetStoryIdx = 1;
        const targetEventIdx = 0;

        // payload
        const event = calendar.stories[targetStoryIdx].events[targetEventIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: invalidStoryId,
          eventId: event.id,
          newEvent,
        };

        const befState = { calendars: [calendar] };
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
        const story = calendar.stories[targetStoryIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
          eventId: invalidEventId,
          newEvent,
        };

        const befState = { calendars: [calendar] };
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
      const calendar = calendarFactory.build();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });
      it("can work.", () => {
        const newStory = storyFactory.build();
        const aftCalendar = (() => {
          const _calendar = deepClone(calendar);
          _calendar.stories.push(newStory);
          return _calendar;
        })();

        // payload
        const payload = {
          calendarId: calendar.id,
          story: newStory,
        };

        const befState = { calendars: [calendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, addStoryAction(payload))).toEqual(aftState);
      });
      it("cannot work when invalid calendar id.", () => {
        const invalidCalendarId = "invalid calendar id";
        const newStory = storyFactory.build();

        // payload
        const payload = {
          calendarId: invalidCalendarId,
          story: newStory,
        };

        const befState = { calendars: [calendar] };
        expect(reducer(befState, addStoryAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find calendar on addStory",
          invalidCalendarId
        );
      });
    });

    describe(toStr({ removeStoryAction }), () => {
      const calendar = calendarFactory.build();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });
      it("can work.", () => {
        const targetStoryIdx = 1;
        const aftCalendar = (() => {
          const _calendar = deepClone(calendar);
          _calendar.stories.splice(targetStoryIdx, 1); // remove
          return _calendar;
        })();

        // payload
        const story = calendar.stories[targetStoryIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
        };

        const befState = { calendars: [calendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, removeStoryAction(payload))).toEqual(aftState);
      });
      it("cannot work when invalid calendar id.", () => {
        const invalidCalendarId = "invalid calendar id";
        const targetStoryIdx = 1;

        // payload
        const story = calendar.stories[targetStoryIdx];
        const payload = {
          calendarId: invalidCalendarId,
          storyId: story.id,
        };

        const befState = { calendars: [calendar] };
        expect(reducer(befState, removeStoryAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find calendar on removeStory",
          invalidCalendarId
        );
      });
    });

    describe(toStr({ updateStoryAction }), () => {
      const calendar = calendarFactory.build();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });
      it("can work.", () => {
        const updatedStory = storyFactory.build();
        const targetStoryIdx = 1;
        const aftCalendar = (() => {
          const _calendar = deepClone(calendar);
          _calendar.stories[targetStoryIdx] = updatedStory;
          return _calendar;
        })();

        // payload
        const story = calendar.stories[targetStoryIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
          newStory: updatedStory,
        };

        const befState = { calendars: [calendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, updateStoryAction(payload))).toEqual(aftState);
      });
      it("cannot work when invalid calendar id.", () => {
        const invalidCalendarId = "invalid calendad id";
        const updatedStory = storyFactory.build();
        const targetStoryIdx = 1;

        // payload
        const story = calendar.stories[targetStoryIdx];
        const payload = {
          calendarId: invalidCalendarId,
          storyId: story.id,
          newStory: updatedStory,
        };

        const befState = { calendars: [calendar] };
        expect(reducer(befState, updateStoryAction(payload))).toEqual(befState);
        expect(console.warn).toBeCalledTimes(1);
        expect(console.warn).toHaveBeenLastCalledWith(
          "cannot find calendar on updateStory",
          invalidCalendarId
        );
      });
      it("cannot work when invalid story id.", () => {
        const invalidStoryId = "invalid story id";
        const updatedStory = storyFactory.build();

        // payload
        const payload = {
          calendarId: calendar.id,
          storyId: invalidStoryId,
          newStory: updatedStory,
        };

        const befState = { calendars: [calendar] };
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
      const calendar = calendarFactory.build();
      const newResource = resourceFactory.build();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });

      it("can work.", () => {
        const targetStoryIdx = 1;
        const aftCalendar = (() => {
          const _calendar = deepClone(calendar);
          _calendar.stories[targetStoryIdx].resources = [
            ..._calendar.stories[targetStoryIdx].resources,
            newResource,
          ];
          return _calendar;
        })();

        // payload
        const story = calendar.stories[targetStoryIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
          resource: newResource,
        };

        const befState = { calendars: [calendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, pushResourceAction(payload))).toEqual(
          aftState
        );
      });

      it("cannot work when invalid calendarId using.", () => {
        const targetStoryIdx = 1;
        const invalidCalendarId = "invalid calendar id";

        // payload
        const story = calendar.stories[targetStoryIdx];
        const payload = {
          calendarId: invalidCalendarId,
          storyId: story.id,
          resource: newResource,
        };

        const befState = { calendars: [calendar] };
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
        const payload = {
          calendarId: calendar.id,
          storyId: invalidStoryId,
          resource: newResource,
        };

        const befState = { calendars: [calendar] };
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
      const calendar = calendarFactory.build();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });

      it("can work.", () => {
        const targetStoryIdx = 0;
        const targetResourceIdx = 1;
        const aftCalendar = (() => {
          const _calendar = deepClone(calendar);
          _calendar.stories[targetStoryIdx].resources.splice(
            targetResourceIdx,
            1
          ); // remove mutably
          return _calendar;
        })();

        // payload
        const story = calendar.stories[targetStoryIdx];
        const resource =
          calendar.stories[targetStoryIdx].resources[targetResourceIdx];
        const payload = {
          calendarId: calendar.id,
          resourceId: resource.id,
          storyId: story.id,
        };

        const befState = { calendars: [calendar] };
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
        const story = calendar.stories[targetStoryIdx];
        const resource =
          calendar.stories[targetStoryIdx].resources[targetResourceIdx];
        const payload = {
          calendarId: invalidCalendarId,
          resourceId: resource.id,
          storyId: story.id,
        };

        const befState = { calendars: [calendar] };
        expect(reducer(befState, removeResourceAction(payload))).toEqual(
          befState
        );
      });
      it("cannot work because not find story", () => {
        const invalidStoryId = "invalid story id";
        const targetResourceIdx = 1;
        const targetStoryIdx = 2;

        // payload
        const resource =
          calendar.stories[targetStoryIdx]?.resources[targetResourceIdx];
        const payload = {
          calendarId: calendar.id,
          resourceId: resource.id,
          storyId: invalidStoryId,
        };

        const befState = { calendars: [calendar] };
        expect(reducer(befState, removeResourceAction(payload))).toEqual(
          befState
        );
      });

      it("cannot work because not resource id.", () => {
        const invalidResourceId = "invalid resource id";
        const targetStoryIdx = 0;

        // payload
        const story = calendar.stories[targetStoryIdx];
        const payload = {
          calendarId: calendar.id,
          resourceId: invalidResourceId,
          storyId: story.id,
        };

        const befState = { calendars: [calendar] };
        expect(reducer(befState, removeResourceAction(payload))).toEqual(
          befState
        );
      });
    });

    describe(toStr({ updateResourcesAction }), () => {
      const calendar = calendarFactory.build();

      const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
      beforeEach(() => {
        consoleSpy.mockClear();
      });

      it("can work.", () => {
        const updatedResources = resourceFactory.buildList(3);
        const targetStoryIdx = 0;
        const aftCalendar = (() => {
          const _calendar = deepClone(calendar);
          _calendar.stories[targetStoryIdx].resources = updatedResources;
          return _calendar;
        })();

        // payload
        const story = calendar.stories[targetStoryIdx];
        const payload = {
          calendarId: calendar.id,
          storyId: story.id,
          newResources: updatedResources,
        };

        const befState = { calendars: [calendar] };
        const aftState = { calendars: [aftCalendar] };
        expect(reducer(befState, updateResourcesAction(payload))).toEqual(
          aftState
        );
      });
      it("cannot work when to invalid calendarId.", () => {
        const updatedResources = resourceFactory.buildList(3);
        const targetStoryIdx = 1;
        const invalidCalendarId = "invalid calendar id";

        // payload
        const story = calendar.stories[targetStoryIdx];
        const payload = {
          calendarId: invalidCalendarId,
          storyId: story.id,
          newResources: updatedResources,
        };

        const befState = { calendars: [calendar] };
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
        const updatedResources = resourceFactory.buildList(3);
        const invalidStoryId = "invalid story id";

        // payload
        const payload = {
          calendarId: calendar.id,
          storyId: invalidStoryId,
          newResources: updatedResources,
        };

        const befState = { calendars: [calendar] };
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
        const [calendar1, calendar2] = calendarFactory.buildList(2);
        const befState = { calendars: [calendar1, calendar2] };
        const aftState = { calendars: [calendar1] };
        expect(
          reducer(befState, removeCalendarAction({ calendarId: calendar2.id }))
        ).toEqual(aftState);
      });
    });
    describe(toStr({ updateCalendarsAction }), () => {
      it("can work.", () => {
        const [calendar1, calendar2] = calendarFactory.buildList(2);
        const befState = { calendars: [calendar1] };
        const aftState = {
          calendars: [calendar2, calendar1, calendar2],
        };
        const props = [calendar2, calendar1, calendar2];
        expect(
          reducer(befState, updateCalendarsAction({ calendars: props }))
        ).toEqual(aftState);
      });
    });
  });
});

describe("Selectors of", () => {
  const calendar = calendarFactory.build();

  // console spy
  const consoleSpy = jest.spyOn(console, "warn").mockImplementation();

  describe(toStr({ selectUserCalendar }), () => {
    it("can select.", () => {
      const rootState = createRootState([calendar]);
      expect(selectUserCalendar(rootState)).toEqual(calendar);
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
      const rootState = createRootState([calendar]);
      const calendarId = calendar.id;
      const storyId = calendar.stories[1].id;
      const expected = calendar.stories.find((item) => item.id === storyId);

      expect(selectStoryByIdFilter(rootState)(calendarId, storyId)).toEqual(
        expected
      );
    });

    it("cannot select because cannot find calendar.", () => {
      const rootState = createRootState([calendar]);
      const calendarId = "this is calendarId but not exist";
      const storyId = calendar.stories[1].id;
      expect(selectStoryByIdFilter(rootState)(calendarId, storyId)).toEqual(
        undefined
      );
      expect(console.warn).toBeCalledTimes(1);
      expect(console.warn).toHaveBeenLastCalledWith(
        `Cannot find calendar: ${calendarId}.`
      );
    });

    it("cannot select because cannot find story.", () => {
      const rootState = createRootState([calendar]);
      const calendarId = calendar.id;
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
      const rootState = createRootState([calendar]);
      const calendarId = calendar.id;
      const storyId = calendar.stories[1].id;
      const eventId = calendar.stories[1].events[1].id;
      const expected = calendar.stories[1].events[1];

      expect(
        selectEventByIdFilter(rootState)(calendarId, storyId, eventId)
      ).toEqual(expected);
    });

    it("cannot select because cannot find calendar.", () => {
      const rootState = createRootState([calendar]);
      const calendarId = "this is calendarId but not exist";
      const storyId = calendar.stories[0].id;
      const eventId = calendar.stories[0].events[1].id;
      expect(
        selectEventByIdFilter(rootState)(calendarId, storyId, eventId)
      ).toEqual(undefined);
      expect(console.warn).toBeCalledTimes(1);
      expect(console.warn).toHaveBeenLastCalledWith(
        `Cannot find calendar: ${calendarId}.`
      );
    });

    it("cannot select because cannot find story.", () => {
      const rootState = createRootState([calendar]);
      const calendarId = calendar.id;
      const storyId = "this is storyId but not exist";
      const eventId = calendar.stories[0].events[1].id;
      expect(
        selectEventByIdFilter(rootState)(calendarId, storyId, eventId)
      ).toEqual(undefined);
      expect(console.warn).toBeCalledTimes(1);
      expect(console.warn).toHaveBeenLastCalledWith(
        `Cannot find story: ${storyId}.`
      );
    });

    it("cannot select because cannot find event.", () => {
      const rootState = createRootState([calendar]);
      const calendarId = calendar.id;
      const storyId = calendar.stories[1].id;
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
