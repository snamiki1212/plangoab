import {
  createPrivateCollegeCalendar,
  createPublicCollegeCalendar,
} from "./createCalendar";

describe(createPrivateCollegeCalendar.name, () => {
  test("can work.", () => {
    const calendar = createPrivateCollegeCalendar(
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
    expect(calendar.stories).toHaveLength(33);
  });
});

describe(createPublicCollegeCalendar.name, () => {
  test("can work.", () => {
    const calendar = createPublicCollegeCalendar(
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
    expect(calendar.stories).toHaveLength(33);
  });
});
