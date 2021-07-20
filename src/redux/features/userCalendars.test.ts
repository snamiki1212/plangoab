import { toStr } from "@/testHelpers/index";
import reducer, {
  // selectors
  selectUserCalendar,
  selectUserCalendarById,
  selectStoryById,
  selectEventById,

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
  createDummyStory,
} from "@/testHelpers/factories/core";

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
    it.skip("can work.", () => {});
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
    it.skip("can work.", () => {});
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

  describe(toStr({ selectUserCalendarById }), () => {
    it("can select.", () => {
      const rootState = createRootState([dummyCalendar]);
      const calendarId = dummyCalendar.id;
      expect(selectUserCalendarById(rootState)(calendarId)).toEqual(
        dummyCalendar
      );
    });

    it("cannot select because cannot find.", () => {
      const rootState = createRootState([dummyCalendar]);
      const calendarId = "this is calendarId but not exist";
      expect(selectUserCalendarById(rootState)(calendarId)).toEqual(undefined);
    });
  });

  describe(toStr({ selectStoryById }), () => {
    it("can select.", () => {
      const rootState = createRootState([dummyCalendar]);
      const calendarId = dummyCalendar.id;
      const storyId = dummyStories[1].id;
      const expected = dummyStories.find((item) => item.id === storyId);

      expect(selectStoryById(rootState)(calendarId, storyId)).toEqual(expected);
    });

    it("cannot select because cannot find calendar.", () => {
      const rootState = createRootState([dummyCalendar]);
      const calendarId = "this is calendarId but not exist";
      const storyId = dummyStories[1].id;
      expect(selectStoryById(rootState)(calendarId, storyId)).toEqual(
        undefined
      );
    });

    it("cannot select because cannot find story.", () => {
      const rootState = createRootState([dummyCalendar]);
      const calendarId = dummyCalendar.id;
      const storyId = "this is storyId but not exist";
      expect(selectStoryById(rootState)(calendarId, storyId)).toEqual(
        undefined
      );
    });
  });

  describe(toStr({ selectEventById }), () => {
    it("can select.", () => {
      const rootState = createRootState([dummyCalendar]);
      const calendarId = dummyCalendar.id;
      const storyId = dummyStories[1].id;
      const eventId = dummyEvents[1].id;
      const expected = dummyEvents.find((item) => item.id === eventId);

      expect(selectEventById(rootState)(calendarId, storyId, eventId)).toEqual(
        expected
      );
    });

    it("cannot select because cannot find story.", () => {
      const rootState = createRootState([dummyCalendar]);
      const calendarId = dummyCalendar.id;
      const storyId = "this is storyId but not exist";
      const eventId = dummyEvents[1].id;
      expect(selectEventById(rootState)(calendarId, storyId, eventId)).toEqual(
        undefined
      );
    });

    it("cannot select because cannot find event.", () => {
      const rootState = createRootState([dummyCalendar]);
      const calendarId = dummyCalendar.id;
      const storyId = dummyStories[1].id;
      const eventId = "this is storyId but not exist";
      expect(selectEventById(rootState)(calendarId, storyId, eventId)).toEqual(
        undefined
      );
    });
  });
});
