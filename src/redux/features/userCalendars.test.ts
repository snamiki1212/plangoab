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

describe(reducer.name, () => {
  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe(addEventAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(addStoryAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(removeEventAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(removeStoryAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(resetAction.name, () => {
    it("can work.", () => {
      const befState = { calendars: ["dummy", "dummy"] as any[] };
      const aftState = initialState;
      expect(reducer(befState, resetAction())).toEqual(aftState);
    });
  });

  describe(updateEventAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(updateStoryAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(pushResourceAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(removeCalendarAction.name, () => {
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

  describe(removeResourceAction.name, () => {
    it.skip("can work.", () => {});
    it.skip("cannot work because not find calendar", () => {});
    it.skip("cannot work because not find story", () => {});
    it.skip("cannot work because not find resouce", () => {});
  });

  describe(updateCalendarsAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(updateEventByIdAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(updateResourcesAction.name, () => {
    it.skip("can work.", () => {});
  });

  describe(updateStoryByIdAction.name, () => {
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

  describe(selectUserCalendar.name, () => {
    it("can select.", () => {
      const rootState = createRootState([dummyCalendar]);
      expect(selectUserCalendar(rootState)).toEqual(dummyCalendar);
    });

    it("cannot select because of null.", () => {
      const rootState = createRootState([]);
      expect(selectUserCalendar(rootState)).toEqual(undefined);
    });
  });

  describe(selectUserCalendarById.name, () => {
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

  describe(selectStoryById.name, () => {
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

  describe(selectEventById.name, () => {
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
