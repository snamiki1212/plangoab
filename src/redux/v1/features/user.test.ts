import { addYears } from "date-fns";
import { toStr } from "@/testHelpers/index";
import { RootState } from "@/redux/rootReducer";

const PERSONA_AGE = 25;
const getBirthday = (today: Date) =>
  addYears(today, -PERSONA_AGE).toISOString();

describe("[mock before import files because using date at global scope]", () => {
  const mockDate = new Date(2005, 1, 1);
  let reducer, selectUserWithAge, updateBirthdayAction, resetAction;
  beforeAll(() => {
    // mock date
    jest.useFakeTimers("modern");
    jest.setSystemTime(mockDate);

    // lazy load
    const modules = require("./user");
    reducer = modules.default;
    selectUserWithAge = modules.selectUserWithAge;
    updateBirthdayAction = modules.updateBirthdayAction;
    resetAction = modules.resetAction;
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe(toStr({ reducer }), () => {
    it("can init.", () => {
      const initialState = {
        birthday: getBirthday(mockDate),
      };
      expect(reducer(undefined, {} as any)).toEqual(initialState);
    });
  });

  describe(toStr({ updateBirthdayAction }), () => {
    it("can work.", () => {
      const befBirthday = new Date(2999, 1, 1);
      const aftBirthday = new Date();
      const befState = { birthday: befBirthday.toISOString() };
      const aftState = { birthday: aftBirthday.toISOString() };
      expect(
        reducer(
          befState,
          updateBirthdayAction({ birthday: aftBirthday.toISOString() })
        )
      ).toEqual(aftState);
    });
  });

  describe(toStr({ resetAction }), () => {
    it("can work.", () => {
      const befState = { birthday: getBirthday(new Date(1990, 1, 1)) };
      const aftState = { birthday: getBirthday(mockDate) };
      expect(reducer(befState, resetAction())).toEqual(aftState);
    });
  });

  describe(toStr({ selectUserWithAge }), () => {
    const createRootState = (partialState: any) =>
      ({ features: { user: partialState } } as RootState);

    it("can select.", () => {
      const user = { birthday: "2000-01-01", age: 5 }; // 2005 - 5 = 2000
      const rootState = createRootState(user);
      expect(selectUserWithAge(rootState)).toEqual(user);
    });
  });
});
