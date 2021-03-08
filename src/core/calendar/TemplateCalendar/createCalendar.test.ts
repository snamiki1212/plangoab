import {
  createPrivateCollegeCalendar,
  createPublicCollegeCalendar,
} from "./createCalendar";

describe("func: createPrivateCollegeCalendar", () => {
  test("sucess", () => {
    const actual = createPrivateCollegeCalendar(
      {
        birth: new Date(),
        canWorkingholiday: false,
      },
      {
        schoolPeriod: 12,
        coopPeriod: 12,
        pgwpPeriod: 12,
        workingholidayPeriod: 12,
        monthsOfStartSchool: [1, 3, 5],
      }
    );

    // TODO: write more detail test
    expect(actual.stories).toHaveLength(33);
  });
});

describe("func: createPublicCollegeCalendar", () => {
  test("sucess", () => {
    const actual = createPublicCollegeCalendar(
      {
        birth: new Date(),
        canWorkingholiday: false,
      },
      {
        schoolPeriod: 12,
        coopPeriod: 12,
        pgwpPeriod: 12,
        workingholidayPeriod: 12,
        monthsOfStartSchool: [1, 3, 5],
      }
    );

    // TODO: write more detail test
    expect(actual.stories).toHaveLength(33);
  });
});
