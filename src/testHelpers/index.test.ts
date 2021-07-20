import { toStr } from "./index";

describe("toStr", () => {
  it("can work for string", () => {
    const str1 = "xyz";
    expect(toStr({ str1 })).toBe("str1");
  });

  it("can work for num", () => {
    const num1 = 10;
    expect(toStr({ num1 })).toBe("num1");
  });

  it("can work for function", () => {
    const f1 = () => {};
    expect(toStr({ f1 })).toBe("f1");
  });
});
