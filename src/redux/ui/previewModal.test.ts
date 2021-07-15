import reducer, { toggleAction, selectIsOpen } from "./previewModal";
import { RootState } from "../rootReducer";

describe("reducer", () => {
  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual({ isOpen: false });
  });

  describe("toggleAction", () => {
    it("can turn open to close.", () => {
      const prevState = { isOpen: true };
      expect(reducer(prevState, toggleAction())).toEqual({ isOpen: false });
    });

    it("can turn close to open.", () => {
      const prevState = { isOpen: false };
      expect(reducer(prevState, toggleAction())).toEqual({ isOpen: true });
    });
  });
});

describe("selectIsOpen", () => {
  const createRootState = (partialState: any) =>
    ({ ui: { previewModal: partialState } } as RootState);

  it("should be true when to open.", () => {
    const rootState = createRootState({ isOpen: true });
    expect(selectIsOpen(rootState)).toBe(true);
  });

  it("should be false when to close.", () => {
    const rootState = createRootState({ isOpen: false });
    expect(selectIsOpen(rootState)).toBe(false);
  });
});
