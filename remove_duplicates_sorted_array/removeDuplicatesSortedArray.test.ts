import { removeDuplicates } from "./removeDuplicatesSortedArray";

const nums = [1, 1, 2];
const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

it("should return length 2", () => {
  const expected = 2;
  const actual = removeDuplicates(nums);

  expect(expected).toEqual(actual);
});

it("should return length 5", () => {
  const expected = 5;
  const actual = removeDuplicates(nums2);

  expect(expected).toEqual(actual);
});
