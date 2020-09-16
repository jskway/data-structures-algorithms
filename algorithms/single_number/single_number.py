def single_number(arr):
    arr.sort()
    idx = 0
    while idx < len(arr):
        try:
            if arr[idx] != arr[idx + 1]:
                return arr[idx]
        except IndexError:
            return arr[idx]
        idx += 2
