import { productOfAllOtherNumbers } from "./productOfAllOtherNumbers";

describe("Test productOfAllOtherNumbers", () => {
  test("positive integers", () => {
    expect(productOfAllOtherNumbers([9, 90])).toEqual([90, 9]);
    expect(productOfAllOtherNumbers([1, 2, 3, 4, 5])).toEqual([
      120,
      60,
      40,
      30,
      24,
    ]);
    const arr = [7, 9, 1, 8, 6, 7, 8, 8, 7, 10];
    const expected = [
      13547520,
      10536960,
      94832640,
      11854080,
      15805440,
      13547520,
      11854080,
      11854080,
      13547520,
      9483264,
    ];

    expect(productOfAllOtherNumbers(arr)).toEqual(expected);
  });

  test("positive integers and zeroes", () => {
    const arr = [7, 9, 1, 8, 6, 0, 7, 8, 8, 7, 10];
    const expected = [0, 0, 0, 0, 0, 94832640, 0, 0, 0, 0, 0];

    expect(productOfAllOtherNumbers(arr)).toEqual(expected);
  });
});
