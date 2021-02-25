import { convertIsoToDateTime, convertIsoToYearAndMonth } from "./date";

const dummyDate = new Date("2020-01-01 12:23:34");

describe("func: convertIsoToDateTime", () => {
  it("sucess", () => {
    expect(convertIsoToDateTime(dummyDate)).toBe("2020-01-01");
  });
});

describe("func: convertIsoToYearAndMonth", () => {
  it("sucess", () => {
    expect(convertIsoToYearAndMonth(dummyDate)).toBe("2020-01");
  });
});
