import { nameOf } from "~/src/testHelpers/index";
import reducer, {
  selectTemplateOption,
  selectWithWorkingholiday,
  resetAction,
  updateAction,
} from "./templateOption";
import { RootState } from "~/src/redux/reducers/rootReducer";

const initialState = {
  option: {
    schoolPeriod: 12 * 2,
    coopPeriod: 12 * 2,
    pgwpPeriod: 12 * 3,
    workingholidayPeriod: 12,
    monthsOfStartSchool: [1, 5, 9],
  },
};

const option = {
  schoolPeriod: 999,
  coopPeriod: 999,
  pgwpPeriod: 999,
  workingholidayPeriod: 999,
  monthsOfStartSchool: [2, 4, 6, 8, 10, 12],
};

const createRootState = (partialState: any) =>
  ({ features: { templateOption: { option: partialState } } } as RootState);

describe(nameOf({ reducer }), () => {
  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });
  describe(nameOf({ resetAction }), () => {
    it("can work.", () => {
      const befState = { option: option };
      expect(reducer(befState, resetAction())).toEqual(initialState);
    });
  });
  describe(nameOf({ updateAction }), () => {
    it("can work.", () => {
      const aftState = { option: option };
      expect(reducer(undefined, updateAction(option))).toEqual(aftState);
    });
  });
});

describe("Selectors of ", () => {
  describe(nameOf({ selectTemplateOption }), () => {
    it("can select.", () => {
      const rootState = createRootState(option);
      expect(selectTemplateOption(rootState)).toEqual(option);
    });
  });
  describe(nameOf({ selectWithWorkingholiday }), () => {
    it("can select as true.", () => {
      const rootState = createRootState({
        ...option,
        workingholidayPeriod: 1,
      });
      expect(selectWithWorkingholiday(rootState)).toEqual(true);
    });
    it("can select as false", () => {
      const rootState = createRootState({
        ...option,
        workingholidayPeriod: 0,
      });
      expect(selectWithWorkingholiday(rootState)).toEqual(false);
    });
  });
});
