const merge = (left: number[], right: number[]) => {
  const total = left.length + right.length;
  const merged = [].fill(0, 0, total);

  let l = 0;
  let r = 0;
  let m = 0;

  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      merged[m] = left[l];
      l++;
      m++;
    } else {
      merged[m] = right[r];
      r++;
      m++;
    }
  }
  while (l < left.length) {
    merged[m] = left[l];
    l++;
    m++;
  }
  while (r < right.length) {
    merged[m] = right[r];
    r++;
    m++;
  }
  return merged;
};

export const mergeSort = (arr: number[]) => {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const sortedLeft = mergeSort(arr.slice(0, mid));
  const sortedRight = mergeSort(arr.slice(mid));

  return merge(sortedLeft, sortedRight);
};
