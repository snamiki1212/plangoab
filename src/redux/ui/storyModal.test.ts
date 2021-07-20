import reducer, {
  selectIsOpen,
  selectStory,
  selectStoryModal,
  pushAction,
  popAction,
} from "./storyModal";
import { RootState } from "../rootReducer";
import { createDummyStoryModal } from "@/testHelpers/factories/redux";
import { toStr } from "@/testHelpers/index";
import {
  createDummyCalendar,
  createDummyEvent,
  createDummyStory,
} from "@/testHelpers/factories/core";

type ModalInfo = ReturnType<typeof createDummyStoryModal>;
type DummyCalendar = ReturnType<typeof createDummyCalendar>;

const createRootState = ({
  storyModalInfo = null,
  calendars = [],
}: {
  storyModalInfo?: ModalInfo;
  calendars?: DummyCalendar;
}) =>
  ({
    ui: { storyModal: { story: storyModalInfo } },
    features: { userCalendars: { calendars: calendars } },
  } as RootState);

describe(toStr({ reducer }), () => {
  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual({ story: null });
  });

  describe(toStr({ pushAction }), () => {
    it("can work.", () => {
      const story = createDummyStoryModal({});
      const befState = { story: null };
      const aftState = { story };
      expect(reducer(befState, pushAction(story))).toEqual(aftState);
    });
  });

  describe(toStr({ popAction }), () => {
    it("can work.", () => {
      const story = createDummyStoryModal({});
      const befState = { story };
      const aftState = { story: null };
      expect(reducer(befState, popAction())).toEqual(aftState);
    });
  });
});

describe(toStr({ selectIsOpen }), () => {
  it("should be true when to open.", () => {
    const story = createDummyStoryModal({});
    const rootState = createRootState({ storyModalInfo: story });
    expect(selectIsOpen(rootState)).toEqual(true);
  });
  it("should be false when to close.", () => {
    const rootState = createRootState({ storyModalInfo: null });
    expect(selectIsOpen(rootState)).toEqual(false);
  });
});

describe(toStr({ selectStory }), () => {
  const consoleSpy = jest.spyOn(console, "warn").mockImplementation();

  // Dummy
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

  beforeEach(() => {
    consoleSpy.mockClear();
  });

  it("can select.", () => {
    const expected = dummyStories[1];

    // ids
    const calendarId = dummyCalendar.id;
    const storyId = expected.id;

    // params
    const modalInfo = createDummyStoryModal({ calendarId, storyId });
    const rootState = createRootState({
      storyModalInfo: modalInfo,
      calendars: [dummyCalendar],
    });

    expect(selectStory(rootState)).toEqual(expected);
  });

  it("cannot select when not to find calendar.", () => {
    // ids
    const calendarId = "Invalid calendar id";
    const storyId = dummyStories[1].id;

    // params
    const modalInfo = createDummyStoryModal({ calendarId, storyId });
    const rootState = createRootState({
      storyModalInfo: modalInfo,
      calendars: [dummyCalendar],
    });

    expect(selectStory(rootState)).toEqual(undefined);
    expect(console.warn).toBeCalledTimes(1);
    expect(console.warn).toHaveBeenLastCalledWith(
      `Cannot find calendar: ${calendarId}.`
    );
  });

  it("cannot select when not to find story.", () => {
    // ids
    const calendarId = dummyCalendar.id;
    const storyId = "Invalid story id";

    // params
    const modalInfo = createDummyStoryModal({ calendarId, storyId });
    const rootState = createRootState({
      storyModalInfo: modalInfo,
      calendars: [dummyCalendar],
    });

    expect(selectStory(rootState)).toEqual(undefined);
    expect(console.warn).toBeCalledTimes(1);
    expect(console.warn).toHaveBeenLastCalledWith(
      `Cannot find story: ${storyId}.`
    );
  });
});

describe(toStr({ selectStoryModal }), () => {
  it("can select.", () => {
    const story = createDummyStoryModal({});
    const rootState = createRootState({ storyModalInfo: story });
    expect(selectStoryModal(rootState)).toEqual(story);
  });
});
