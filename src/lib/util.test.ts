import { range } from "./util";

describe("func: range", () => {
  test("sucess", () => {
    expect(range(1, 5, 2)).toEqual([1, 3, 5]);
  });
});
