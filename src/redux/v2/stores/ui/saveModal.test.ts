import { nameOf } from "~/src/testHelpers/index";
import { RootState } from "~/src/redux/reducers/rootReducer";
import reducer, { toggleAction, selectIsOpen } from "./saveModal";

describe(nameOf({ reducer }), () => {
  const initialState = {
    isOpen: false,
  };

  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe(nameOf({ toggleAction }), () => {
    it("can run.", () => {
      const befState = initialState;
      const aftState = { isOpen: true };
      expect(reducer(befState, toggleAction())).toEqual(aftState);
      expect(reducer(aftState, toggleAction())).toEqual(befState);
    });
  });
});

describe("Selector of", () => {
  const createRootState = (partialState) =>
    ({ v2: { ui: { saveModal: partialState } } } as RootState);

  const rootState = createRootState({
    isOpen: false,
  });

  describe(nameOf({ selectIsOpen }), () => {
    it("can select.", () => {
      expect(selectIsOpen(rootState)).toEqual(false);
    });
  });
});
