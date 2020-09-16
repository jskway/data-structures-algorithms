export const slidingWindowMax = (nums: number[], k: number) => {
  let idx = 0;
  const maxValues = [];

  while (idx <= nums.length - k) {
    const windowMax = Math.max(...nums.slice(idx, idx + k));
    maxValues.push(windowMax);
    idx++;
  }

  return maxValues;
};
