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
  updateEventByIdAction,
  updateResourcesAction,
  updateStoryByIdAction,
  pushResourceAction,
  removeCalendarAction,
  removeResourceAction,
} from "./userCalendars";
import { RootState } from "../rootReducer";
import {
  createDummyCalendar,
  createDummyEvent,
  createDummyResource,
  createDummyStory,
} from "@/testHelpers/factories/core";

const deepClone = (obj: Object) => JSON.parse(JSON.stringify(obj));
const createRootState = (partialState: any) =>
  ({ features: { userCalendars: { calendars: partialState } } } as RootState);

const initialState = { calendars: [] };

describe(toStr({ reducer }), () => {
  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe(toStr({ addEventAction }), () => {
    it.skip("can work.", () => {});
  });

  describe(toStr({ addStoryAction }), () => {
    it.skip("can work.", () => {});
  });

  describe(toStr({ removeEventAction }), () => {
    it.skip("can work.", () => {});
  });

  describe(toStr({ removeStoryAction }), () => {
    it.skip("can work.", () => {});
  });

  describe(toStr({ resetAction }), () => {
    it("can work.", () => {
      const befState = { calendars: ["dummy", "dummy"] as any[] };
      const aftState = initialState;
      expect(reducer(befState, resetAction())).toEqual(aftState);
    });
  });

  describe(toStr({ updateEventAction }), () => {
    it.skip("can work.", () => {});
  });

  describe(toStr({ updateStoryAction }), () => {
    it.skip("can work.", () => {});
  });

  describe(toStr({ pushResourceAction }), () => {
    // Dummy
    const dummyResources = Array.from({ length: 3 }).map((_, idx) =>
      createDummyResource({ id: idx })
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
    const newResource = createDummyResource({ id: "pushed" });

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
      expect(reducer(befState, pushResourceAction(payload))).toEqual(aftState);
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
      expect(reducer(befState, pushResourceAction(payload))).toEqual(befState);
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
      expect(reducer(befState, pushResourceAction(payload))).toEqual(befState);
      expect(console.warn).toBeCalledTimes(1);
      expect(console.warn).toHaveBeenLastCalledWith(
        `Cannot find story on pushResource`,
        invalidStoryId
      );
    });
  });

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

  describe(toStr({ removeResourceAction }), () => {
    it.skip("can work.", () => {});
    it.skip("cannot work because not find calendar", () => {});
    it.skip("cannot work because not find story", () => {});
    it.skip("cannot work because not find resouce", () => {});
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

  describe(toStr({ updateEventByIdAction }), () => {
    it.skip("can work.", () => {});
  });

  describe(toStr({ updateResourcesAction }), () => {
    it.skip("can work.", () => {});
  });

  describe(toStr({ updateStoryByIdAction }), () => {
    it.skip("can work.", () => {});
  });
});

describe("Selectors of", () => {
  // Dummy data
  const dummyEvents = Array.from({ length: 3 }).map((_, idx) =>
    createDummyEvent({ id: idx })
  );
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
