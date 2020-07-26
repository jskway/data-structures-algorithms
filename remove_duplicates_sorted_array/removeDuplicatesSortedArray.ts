export const removeDuplicates = (nums: number[]): number => {
  let idx = 0;

  while (idx < nums.length - 1) {
    if (nums[idx] === nums[idx + 1]) {
      nums.splice(idx + 1, 1);
    } else {
      idx++;
    }
  }
  return nums.length;
};
