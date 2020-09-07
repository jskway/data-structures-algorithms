def moving_zeroes(arr):
    idx = 0
    moved = 0

    while idx < len(arr) - moved:
        if arr[idx] == 0:
            arr.pop(idx)
            arr.append(0)
            moved += 1
        else:
            idx += 1

    return arr
