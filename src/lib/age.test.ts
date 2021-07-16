import { getRangeNumbers, calcAge } from "./age";

describe(getRangeNumbers.name, () => {
  it("can work.", () => {
    const result = getRangeNumbers(1, 10);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(result).toEqual(expected);
  });
  it("can work using same value", () => {
    const result = getRangeNumbers(1, 1);
    const expected = [1];
    expect(result).toEqual(expected);
  });
  it("cannot work because args are invalid values", () => {
    const result = getRangeNumbers(2, 1);
    const expected = [] as number[];
    expect(result).toEqual(expected);
  });
});

describe(calcAge.name, () => {
  const dummyToday = "2020-12-13";

  beforeAll(() => {
    jest.useFakeTimers("modern"); // tell Jest to use a different timer implementation.
    jest.setSystemTime(new Date(dummyToday).getTime());
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("can work.", () => {
    const birth0 = new Date("1980-12-12");
    const birth1 = new Date("1990-12-12");
    const birth2 = new Date("2000-12-12");
    const birth3 = new Date("2010-12-12");

    expect(calcAge(birth0)).toEqual(40);
    expect(calcAge(birth1)).toEqual(30);
    expect(calcAge(birth2)).toEqual(20);
    expect(calcAge(birth3)).toEqual(10);
  });

  it("can work checking 1day threshold", () => {
    const prevBirth = new Date("1990-12-12");
    const sameBirth = new Date("1990-12-13");
    const nextBirth = new Date("1990-12-14");
    expect(calcAge(prevBirth)).toEqual(30);
    expect(calcAge(sameBirth)).toEqual(30);
    expect(calcAge(nextBirth)).toEqual(29);
  });
});
