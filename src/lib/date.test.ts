import { convertIsoToDateTime, convertIsoToYearAndMonth } from "./date";

const today = new Date("2020-06-01 12:23:34 GMT");

describe(convertIsoToDateTime.name, () => {
  it("can work.", () => {
    expect(convertIsoToDateTime(today)).toBe("2020-06-01");
  });
});

describe(convertIsoToYearAndMonth.name, () => {
  it("can work.", () => {
    expect(convertIsoToYearAndMonth(today)).toBe("2020-06");
    expect(convertIsoToYearAndMonth(today.toISOString())).toBe("2020-06");
  });
});
