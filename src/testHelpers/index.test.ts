import { nameOf } from "./index";

describe("nameOf", () => {
  it("can work for string", () => {
    const str1 = "xyz";
    expect(nameOf({ str1 })).toBe("str1");
  });

  it("can work for num", () => {
    const num1 = 10;
    expect(nameOf({ num1 })).toBe("num1");
  });

  it("can work for function", () => {
    const f1 = () => {};
    expect(nameOf({ f1 })).toBe("f1");
  });
});
