def product_of_all_other_numbers(arr):
    products = [0] * len(arr)

    product_before = 1

    for i in range(len(arr)):
        products[i] = product_before
        product_before *= arr[i]

    product_after = 1

    for j in range(len(arr)-1, -1, -1):
        products[j] *= product_after
        product_after *= arr[j]

    return products

