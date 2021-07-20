import reducer, {
  selectIsOpen,
  selectStory,
  selectStoryModal,
  pushAction,
  popAction,
} from "./storyModal";
import { RootState } from "../rootReducer";
import { createDummyStoryModal } from "@/testHelpers/factories/redux";

const createRootState = (partialState: any) =>
  ({ ui: { storyModal: { story: partialState } } } as RootState);

describe(reducer.name, () => {
  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual({ story: null });
  });

  describe(pushAction.name, () => {
    it("can work.", () => {
      const story = createDummyStoryModal();
      const befState = { story: null };
      const aftState = { story };
      expect(reducer(befState, pushAction(story))).toEqual(aftState);
    });
  });

  describe(popAction.name, () => {
    it("can work.", () => {
      const story = createDummyStoryModal();
      const befState = { story };
      const aftState = { story: null };
      expect(reducer(befState, popAction())).toEqual(aftState);
    });
  });
});

describe(selectIsOpen.name, () => {
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

describe(selectStory.name, () => {
  it.skip("can select.", () => {
    // TODO: Fix logic using re-select feature in RTK because for now it's not testable.
  });
});

describe(selectStoryModal.name, () => {
  it("can select.", () => {
    const story = createDummyStoryModal();
    const rootState = createRootState(story);
    expect(selectStoryModal(rootState)).toEqual(story);
  });
});
