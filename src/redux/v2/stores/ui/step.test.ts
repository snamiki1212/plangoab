import { nameOf } from "~/src/testHelpers/index";
import { RootState } from "~/src/redux/rootReducer";
import reducer, {
  backAction,
  gotoAction,
  nextAction,
  selectIsFinished,
  selectStepIdx,
  selectStepName,
} from "./step";

describe(nameOf({ reducer }), () => {
  const initialState = {
    store: {
      stepIdx: 0,
      isFinished: false,
    },
  };

  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe(nameOf({ backAction }), () => {
    it("can run.", () => {
      const befState = { store: { stepIdx: 1, isFinished: false } };
      const aftState = { store: { stepIdx: 0, isFinished: false } };
      expect(reducer(befState, backAction())).toEqual(aftState);
    });
    it("can run but it does not move.", () => {
      const befState = { store: { stepIdx: 0, isFinished: false } };
      const aftState = { store: { stepIdx: 0, isFinished: false } };
      expect(reducer(befState, backAction())).toEqual(aftState);
    });
  });

  describe(nameOf({ nextAction }), () => {
    it("can run.", () => {
      const befState = { store: { stepIdx: 0, isFinished: false } };
      const aftState = { store: { stepIdx: 1, isFinished: false } };
      expect(reducer(befState, nextAction())).toEqual(aftState);
    });
    it("can move til the end.", () => {
      const befState = { store: { stepIdx: 1, isFinished: false } };
      const aftState = { store: { stepIdx: 2, isFinished: true } };
      expect(reducer(befState, nextAction())).toEqual(aftState);
    });
    it("can run but it does not move more.", () => {
      const befState = { store: { stepIdx: 2, isFinished: true } };
      const aftState = { store: { stepIdx: 2, isFinished: true } };
      expect(reducer(befState, nextAction())).toEqual(aftState);
    });
  });

  describe(nameOf({ gotoAction }), () => {
    it("can run.", () => {
      const befState = { store: { stepIdx: 2, isFinished: true } };
      const aftState = { store: { stepIdx: 1, isFinished: true } };
      expect(reducer(befState, gotoAction({ stepIdx: 1 }))).toEqual(aftState);
    });
  });
});

describe("Selector of", () => {
  const createRootState = (partialState) =>
    ({ v2: { ui: { step: partialState } } } as RootState);

  const rootState = createRootState({
    store: {
      stepIdx: 0,
      isFinished: false,
    },
  });

  describe(nameOf({ selectIsFinished }), () => {
    it("can select.", () => {
      expect(selectIsFinished(rootState)).toEqual(false);
    });
  });
  describe(nameOf({ selectStepIdx }), () => {
    it("can select.", () => {
      expect(selectStepIdx(rootState)).toEqual(0);
    });
  });
  describe(nameOf({ selectStepName }), () => {
    it("can select.", () => {
      expect(selectStepName(rootState)).toEqual("INPUT_BIRTHDAY");
    });
  });
});
