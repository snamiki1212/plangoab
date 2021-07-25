import { toStr } from "@/testHelpers/index";
import reducer, {
  resetAction,
  upsertPublicCollegeCalendarAction,
  upsertPrivateCollegeCalendarAction,
  selectPrivateCollegeCalendar,
  selectPublicCollegeCalendar,
} from "./templateCalendar";
import {
  PRIVATE_COLLEGE_CALENDAR_ID,
  PUBLIC_COLLEGE_CALENDAR_ID,
} from "@/core/calendar/TemplateCalendar/model";
import { RootState } from "../rootReducer";
import {
  privateCollegeCalendarFactory,
  publicCollegeCalendarFactory,
} from "@/testHelpers/factories/core/calendar";

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
    const dummyPrivateCollegeCalendar = privateCollegeCalendarFactory.build();
    const dummyPublicCollegeCalendar = publicCollegeCalendarFactory.build();
    const befState = {
      [PRIVATE_COLLEGE_CALENDAR_ID]: dummyPrivateCollegeCalendar,
      [PUBLIC_COLLEGE_CALENDAR_ID]: dummyPublicCollegeCalendar,
    };
    expect(reducer(befState, resetAction)).toEqual(initialState);
  });

  describe(toStr({ upsertPrivateCollegeCalendarAction }), () => {
    it("can work.", () => {
      const dummyPrivateCollegeCalendar = privateCollegeCalendarFactory.build();
      const aftState = {
        [PRIVATE_COLLEGE_CALENDAR_ID]: dummyPrivateCollegeCalendar,
        [PUBLIC_COLLEGE_CALENDAR_ID]: undefined,
      };
      expect(
        reducer(
          undefined,
          upsertPrivateCollegeCalendarAction({
            calendar: dummyPrivateCollegeCalendar,
          })
        )
      ).toEqual(aftState);
    });
  });

  describe(toStr({ upsertPublicCollegeCalendarAction }), () => {
    it("can work.", () => {
      const dummyPublicCollegeCalendar = publicCollegeCalendarFactory.build();
      const aftState = {
        [PRIVATE_COLLEGE_CALENDAR_ID]: undefined,
        [PUBLIC_COLLEGE_CALENDAR_ID]: dummyPublicCollegeCalendar,
      };
      expect(
        reducer(
          undefined,
          upsertPublicCollegeCalendarAction({
            calendar: dummyPublicCollegeCalendar,
          })
        )
      ).toEqual(aftState);
    });
  });
});

describe("Selector of", () => {
  const dummyPrivateCollegeCalendar = privateCollegeCalendarFactory.build();
  const dummyPublicCollegeCalendar = publicCollegeCalendarFactory.build();
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
