import { toStr } from "@/testHelpers/index";
import { addYears } from "date-fns";
import { RootState } from "../rootReducer";

const PERSONA_AGE = 25;
const getBirthday = (today: Date) =>
  addYears(today, -PERSONA_AGE).toISOString();

describe("[mock before import files because using date at global scope]", () => {
  const mockDate = new Date(2005, 1, 1);

  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(mockDate);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  describe("[lazy load]", () => {
    let reducer, selectUserWithAge, updateBirthdayAction, resetAction;
    beforeAll(() => {
      const modules = require("./user");
      reducer = modules.default;
      selectUserWithAge = modules.selectUserWithAge;
      updateBirthdayAction = modules.updateBirthdayAction;
      resetAction = modules.resetAction;
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
        const today = new Date(2999, 1, 1);

        const birthday = new Date();
        const befState = { birthday: today.toISOString() };
        const aftState = { birthday: birthday.toISOString() };
        expect(
          reducer(
            befState,
            updateBirthdayAction({ birthday: birthday.toISOString() })
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
        const dummyUser = { birthday: "2000-01-01", age: 5 };
        const rootState = createRootState(dummyUser);
        expect(selectUserWithAge(rootState)).toEqual(dummyUser);
      });
    });
  });
});
