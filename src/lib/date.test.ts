import { convertIsoToDateTime, convertIsoToYearAndMonth } from "./date";

const dummyDate = new Date("2020-06-01 12:23:34 GMT");

describe("func: convertIsoToDateTime", () => {
  it("sucess", () => {
    expect(convertIsoToDateTime(dummyDate)).toBe("2020-06-01");
  });
});

describe("func: convertIsoToYearAndMonth", () => {
  it("sucess", () => {
    expect(convertIsoToYearAndMonth(dummyDate)).toBe("2020-06");
    expect(convertIsoToYearAndMonth(dummyDate.toISOString())).toBe("2020-06");
  });
});
