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

type DummyEventModal = ReturnType<typeof eventModalFactory.build>;
type DummyCalendar = ReturnType<typeof calendarFactory.build>;

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
    const rootState = createRootState({ eventModalInfo: null });
    expect(selectIsOpen(rootState)).toBe(false);
  });

  it("should be true when to open.", () => {
    const modal = eventModalFactory.build();
    const rootState = createRootState({ eventModalInfo: modal });
    expect(selectIsOpen(rootState)).toBe(true);
  });
});

describe(toStr({ selectEventModal }), () => {
  it("should exist when to open.", () => {
    const modal = eventModalFactory.build();
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
  const dummyCalendar = calendarFactory.build();

  const createSelectableDummyEventModal = () => ({
    calendarId: dummyCalendar.id,
    storyId: dummyCalendar.stories[1].id,
    eventId: dummyCalendar.stories[1].events[2].id,
  });

  const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  it("can select.", () => {
    const eventModalInfo = createSelectableDummyEventModal();
    const rootState = createRootState({
      eventModalInfo,
      calendars: [dummyCalendar],
    });
    const expected = dummyCalendar.stories[1].events[2];

    expect(selectEvent(rootState)).toEqual(expected);
  });

  it("can not select when not to find calendar.", () => {
    const calendarId = "NOT_SELECTABLE_CALENDAR_ID";
    const eventModalInfo = (() => {
      const modal = createSelectableDummyEventModal();
      modal.calendarId = calendarId;
      return modal;
    })();

    const rootState = createRootState({
      eventModalInfo,
      calendars: [dummyCalendar],
    });

    expect(selectEvent(rootState)).toEqual(undefined);
    expect(console.warn).toBeCalledTimes(1);
    expect(console.warn).toHaveBeenLastCalledWith(
      `Cannot find calendar: ${calendarId}.`
    );
  });

  it("can not select when not to find story.", () => {
    const storyId = "NOT_SELECTABLE_STORY_ID";
    const eventModalInfo = (() => {
      const modal = createSelectableDummyEventModal();
      modal.storyId = storyId;
      return modal;
    })();

    const rootState = createRootState({
      eventModalInfo,
      calendars: [dummyCalendar],
    });
    expect(selectEvent(rootState)).toEqual(undefined);
    expect(console.warn).toBeCalledTimes(1);
    expect(console.warn).toHaveBeenLastCalledWith(
      `Cannot find story: ${storyId}.`
    );
  });

  it("can not select when not to find event.", () => {
    const eventId = "NOT_SELECTABLE_EVENT_ID";
    const eventModalInfo = (() => {
      const modal = createSelectableDummyEventModal();
      modal.eventId = eventId;
      return modal;
    })();

    const rootState = createRootState({
      eventModalInfo,
      calendars: [dummyCalendar],
    });
    expect(selectEvent(rootState)).toEqual(undefined);
    expect(console.warn).toBeCalledTimes(1);
    expect(console.warn).toHaveBeenLastCalledWith(
      `Cannot find event: ${eventId}.`
    );
  });
});
