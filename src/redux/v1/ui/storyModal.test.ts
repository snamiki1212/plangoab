import reducer, {
  selectIsOpen,
  selectStory,
  selectStoryModal,
  pushAction,
  popAction,
} from "./storyModal";
import { RootState } from "~/src/redux/reducers/rootReducer";
import { nameOf } from "~/src/testHelpers/index";
import { calendarFactory } from "~/src/testHelpers/v1/factories/core/calendar";
import { storyModalFactory } from "~/src/testHelpers/v1/factories/redux/storyModal";

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

describe(nameOf({ reducer }), () => {
  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual({ story: null });
  });

  describe(nameOf({ pushAction }), () => {
    it("can work.", () => {
      const story = storyModalFactory.build();
      const befState = { story: null };
      const aftState = { story };
      expect(reducer(befState, pushAction(story))).toEqual(aftState);
    });
  });

  describe(nameOf({ popAction }), () => {
    it("can work.", () => {
      const story = storyModalFactory.build();
      const befState = { story };
      const aftState = { story: null };
      expect(reducer(befState, popAction())).toEqual(aftState);
    });
  });
});

describe(nameOf({ selectIsOpen }), () => {
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

describe(nameOf({ selectStory }), () => {
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

describe(nameOf({ selectStoryModal }), () => {
  it("can select.", () => {
    const story = storyModalFactory.build();
    const rootState = createRootState({ storyModalInfo: story });
    expect(selectStoryModal(rootState)).toEqual(story);
  });
});
