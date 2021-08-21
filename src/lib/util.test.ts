import { range } from "./util";

describe(range.name, () => {
  test("can work.", () => {
    expect(range(1, 5, 2)).toEqual([1, 3, 5]);
  });
});
