import { mergeSort } from "./mergeSort";

describe("Merge sort tests", () => {
  let arr1, arr2, arr3, arr4, arr5;

  function compareNums(a: number, b: number) {
    return a - b;
  }

  beforeEach(() => {
    arr1 = [1, 5, 8, 4, 2, 9, 6, 0, 3, 7];
    arr2 = [];
    arr3 = [2];
    arr4 = [0, 1, 2, 3, 4, 5];
    arr5 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 50));
  });

  test("merge sort", () => {
    expect(mergeSort(arr1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(mergeSort(arr2)).toEqual([]);
    expect(mergeSort(arr3)).toEqual([2]);
    expect(mergeSort(arr4)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(mergeSort(arr5)).toEqual([...arr5].sort(compareNums));
  });
});
