export const movingZeroes = (arr: number[]) => {
  let idx = 0;
  let moved = 0;

  while (idx < arr.length - moved) {
    if (arr[idx] === 0) {
      arr.splice(idx, 1);
      arr.push(0);
      moved++;
    } else {
      idx++;
    }
  }
  return arr;
};
