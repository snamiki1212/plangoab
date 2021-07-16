import { convertIsoToDateTime, convertIsoToYearAndMonth } from "./date";

const dummyDate = new Date("2020-06-01 12:23:34 GMT");

describe(convertIsoToDateTime.name, () => {
  it("can work.", () => {
    expect(convertIsoToDateTime(dummyDate)).toBe("2020-06-01");
  });
});

describe(convertIsoToYearAndMonth.name, () => {
  it("can work.", () => {
    expect(convertIsoToYearAndMonth(dummyDate)).toBe("2020-06");
    expect(convertIsoToYearAndMonth(dummyDate.toISOString())).toBe("2020-06");
  });
});
