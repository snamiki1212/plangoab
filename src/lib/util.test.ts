import { range, isExternalUrl } from "./util";

describe(range.name, () => {
  test("can work.", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(1, 5, 2)).toEqual([1, 3, 5]);
  });
});

describe(isExternalUrl.name, () => {
  it("can work.", () => {
    expect(isExternalUrl("http://snamiki1212.com")).toBeTruthy();
    expect(isExternalUrl("https://snamiki1212.com")).toBeTruthy();
    expect(isExternalUrl("/calendars")).not.toBeTruthy();
  });
});
