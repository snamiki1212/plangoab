import reducer, {
  upsertPublicCollegeStoriesAction,
  resetAction,
  upsertPrivateCollegeStoriesAction,
} from "./templateCalendarTable";
import {
  PRIVATE_COLLEGE_CALENDAR_ID,
  PUBLIC_COLLEGE_CALENDAR_ID,
} from "@/core/calendar/TemplateCalendar/model";
import {
  PrivateCollegeCalendar,
  PublicCollegeCalendar,
} from "@/core/calendar/TemplateCalendar/model";

const initialState = {
  [PRIVATE_COLLEGE_CALENDAR_ID]: undefined,
  [PUBLIC_COLLEGE_CALENDAR_ID]: undefined,
};

const createDummyPrivateCollegeCalendar = () =>
  "dummy private college calendar" as any as PrivateCollegeCalendar;
const createDummyPublicCollegeCalendar = () =>
  "dummy public college calendar  " as any as PublicCollegeCalendar;

describe(reducer.name, () => {
  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe(resetAction.name, () => {
    const dummyPrivateCollegeCalendar = createDummyPrivateCollegeCalendar();
    const dummyPublicCollegeCalendar = createDummyPublicCollegeCalendar();
    const befState = {
      [PRIVATE_COLLEGE_CALENDAR_ID]: dummyPrivateCollegeCalendar,
      [PUBLIC_COLLEGE_CALENDAR_ID]: dummyPublicCollegeCalendar,
    };
    expect(reducer(befState, resetAction)).toEqual(initialState);
  });

  describe(upsertPublicCollegeStoriesAction.name, () => {
    it.skip("can work.", () => {
      // TODO: Fix to become testable
    });
  });

  describe(upsertPrivateCollegeStoriesAction.name, () => {
    it.skip("can work.", () => {
      // TODO: Fix to become testable
    });
  });
});
