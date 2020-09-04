def bubble_sort(arr):
    swapped = True

    while(swapped):
        swapped = False
        for i in range(0, len(arr)-1):
            if arr[i] > arr[i + 1]:
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                swapped = True

    return arr
