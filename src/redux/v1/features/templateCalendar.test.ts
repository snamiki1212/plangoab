import { nameOf } from "~/src/testHelpers/index";
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
import { RootState } from "~/src/redux/reducers/rootReducer";
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

describe(nameOf({ reducer }), () => {
  it("can init.", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  describe(nameOf({ resetAction }), () => {
    const privateCollegeCalendar = privateCollegeCalendarFactory.build();
    const publicCollegeCalendar = publicCollegeCalendarFactory.build();
    const befState = {
      [PRIVATE_COLLEGE_CALENDAR_ID]: privateCollegeCalendar,
      [PUBLIC_COLLEGE_CALENDAR_ID]: publicCollegeCalendar,
    };
    expect(reducer(befState, resetAction)).toEqual(initialState);
  });

  describe(nameOf({ upsertPrivateCollegeCalendarAction }), () => {
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

  describe(nameOf({ upsertPublicCollegeCalendarAction }), () => {
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

  describe(nameOf({ selectPrivateCollegeCalendar }), () => {
    it("can select.", () => {
      expect(selectPrivateCollegeCalendar(rootState)).toEqual(
        privateCollegeCalendar
      );
    });
  });

  describe(nameOf({ selectPublicCollegeCalendar }), () => {
    it("can select.", () => {
      expect(selectPublicCollegeCalendar(rootState)).toEqual(
        publicCollegeCalendar
      );
    });
  });
});
