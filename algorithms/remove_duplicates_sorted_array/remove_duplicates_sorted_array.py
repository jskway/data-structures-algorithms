def remove_duplicates(nums):
    idx = 0

    while idx < len(nums) - 1:
        if nums[idx] == nums[idx+1]:
            nums.pop(idx+1)
        else:
            idx += 1

    return len(nums)
