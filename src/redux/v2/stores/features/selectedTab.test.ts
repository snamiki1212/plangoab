import { nameOf } from "~/src/testHelpers/index";
import { RootState } from "~/src/redux/rootReducer";
import reducer, {
  resetAction,
  selectAction,
  selectSelectedStoryId,
} from "./selectedTab";

describe(nameOf({ reducer }), () => {
  const initialState = {
    store: {
      selectedStoryId: undefined as undefined | string,
    },
  };

  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe(nameOf({ resetAction }), () => {
    it("can reset.", () => {
      const prevState = { store: { selectedStoryId: "storyId" } };
      expect(reducer(prevState, resetAction())).toEqual(initialState);
    });
  });

  describe(nameOf({ selectAction }), () => {
    it("can update storyId.", () => {
      const befState = { store: { selectedStoryId: undefined } };
      const aftState = { store: { selectedStoryId: "storyId" } };
      expect(reducer(befState, selectAction({ storyId: "storyId" }))).toEqual(
        aftState
      );
    });
  });
});

describe("Selector of", () => {
  const createRootState = (partialState) =>
    ({ v2: { features: { selectedTab: partialState } } } as RootState);

  const rootState = createRootState({
    store: { selectedStoryId: "storyId" },
  });

  describe(nameOf({ selectSelectedStoryId }), () => {
    it("can select.", () => {
      expect(selectSelectedStoryId(rootState)).toEqual("storyId");
    });
  });
});
