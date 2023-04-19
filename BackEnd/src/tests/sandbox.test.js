const sandbox = require("../sandbox");

describe("sanbox module", () => {
  test("addNumbers - should take A and B and return sum of A and B", () => {
    const result = sandbox.addNumbers(5, 2);
    expect(result).toBe(7);
  });
});
