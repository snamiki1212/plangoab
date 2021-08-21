import {
  renderYYYYMMfromStr,
  createDate,
  startOfMonth,
  endOfMonth,
  createRange,
  resetHHMMssmm,
  convertDateSelectArgToRange,
} from "./date";

const today = new Date("2020-06-01 12:23:34 GMT");

describe(renderYYYYMMfromStr.name, () => {
  it("can work.", () => {
    expect(renderYYYYMMfromStr(today)).toBe("2020-06");
    expect(renderYYYYMMfromStr(today.toISOString())).toBe("2020-06");
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

describe(resetHHMMssmm.name, () => {
  it("can work.", () => {
    const expected = "2020-06-01T07:00:00.000Z";
    expect(resetHHMMssmm(today).toISOString()).toEqual(expected);
  });
});

describe(endOfMonth.name, () => {
  it("can work on 31.", () => {
    const result = endOfMonth(createDate("2021-01-01 00:00"));
    const expected = createDate("2021-01-31 00:00");
    expect(result).toEqual(expected);
  });
  it("can work on 28.", () => {
    const result = endOfMonth(createDate("2021-02-01 00:00"));
    const expected = createDate("2021-02-28 00:00");
    expect(result).toEqual(expected);
  });
  it("can work on 30.", () => {
    const result = endOfMonth(createDate("2021-04-01 00:00"));
    const expected = createDate("2021-04-30 00:00");
    expect(result).toEqual(expected);
  });
});

describe(startOfMonth.name, () => {
  it("can work on Jan.", () => {
    const result = startOfMonth(createDate("2021-01-31 00:00"));
    const expected = createDate("2021-01-01 00:00");
    expect(result).toEqual(expected);
  });
  it("can work on Feb.", () => {
    const result = startOfMonth(createDate("2021-02-01 00:00"));
    const expected = createDate("2021-02-01 00:00");
    expect(result).toEqual(expected);
  });
});

describe(createRange.name, () => {
  it("should be one month by 0.", () => {
    const result = createRange(createDate("2021-01-01 00:00"), 0);
    const expected = [
      createDate("2021-01-01 00:00"),
      createDate("2021-01-31 00:00"),
    ];
    expect(result).toEqual(expected);
  });
  it("should be one month by 1.", () => {
    const result = createRange(createDate("2021-01-01 00:00"), 1);
    const expected = [
      createDate("2021-01-01 00:00"),
      createDate("2021-01-31 00:00"),
    ];
    expect(result).toEqual(expected);
  });

  it("should be 3 month.", () => {
    const result = createRange(createDate("2021-01-01 00:00"), 3);
    const expected = [
      createDate("2021-01-01 00:00"),
      createDate("2021-03-31 00:00"),
    ];
    expect(result).toEqual(expected);
  });
});

describe(convertDateSelectArgToRange.name, () => {
  it("can works on 1 month.", () => {
    const start = createDate("2021-01-01 00:00");
    const end = createDate("2021-02-01 00:00");
    expect(convertDateSelectArgToRange(start, end)).toEqual([
      createDate("2021-01-01 00:00"),
      createDate("2021-01-31 00:00"),
    ]);
  });

  it("can works on 2 month.", () => {
    const start = createDate("2021-01-01 00:00");
    const end = createDate("2021-03-01 00:00");
    expect(convertDateSelectArgToRange(start, end)).toEqual([
      createDate("2021-01-01 00:00"),
      createDate("2021-02-28 00:00"),
    ]);
  });
});
