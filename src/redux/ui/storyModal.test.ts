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

const createRootState = (partialState: any) =>
  ({ ui: { storyModal: { story: partialState } } } as RootState);

describe(toStr({ reducer }), () => {
  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual({ story: null });
  });

  describe(toStr({ pushAction }), () => {
    it("can work.", () => {
      const story = createDummyStoryModal();
      const befState = { story: null };
      const aftState = { story };
      expect(reducer(befState, pushAction(story))).toEqual(aftState);
    });
  });

  describe(toStr({ popAction }), () => {
    it("can work.", () => {
      const story = createDummyStoryModal();
      const befState = { story };
      const aftState = { story: null };
      expect(reducer(befState, popAction())).toEqual(aftState);
    });
  });
});

describe(toStr({ selectIsOpen }), () => {
  it("should be true when to open.", () => {
    const story = createDummyStoryModal();
    const rootState = createRootState(story);
    expect(selectIsOpen(rootState)).toEqual(true);
  });
  it("should be false when to close.", () => {
    const rootState = createRootState(null);
    expect(selectIsOpen(rootState)).toEqual(false);
  });
});

describe(toStr({ selectStory }), () => {
  it.skip("can select.", () => {
    // TODO: Fix logic using re-select feature in RTK because for now it's not testable.
  });
});

describe(toStr({ selectStoryModal }), () => {
  it("can select.", () => {
    const story = createDummyStoryModal();
    const rootState = createRootState(story);
    expect(selectStoryModal(rootState)).toEqual(story);
  });
});
