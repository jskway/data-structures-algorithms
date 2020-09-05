import { binarySearch } from "./binarySearch";

describe("binarySearch tests", () => {
  const arr1 = [-9, -8, -6, -4, -3, -2, 0, 1, 2, 3, 5, 7, 8, 9];
  const arr2 = [];

  test("binary search", () => {
    expect(binarySearch(arr1, -8)).toEqual(1);
    expect(binarySearch(arr1, 0)).toEqual(6);
    expect(binarySearch(arr2, 6)).toEqual(-1);
    expect(binarySearch(arr2, 0)).toEqual(-1);
  });
});
