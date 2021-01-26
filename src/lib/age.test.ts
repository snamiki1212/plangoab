import { getRangeNumbers } from "./age";

describe("func: getRangeNumbers", () => {
  it("common", () => {
    const result = getRangeNumbers(1, 10);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(result).toEqual(expected);
  });
  it("same value", () => {
    const result = getRangeNumbers(1, 1);
    const expected = [1];
    expect(result).toEqual(expected);
  });
  it("invalid value", () => {
    const result = getRangeNumbers(2, 1);
    const expected = [];
    expect(result).toEqual(expected);
  });
});
