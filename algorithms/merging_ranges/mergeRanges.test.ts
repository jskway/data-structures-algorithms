import { mergeRanges } from "./mergeRanges";

describe("mergeRanges tests", () => {
  test("meetings overlap", () => {
    const expected = [[1, 4]];
    expect(
      mergeRanges([
        [1, 3],
        [2, 4],
      ])
    ).toEqual(expected);
  });

  test("meetings touch", () => {
    const expected = [[5, 8]];
    expect(
      mergeRanges([
        [5, 6],
        [6, 8],
      ])
    ).toEqual(expected);
  });

  test("meeting contains other meeting", () => {
    const expected = [[1, 8]];
    expect(
      mergeRanges([
        [1, 8],
        [2, 5],
      ])
    ).toEqual(expected);
  });

  test("meetings stay separate", () => {
    const expected = [
      [1, 3],
      [4, 8],
    ];
    expect(
      mergeRanges([
        [1, 3],
        [4, 8],
      ])
    ).toEqual(expected);
  });

  test("multiple merged meetings", () => {
    const expected = [[1, 8]];
    expect(
      mergeRanges([
        [1, 4],
        [2, 5],
        [5, 8],
      ])
    ).toEqual(expected);
  });

  test("meetings not sorted", () => {
    const expected = [
      [1, 4],
      [5, 8],
    ];
    expect(
      mergeRanges([
        [5, 8],
        [1, 4],
        [6, 8],
      ])
    ).toEqual(expected);
  });

  test("one long meeting contains smaller meetings", () => {
    const expected = [[1, 12]];
    expect(
      mergeRanges([
        [1, 10],
        [2, 5],
        [6, 8],
        [9, 10],
        [10, 12],
      ])
    ).toEqual(expected);
  });

  test("sample input", () => {
    const expected = [
      [0, 1],
      [3, 8],
      [9, 12],
    ];
    expect(
      mergeRanges([
        [0, 1],
        [3, 5],
        [4, 8],
        [10, 12],
        [9, 10],
      ])
    );
  });
});
