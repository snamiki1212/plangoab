import { toStr } from "@/testHelpers/index";
import reducer, {
  pushAction,
  popAction,
  selectEvent,
  selectEventModal,
  selectIsOpen,
} from "./eventModal";
import { RootState } from "../rootReducer";
import { eventModalFactory } from "@/testHelpers/factories/redux/eventModal";
import { calendarFactory } from "@/testHelpers/factories/core/calendar";

type EventModal = ReturnType<typeof eventModalFactory.build>;
type Calendar = ReturnType<typeof calendarFactory.build>;

const createRootState = ({
  eventModal = null,
  calendars = [],
}: {
  eventModal?: EventModal;
  calendars?: Calendar[];
}) =>
  ({
    ui: { eventModal: { event: eventModal } },
    features: { userCalendars: { calendars: calendars } },
  } as any as RootState);

describe(toStr({ reducer }), () => {
  it("can save init state", () => {
    const initialState = { event: null };
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe(toStr({ pushAction }), () => {
    it("can work when not to have prev state.", () => {
      const modal = eventModalFactory.build();
      const befState = { event: null };
      const aftState = { event: modal };
      expect(reducer(befState, pushAction(modal))).toEqual(aftState);
    });
  });

  describe(toStr({ popAction }), () => {
    it("can work when to have prev state.", () => {
      const modal = eventModalFactory.build();
      const befState = { event: modal };
      const aftState = { event: null };
      expect(reducer(befState, popAction())).toEqual(aftState);
    });
  });
});

describe(toStr({ selectIsOpen }), () => {
  it("should be false when to close.", () => {
    const rootState = createRootState({ eventModal: null });
    expect(selectIsOpen(rootState)).toBe(false);
  });

  it("should be true when to open.", () => {
    const modal = eventModalFactory.build();
    const rootState = createRootState({ eventModal: modal });
    expect(selectIsOpen(rootState)).toBe(true);
  });
});

describe(toStr({ selectEventModal }), () => {
  it("should exist when to open.", () => {
    const modal = eventModalFactory.build();
    const rootState = createRootState({ eventModal: modal });
    expect(selectEventModal(rootState)).toEqual(modal);
  });

  it("should not exist when to close.", () => {
    const modal = null;
    const rootState = createRootState({ eventModal: modal });
    expect(selectEventModal(rootState)).toEqual(null);
  });
});

describe(toStr({ selectEvent }), () => {
  const calendar = calendarFactory.build();

  const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  it("can select.", () => {
    const eventModal = eventModalFactory.build({
      calendarId: calendar.id,
      storyId: calendar.stories[1].id,
      eventId: calendar.stories[1].events[2].id,
    });
    const rootState = createRootState({
      eventModal,
      calendars: [calendar],
    });
    const expected = calendar.stories[1].events[2];

    expect(selectEvent(rootState)).toEqual(expected);
  });

  it("can not select when not to find calendar.", () => {
    const invalidCalendarId = "NOT_SELECTABLE_CALENDAR_ID";
    const eventModal = eventModalFactory.build({
      calendarId: invalidCalendarId,
      storyId: calendar.stories[1].id,
      eventId: calendar.stories[1].events[2].id,
    });

    const rootState = createRootState({
      eventModal,
      calendars: [calendar],
    });

    expect(selectEvent(rootState)).toEqual(undefined);
    expect(console.warn).toBeCalledTimes(1);
    expect(console.warn).toHaveBeenLastCalledWith(
      `Cannot find calendar: ${invalidCalendarId}.`
    );
  });

  it("can not select when not to find story.", () => {
    const invalidStoryId = "NOT_SELECTABLE_STORY_ID";
    const eventModal = eventModalFactory.build({
      calendarId: calendar.id,
      storyId: invalidStoryId,
      eventId: calendar.stories[1].events[2].id,
    });

    const rootState = createRootState({
      eventModal,
      calendars: [calendar],
    });
    expect(selectEvent(rootState)).toEqual(undefined);
    expect(console.warn).toBeCalledTimes(1);
    expect(console.warn).toHaveBeenLastCalledWith(
      `Cannot find story: ${invalidStoryId}.`
    );
  });

  it("can not select when not to find event.", () => {
    const invalidEventId = "NOT_SELECTABLE_EVENT_ID";
    const eventModal = eventModalFactory.build({
      calendarId: calendar.id,
      storyId: calendar.stories[1].id,
      eventId: invalidEventId,
    });

    const rootState = createRootState({
      eventModal,
      calendars: [calendar],
    });
    expect(selectEvent(rootState)).toEqual(undefined);
    expect(console.warn).toBeCalledTimes(1);
    expect(console.warn).toHaveBeenLastCalledWith(
      `Cannot find event: ${invalidEventId}.`
    );
  });
});
