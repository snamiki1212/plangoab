import { nameOf } from "~/src/testHelpers/index";
import { RootState } from "~/src/redux/rootReducer";
import reducer, {
  disableConfirmBeforeLeaveAction,
  selectIsConfirmBeforeLeave,
} from "./navigation";

describe(nameOf({ reducer }), () => {
  const initialState = {
    isConfirmBeforeLeave: true,
  };

  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe(nameOf({ disableConfirmBeforeLeaveAction }), () => {
    // it("can reset.", () => {
    //   const prevState = { { isConfirmBeforeLeave: true } ;
    //   expect(reducer(prevState, resetAction())).toEqual(initialState);
    // });
    it("can run.", () => {
      const befState = initialState;
      const aftState = { isConfirmBeforeLeave: false };
      expect(reducer(befState, disableConfirmBeforeLeaveAction())).toEqual(
        aftState
      );
    });
  });
});

describe("Selector of", () => {
  const createRootState = (partialState) =>
    ({ v2: { ui: { navigation: partialState } } } as RootState);

  const rootState = createRootState({
    isConfirmBeforeLeave: false,
  });

  describe(nameOf({ selectIsConfirmBeforeLeave }), () => {
    it("can select.", () => {
      expect(selectIsConfirmBeforeLeave(rootState)).toEqual(false);
    });
  });
});
