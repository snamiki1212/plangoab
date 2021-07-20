import { uuid } from "./uuid";

describe(uuid.name, () => {
  it("can generate uniq id.", () => {
    expect(uuid()).not.toEqual(uuid());
  });
});
