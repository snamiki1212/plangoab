import { toStr } from "@/testHelpers/index";
import reducer, { selectUser, updateBirthdayAction, resetAction } from "./user";
import { addYears } from "date-fns";
import { RootState } from "../rootReducer";

const PERSONA_AGE = 25;
const personaBirth = addYears(new Date(), -PERSONA_AGE).toISOString();

describe(toStr({ reducer }), () => {
  const initialState = {
    birthday: personaBirth,
    age: PERSONA_AGE,
  };
  it.skip("can init.", () => {
    // TODO: fix to be testable
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });
  describe(toStr({ updateBirthdayAction }), () => {
    it.skip("can work.", () => {
      // TODO: fix to be testable
    });
  });
  describe(toStr({ resetAction }), () => {
    it.skip("can work.", () => {
      // TODO: fix to be testable
      const befState = { birthday: personaBirth, age: 99 };
      const aftState = { birthday: personaBirth, age: PERSONA_AGE };
      expect(reducer(befState, resetAction())).toEqual(aftState);
    });
  });
});

const createRootState = (partialState: any) =>
  ({ features: { user: partialState } } as RootState);

describe(toStr({ selectUser }), () => {
  it("can select.", () => {
    const dummyUser = { birthday: "2021-01-01", age: 10 };
    const rootState = createRootState(dummyUser);
    expect(selectUser(rootState)).toEqual(dummyUser);
  });
});
