# Remove Duplicates from Sorted Array

## Problem

Given a sorted array _nums_, remove the duplicates in-place such that each element
appear only _once_ and return the new length.

Do not allocate extra space for another array, you must do this by **modifying
the input array** in-place with O(1) extra memory.

[Source: LeetCode](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/)

### Example

```md
Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums
being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.
```

### Solutions

#### Python

```python
def remove_duplicates(nums):
    idx = 0

    while idx < len(nums) - 1:
        if nums[idx] == nums[idx+1]:
            nums.pop(idx+1)
        else:
            idx += 1

    return len(nums)
```

#### TypeScript

```typescript
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
```
