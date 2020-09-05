export const binarySearch = (arr: number[], target: number) => {
  if (arr.length === 0) return -1;

  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);

    if (arr[middle] === target) return middle;
    if (arr[middle] < target) low = middle + 1;
    if (arr[middle] > target) high = middle - 1;
  }

  return -1;
};
