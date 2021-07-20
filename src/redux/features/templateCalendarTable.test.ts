import { toStr } from "@/testHelpers/index";
import reducer, {
  upsertPublicCollegeStoriesAction,
  resetAction,
  upsertPrivateCollegeStoriesAction,
  selectPrivateCollegeCalendar,
  selectPublicCollegeCalendar,
} from "./templateCalendarTable";
import {
  PRIVATE_COLLEGE_CALENDAR_ID,
  PUBLIC_COLLEGE_CALENDAR_ID,
} from "@/core/calendar/TemplateCalendar/model";
import { RootState } from "../rootReducer";
import {
  createDummyPrivateCollegeCalendar,
  createDummyPublicCollegeCalendar,
} from "@/testHelpers/factories/core";

const initialState = {
  [PRIVATE_COLLEGE_CALENDAR_ID]: undefined,
  [PUBLIC_COLLEGE_CALENDAR_ID]: undefined,
};

const createRootState = (partialState: any) =>
  ({
    features: { templateCalendar: partialState },
  } as RootState);

describe(toStr({ reducer }), () => {
  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe(toStr({ resetAction }), () => {
    const dummyPrivateCollegeCalendar = createDummyPrivateCollegeCalendar();
    const dummyPublicCollegeCalendar = createDummyPublicCollegeCalendar();
    const befState = {
      [PRIVATE_COLLEGE_CALENDAR_ID]: dummyPrivateCollegeCalendar,
      [PUBLIC_COLLEGE_CALENDAR_ID]: dummyPublicCollegeCalendar,
    };
    expect(reducer(befState, resetAction)).toEqual(initialState);
  });

  describe(toStr({ upsertPublicCollegeStoriesAction }), () => {
    it.skip("can work.", () => {
      // TODO: Fix to become testable
    });
  });

  describe(toStr({ upsertPrivateCollegeStoriesAction }), () => {
    it.skip("can work.", () => {
      // TODO: Fix to become testable
    });
  });
});

describe("Selector of", () => {
  const dummyPrivateCollegeCalendar = createDummyPrivateCollegeCalendar();
  const dummyPublicCollegeCalendar = createDummyPublicCollegeCalendar();
  const rootState = createRootState({
    [PRIVATE_COLLEGE_CALENDAR_ID]: dummyPrivateCollegeCalendar,
    [PUBLIC_COLLEGE_CALENDAR_ID]: dummyPublicCollegeCalendar,
  });

  describe(toStr({ selectPrivateCollegeCalendar }), () => {
    it("can select.", () => {
      expect(selectPrivateCollegeCalendar(rootState)).toEqual(
        dummyPrivateCollegeCalendar
      );
    });
  });

  describe(toStr({ selectPublicCollegeCalendar }), () => {
    it("can select.", () => {
      expect(selectPublicCollegeCalendar(rootState)).toEqual(
        dummyPublicCollegeCalendar
      );
    });
  });
});
