def reverse_chars(chars):
    # Initialize two pointers to track the start and end of the list
    start = 0
    end = len(chars)-1

    while start < end:
        chars[start], chars[end] = chars[end], chars[start]
        start += 1
        end -= 1

    return chars
