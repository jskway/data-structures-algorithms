def merge_ranges(meetings):
    # Sort by start time
    meetings.sort(key = lambda x: x[0])

    idx = 0

    while idx < len(meetings) - 1:
        # If the end of the first meeting is equal to
        # or later than the start of the second meeting
        if meetings[idx][1] >= meetings[idx+1][0]:
            # The end time of the merged meeting is the later end_time
            end_time = max(meetings[idx][1], meetings[idx+1][1])

            # Replace the first meeting with the merged meeting
            meetings[idx] = (meetings[idx][0], end_time)

            # Remove the second meeting from the list
            meetings.pop(idx + 1)
        else:
            idx += 1
    return meetings
