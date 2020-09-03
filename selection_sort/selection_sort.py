def selection_sort(arr):
    for i in range(0, len(arr)-1):
        minIdx = i

        for j in range(i+1, len(arr)):
            if arr[minIdx] > arr[j]:
                minIdx = j

        temp = arr[i]
        arr[i] = arr[minIdx]
        arr[minIdx] = temp

    return arr
