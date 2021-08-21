import {
  convertIsoToDateTime,
  convertIsoToYearAndMonth,
  createDate,
} from "./date";

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

describe(createDate.name, () => {
  it("can work.", () => {
    const d1 = createDate("2021-01-01 12:12:12");
    const d2 = createDate("2021-01-01 11:11:11");
    expect(d1).toEqual(d2);

    const n1 = createDate();
    const n2 = createDate();
    expect(n1).toEqual(n2);
  });
});
