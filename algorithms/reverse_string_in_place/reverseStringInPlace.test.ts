import reverseString from "./reverseStringInPlace";

describe("reverseStringInPlace tests", () => {
  test("reverses odd length string", () => {
    const actual = reverseString("start");
    const expected = "trats";

    expect(actual).toBe(expected);
  });

  test("reverses even length string", () => {
    const actual = reverseString("solution");
    const expected = "noitulos";

    expect(actual).toBe(expected);
  });
});
