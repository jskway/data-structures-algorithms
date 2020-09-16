const compareNums = (a: number, b: number) => a - b;

export const singleNumber = (arr: number[]) => {
  arr.sort(compareNums);
  let idx = 0;

  while (idx < arr.length) {
    try {
      if (arr[idx] !== arr[idx + 1]) {
        return arr[idx];
      }
    } catch (err) {
      return arr[idx];
    }
    idx += 2;
  }
};
