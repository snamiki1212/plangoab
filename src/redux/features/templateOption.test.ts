import { toStr } from "@/testHelpers/index";
import reducer, {
  selectTemplateOption,
  selectWithWorkingholiday,
  resetAction,
  updateAction,
} from "./templateOption";
import { RootState } from "../rootReducer";

const initialState = {
  option: {
    schoolPeriod: 12 * 2,
    coopPeriod: 12 * 2,
    pgwpPeriod: 12 * 3,
    workingholidayPeriod: 12,
    monthsOfStartSchool: [1, 5, 9],
  },
};

const dummyOption = {
  schoolPeriod: 999,
  coopPeriod: 999,
  pgwpPeriod: 999,
  workingholidayPeriod: 999,
  monthsOfStartSchool: [2, 4, 6, 8, 10, 12],
};

const createRootState = (partialState: any) =>
  ({ features: { templateOption: { option: partialState } } } as RootState);

describe(toStr({ reducer }), () => {
  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });
  describe(toStr({ resetAction }), () => {
    it("can work.", () => {
      const befState = { option: dummyOption };
      expect(reducer(befState, resetAction())).toEqual(initialState);
    });
  });
  describe(toStr({ updateAction }), () => {
    it("can work.", () => {
      const aftState = { option: dummyOption };
      expect(reducer(undefined, updateAction(dummyOption))).toEqual(aftState);
    });
  });
});

describe("Selectors of ", () => {
  describe(toStr({ selectTemplateOption }), () => {
    it("can select.", () => {
      const rootState = createRootState(dummyOption);
      expect(selectTemplateOption(rootState)).toEqual(dummyOption);
    });
  });
  describe(toStr({ selectWithWorkingholiday }), () => {
    it("can select as true.", () => {
      const rootState = createRootState({
        ...dummyOption,
        workingholidayPeriod: 1,
      });
      expect(selectWithWorkingholiday(rootState)).toEqual(true);
    });
    it("can select as false", () => {
      const rootState = createRootState({
        ...dummyOption,
        workingholidayPeriod: 0,
      });
      expect(selectWithWorkingholiday(rootState)).toEqual(false);
    });
  });
});
