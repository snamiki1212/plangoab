import { toStr } from "@/testHelpers/index";
import reducer, {
  selectUserWithAge,
  updateBirthdayAction,
  resetAction,
} from "./user";
import { addYears } from "date-fns";
import { RootState } from "../rootReducer";

// const PERSONA_AGE = 25;
// const getBirthday = (today: Date) =>
//   addYears(today, -PERSONA_AGE).toISOString();

describe(toStr({ reducer }), () => {
  // const mockToday = new Date(2005, 1, 1);
  // let dateNowSpy;
  // beforeAll(() => {
  //   // jest.useFakeTimers("modern");
  //   // jest.setSystemTime(new Date(2005, 1, 1));
  //   dateNowSpy = jest
  //     .spyOn(Date, "now")
  //     .mockImplementation(() => Date.parse(mockToday.toISOString()));
  // });
  // afterAll(() => {
  //   // jest.useRealTimers();
  //   jest.clearAllMocks();
  // });

  it.skip("can init.", () => {
    // const today = mockToday;
    // const initialState = {
    //   birthday: getBirthday(today),
    // };
    // console.log({ initialState, today });
    // expect(reducer(undefined, {} as any)).toEqual(initialState);
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
    it.skip("can work.", () => {
      // TODO: fix to be testable
      // const befState = { birthday: personaBirth, age: 99 };
      // const aftState = { birthday: personaBirth, age: PERSONA_AGE };
      // expect(reducer(befState, resetAction())).toEqual(aftState);
    });
  });
});

describe(toStr({ selectUserWithAge }), () => {
  const createRootState = (partialState: any) =>
    ({ features: { user: partialState } } as RootState);

  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2005, 1, 1));
  });
  afterAll(() => {
    jest.useRealTimers();
  });

  it("can select.", () => {
    const dummyUser = { birthday: "2000-01-01", age: 5 };
    const rootState = createRootState(dummyUser);
    expect(selectUserWithAge(rootState)).toEqual(dummyUser);
  });
});
