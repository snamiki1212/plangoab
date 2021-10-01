import { toStr } from "~/src/testHelpers/index";
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
} from "~/src/core/v1/calendar/TemplateCalendar/model";
import { RootState } from "~/src/redux/rootReducer";
import {
  privateCollegeCalendarFactory,
  publicCollegeCalendarFactory,
} from "~/src/testHelpers/v1/factories/core/calendar";

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
    const privateCollegeCalendar = privateCollegeCalendarFactory.build();
    const publicCollegeCalendar = publicCollegeCalendarFactory.build();
    const befState = {
      [PRIVATE_COLLEGE_CALENDAR_ID]: privateCollegeCalendar,
      [PUBLIC_COLLEGE_CALENDAR_ID]: publicCollegeCalendar,
    };
    expect(reducer(befState, resetAction)).toEqual(initialState);
  });

  describe(toStr({ upsertPrivateCollegeCalendarAction }), () => {
    it("can work.", () => {
      const privateCollegeCalendar = privateCollegeCalendarFactory.build();
      const aftState = {
        [PRIVATE_COLLEGE_CALENDAR_ID]: privateCollegeCalendar,
        [PUBLIC_COLLEGE_CALENDAR_ID]: undefined,
      };
      expect(
        reducer(
          undefined,
          upsertPrivateCollegeCalendarAction({
            calendar: privateCollegeCalendar,
          })
        )
      ).toEqual(aftState);
    });
  });

  describe(toStr({ upsertPublicCollegeCalendarAction }), () => {
    it("can work.", () => {
      const publicCollegeCalendar = publicCollegeCalendarFactory.build();
      const aftState = {
        [PRIVATE_COLLEGE_CALENDAR_ID]: undefined,
        [PUBLIC_COLLEGE_CALENDAR_ID]: publicCollegeCalendar,
      };
      expect(
        reducer(
          undefined,
          upsertPublicCollegeCalendarAction({
            calendar: publicCollegeCalendar,
          })
        )
      ).toEqual(aftState);
    });
  });
});

describe("Selector of", () => {
  const privateCollegeCalendar = privateCollegeCalendarFactory.build();
  const publicCollegeCalendar = publicCollegeCalendarFactory.build();
  const rootState = createRootState({
    [PRIVATE_COLLEGE_CALENDAR_ID]: privateCollegeCalendar,
    [PUBLIC_COLLEGE_CALENDAR_ID]: publicCollegeCalendar,
  });

  describe(toStr({ selectPrivateCollegeCalendar }), () => {
    it("can select.", () => {
      expect(selectPrivateCollegeCalendar(rootState)).toEqual(
        privateCollegeCalendar
      );
    });
  });

  describe(toStr({ selectPublicCollegeCalendar }), () => {
    it("can select.", () => {
      expect(selectPublicCollegeCalendar(rootState)).toEqual(
        publicCollegeCalendar
      );
    });
  });
});
