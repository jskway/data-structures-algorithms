def word_count(s):
    counts = {}
    to_ignore = '" : ; , . - + = / \ | [ ] { } ( ) * ^ &'

    s = s.lower()

    string_list = s.split()

    for word in string_list:
        # strip out invalid chars
        word = word.strip(to_ignore)

        # If there are no valid chars, skip to the next word
        if word == '': continue

        if word in counts:
            counts[word] += 1
        else:
            counts[word] = 1

    return counts
