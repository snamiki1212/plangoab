import { toStr } from "@/testHelpers/index";
import reducer, {
  pushAction,
  popAction,
  selectEvent,
  selectEventModal,
  selectIsOpen,
} from "./eventModal";
import { RootState } from "../rootReducer";
import { createDummyEventModal } from "@/testHelpers/factories/redux";
import {
  createDummyCalendar,
  createDummyEvent,
  createDummyStory,
} from "@/testHelpers/factories/core";

type DummyEventModal = ReturnType<typeof createDummyEventModal>;
type DummyCalendar = ReturnType<typeof createDummyCalendar>;

const createRootState = ({
  eventModalInfo = null,
  calendars = [],
}: {
  eventModalInfo?: DummyEventModal;
  calendars?: DummyCalendar[];
}) =>
  ({
    ui: { eventModal: { event: eventModalInfo } },
    features: { userCalendars: { calendars: calendars } },
  } as any as RootState);

describe(toStr({ reducer }), () => {
  it("can save init state", () => {
    const initialState = { event: null };
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe(toStr({ pushAction }), () => {
    it("can work when not to have prev state.", () => {
      const modalInfo = createDummyEventModal();
      const befState = { event: null };
      const aftState = { event: modalInfo };
      expect(reducer(befState, pushAction(modalInfo))).toEqual(aftState);
    });
  });

  describe(toStr({ popAction }), () => {
    it("can work when to have prev state.", () => {
      const modalInfo = createDummyEventModal();
      const befState = { event: modalInfo };
      const aftState = { event: null };
      expect(reducer(befState, popAction())).toEqual(aftState);
    });
  });
});

describe(toStr({ selectIsOpen }), () => {
  it("should be false when to close.", () => {
    const rootState = createRootState({ eventModalInfo: null });
    expect(selectIsOpen(rootState)).toBe(false);
  });

  it("should be true when to open.", () => {
    const modal = createDummyEventModal();
    const rootState = createRootState({ eventModalInfo: modal });
    expect(selectIsOpen(rootState)).toBe(true);
  });
});

describe(toStr({ selectEventModal }), () => {
  it("should exist when to open.", () => {
    const modal = createDummyEventModal();
    const rootState = createRootState({ eventModalInfo: modal });
    expect(selectEventModal(rootState)).toEqual(modal);
  });

  it("should not exist when to close.", () => {
    const modal = null;
    const rootState = createRootState({ eventModalInfo: modal });
    expect(selectEventModal(rootState)).toEqual(null);
  });
});

describe(toStr({ selectEvent }), () => {
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

  const createSelectableDummyEventModal = () => ({
    calendarId: dummyCalendar.id,
    storyId: dummyStories[1].id,
    eventId: dummyEvents[2].id,
  });

  it("can select.", () => {
    const eventModalInfo = createSelectableDummyEventModal();
    const rootState = createRootState({
      eventModalInfo,
      calendars: [dummyCalendar],
    });
    const expected = dummyEvents.find(
      (item) => item.id === eventModalInfo.eventId
    );

    expect(selectEvent(rootState)).toEqual(expected);
  });

  it("can not select when not to find calendar.", () => {
    const eventModalInfo = (() => {
      const modal = createSelectableDummyEventModal();
      modal.calendarId = "NOT_SELECTABLE_CALENDAR_ID";
      return modal;
    })();

    const rootState = createRootState({
      eventModalInfo,
      calendars: [dummyCalendar],
    });
    const spy = jest.spyOn(global.console, "warn").mockImplementation();
    // TODO: check that warn message is exact same.
    expect(selectEvent(rootState)).toEqual(undefined);
    spy.mockRestore();
  });

  it("can not select when not to find story.", () => {
    const eventModalInfo = (() => {
      const modal = createSelectableDummyEventModal();
      modal.storyId = "NOT_SELECTABLE_STORY_ID";
      return modal;
    })();

    const rootState = createRootState({
      eventModalInfo,
      calendars: [dummyCalendar],
    });
    const spy = jest.spyOn(global.console, "warn").mockImplementation();
    // TODO: check that warn message is exact same.
    expect(selectEvent(rootState)).toEqual(undefined);
    spy.mockRestore();
  });

  it("can not select when not to find event.", () => {
    const eventModalInfo = (() => {
      const modal = createSelectableDummyEventModal();
      modal.eventId = "NOT_SELECTABLE_EVENT_ID";
      return modal;
    })();

    const rootState = createRootState({
      eventModalInfo,
      calendars: [dummyCalendar],
    });
    const spy = jest.spyOn(global.console, "warn").mockImplementation();
    // TODO: check that warn message is exact same.
    expect(selectEvent(rootState)).toEqual(undefined);
    spy.mockRestore();
  });
});
