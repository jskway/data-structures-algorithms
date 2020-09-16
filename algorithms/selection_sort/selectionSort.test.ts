import { selectionSort } from "./selectionSort";

describe("selection sort test", () => {
  const arr1 = [1, 5, 8, 4, 2, 9, 6, 0, 3, 7];
  const arr2 = [];
  const arr3 = [0, 1, 2, 3, 4, 5];
  const arr4 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 50));

  function compareNums(a: number, b: number) {
    return a - b;
  }

  test("selection sort", () => {
    expect(selectionSort(arr1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(selectionSort(arr2)).toEqual([]);
    expect(selectionSort(arr3)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(selectionSort(arr4)).toEqual([...arr4].sort(compareNums));
  });
});
