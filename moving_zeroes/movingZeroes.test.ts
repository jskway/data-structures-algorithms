import { movingZeroes } from "./movingZeroes";

describe("moving zeroes", () => {
  test("moving zeroes case 1", () => {
    const arr = [0, 3, 1, 0, -2];
    const answer = movingZeroes(arr);

    expect(answer.length).toEqual(arr.length);

    answer.slice(0, 3).forEach((num) => {
      expect(arr).toContain(num);
      expect(num).not.toEqual(0);
    });

    answer.slice(3).forEach((num) => {
      expect(num).toEqual(0);
    });
  });

  test("moving zeroes case 2", () => {
    const arr = [1, 2, 3, 0, 4, 0, 0];
    const answer = movingZeroes(arr);

    answer.slice(0, 4).forEach((num) => {
      expect(arr).toContain(num)
      expect(num).not.toEqual(0);
    });

    answer.slice(4).forEach((num) => {
      expect(num).toEqual(0);
    });
  });

  test("moving zeroes case 3", () => {
    const arr = [4, 1, 2, 5];
    const answer = movingZeroes(arr);

    expect(answer.length).toEqual(arr.length);

    answer.forEach(num => {
      expect(arr).toContain(num);
      expect(num).not.toEqual(0);
    });
  });

  test("moving zeroes case 4", () => {
    const arr = [0, 0, 0, 0, 0];
    const answer = movingZeroes(arr);

    expect(answer.length).toEqual(arr.length);

    answer.forEach(num => {
      expect(num).toEqual(0);
    });
  });

  test("moving zeroes case 5", () => {
    const arr = [0, 0, 0, 0, 3, 2, 1];
    const answer = movingZeroes(arr);

    expect(answer.length).toEqual(arr.length);

    answer.slice(0, 3).forEach(num => {
      expect(arr).toContain(num);
      expect(num).not.toEqual(0);
    });

    answer.slice(3).forEach(num => {
      expect(num).toEqual(0);
    });

  });
});
