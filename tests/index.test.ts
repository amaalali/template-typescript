import identity from "../src/index.ts";

describe("identity", () => {
  it("returns the input", () => {
    const input = 1;
    expect(identity(input)).toEqual(input);
  });
});
