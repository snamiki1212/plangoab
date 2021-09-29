import reducer, {
  selectIsOpen,
  selectStory,
  selectStoryModal,
  pushAction,
  popAction,
} from "./storyModal";
import { RootState } from "@/redux/rootReducer";
import { toStr } from "@/testHelpers/index";
import { calendarFactory } from "@/testHelpers/factories/core/calendar";
import { storyModalFactory } from "@/testHelpers/factories/redux/storyModal";

type Modal = ReturnType<typeof storyModalFactory.build>;
type Calendar = ReturnType<typeof calendarFactory.build>;

const createRootState = ({
  storyModalInfo = null,
  calendars = [] as Calendar[],
}: {
  storyModalInfo?: Modal;
  calendars?: Calendar[];
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
      const story = storyModalFactory.build();
      const befState = { story: null };
      const aftState = { story };
      expect(reducer(befState, pushAction(story))).toEqual(aftState);
    });
  });

  describe(toStr({ popAction }), () => {
    it("can work.", () => {
      const story = storyModalFactory.build();
      const befState = { story };
      const aftState = { story: null };
      expect(reducer(befState, popAction())).toEqual(aftState);
    });
  });
});

describe(toStr({ selectIsOpen }), () => {
  it("should be true when to open.", () => {
    const story = storyModalFactory.build();
    const rootState = createRootState({ storyModalInfo: story });
    expect(selectIsOpen(rootState)).toEqual(true);
  });
  it("should be false when to close.", () => {
    const rootState = createRootState({ storyModalInfo: null });
    expect(selectIsOpen(rootState)).toEqual(false);
  });
});

describe(toStr({ selectStory }), () => {
  const calendar = calendarFactory.build();

  // check console
  const consoleSpy = jest.spyOn(console, "warn").mockImplementation();
  beforeEach(() => {
    consoleSpy.mockClear();
  });

  it("can select.", () => {
    const expected = calendar.stories[1];

    // ids
    const calendarId = calendar.id;
    const storyId = expected.id;

    // params
    const modalInfo = storyModalFactory.build({ calendarId, storyId });
    const rootState = createRootState({
      storyModalInfo: modalInfo,
      calendars: [calendar],
    });

    expect(selectStory(rootState)).toEqual(expected);
  });

  it("cannot select when not to find calendar.", () => {
    // ids
    const calendarId = "Invalid calendar id";
    const storyId = calendar.stories[1].id;

    // params
    const modalInfo = storyModalFactory.build({ calendarId, storyId });
    const rootState = createRootState({
      storyModalInfo: modalInfo,
      calendars: [calendar],
    });

    expect(selectStory(rootState)).toEqual(undefined);
    expect(console.warn).toBeCalledTimes(1);
    expect(console.warn).toHaveBeenLastCalledWith(
      `Cannot find calendar: ${calendarId}.`
    );
  });

  it("cannot select when not to find story.", () => {
    // ids
    const calendarId = calendar.id;
    const storyId = "Invalid story id";

    // params
    const modalInfo = storyModalFactory.build({ calendarId, storyId });
    const rootState = createRootState({
      storyModalInfo: modalInfo,
      calendars: [calendar],
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
    const story = storyModalFactory.build();
    const rootState = createRootState({ storyModalInfo: story });
    expect(selectStoryModal(rootState)).toEqual(story);
  });
});
