import { bubbleSort } from "./bubbleSort";

describe("bubbleSort test", () => {
  const arr1 = [1, 5, 8, 4, 2, 9, 6, 0, 3, 7];
  const arr2 = [];
  const arr3 = [0, 1, 2, 3, 4, 5];
  const arr4 = Array.from({ length: 50 }, () => Math.floor(Math.random() * 50));

  function compareNums(a: number, b: number) {
    return a - b;
  }

  test("bubble sort", () => {
    expect(bubbleSort(arr1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(bubbleSort(arr2)).toEqual([]);
    expect(bubbleSort(arr3)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(bubbleSort(arr4)).toEqual([...arr4].sort(compareNums));
  });
});
