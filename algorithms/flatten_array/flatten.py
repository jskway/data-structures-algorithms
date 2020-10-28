def flatten(arr):
    flatArr = []

    for item in arr:
        if type(item) is list:
            flat = flatten(item)
            flatArr.extend(flat)
        else:
            flatArr.append(item)

    return flatArr

