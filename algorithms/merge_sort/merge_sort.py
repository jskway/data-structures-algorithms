def merge(left, right):
    total = len(left) + len(right)
    merged = [0] * total

    l = 0
    r = 0
    m = 0

    while l < len(left) and r < len(right):
        if left[l] <= right[r]:
            merged[m] = left[l]
            l += 1
            m += 1
        else:
            merged[m] = right[r]
            r += 1
            m += 1
    while l < len(left):
        merged[m] = left[l]
        l += 1
        m += 1
    while r < len(right):
        merged[m] = right[r]
        r += 1
        m += 1

    return merged

def merge_sort(arr):
    if len(arr) < 2:
        return arr

    mid = len(arr) // 2

    sortedLeft = merge_sort(arr[:mid])
    sortedRight = merge_sort(arr[mid:])

    return merge(sortedLeft, sortedRight)

"""
In-place implementations
"""
def merge_in_place(arr, start, mid, end):
    start2 = mid + 1

    # If the direct merge is already sorted 
    if (arr[mid] <= arr[start2]):
        return

    # Two pointers to maintain start 
    # of both arrays to merge 
    while (start <= mid and start2 <= end):

        # If element 1 is in right place 
        if (arr[start] <= arr[start2]):
            start += 1
        else:
            value = arr[start2]
            index = start2

            # Shift all the elements between element 1 
            # element 2, right by 1. 
            while (index != start):
                arr[index] = arr[index - 1]
                index -= 1

            arr[start] = value

            # Update all the pointers 
            start += 1
            mid += 1
            start2 += 1
    return arr

def merge_sort_in_place(arr, start, end):
        if (start < end):
            mid = (start + end) // 2

            merge_sort_in_place(arr, start, mid)
            merge_sort_in_place(arr, mid + 1, end)
            merge_in_place(arr, start, mid, end)
        return arr
