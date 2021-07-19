import reducer, {
  pushAction,
  popAction,
  selectEvent,
  selectEventModal,
  selectIsOpen,
} from "./eventModal";
import { RootState } from "../rootReducer";

type DummyCalendar = any;
type DummyStory = any;
type DummyEvent = any;

const createDummyCalendarId = (str: String | number) => `CALENDAR_${str}`;
const createDummyStoryId = (str: String | number) => `STORY_${str}`;
const createDummyEventId = (str: String | number) => `EVENT_${str}`;

const createDummyCalendar = ({ id }: { id: any }) =>
  ({ id: createDummyCalendarId(id) } as DummyCalendar);
const createDummyStory = ({ id }: { id: any }) =>
  ({ id: createDummyStoryId(id) } as DummyStory);
const createDummyEvent = ({ id }: { id: any }) =>
  ({ id: createDummyEventId(id) } as DummyEvent);

const createDummyEventModal = () => ({
  calendarId: "calendarId",
  storyId: "storyId",
  eventId: "eventId",
});

const createSelectableDummyEventModal = () => ({
  calendarId: createDummyCalendarId(0),
  storyId: createDummyStoryId(1),
  eventId: createDummyEventId(2),
});

type DummyEventModal = ReturnType<typeof createDummyEventModal>;

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

describe(reducer.name, () => {
  it("can save init state", () => {
    const initialState = { event: null };
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe(pushAction.name, () => {
    it("can work when not to have prev state.", () => {
      const modalInfo = createDummyEventModal();
      const befState = { event: null };
      const aftState = { event: modalInfo };
      expect(reducer(befState, pushAction(modalInfo))).toEqual(aftState);
    });
  });

  describe(popAction.name, () => {
    it("can work when to have prev state.", () => {
      const modalInfo = createDummyEventModal();
      const befState = { event: modalInfo };
      const aftState = { event: null };
      expect(reducer(befState, popAction())).toEqual(aftState);
    });
  });
});

describe(selectIsOpen.name, () => {
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

describe(selectEventModal.name, () => {
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

describe(selectEvent.name, () => {
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
