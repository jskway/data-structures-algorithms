import flatten from "./flatten";

describe("flatten tests", () => {
  test("nested array", () => {
    const exampleArray = [1, 2, [3, 4, [5, 6, 7], 8], 9, 10];
    const actual = flatten(exampleArray);
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(actual).toEqual(expected);
  });

  test("flat array", () => {
    const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const actual = flatten(exampleArray);

    expect(actual).toEqual(expected);
  });
});
