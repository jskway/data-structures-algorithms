def merge_ranges(meetings):
    # Sort by start time
    meetings.sort(key = lambda x: x[0])

    idx = 0

    while idx < len(meetings) - 1:
        # If the end of the current meeting is equal to
        # or later than the start of the next meeting
        if meetings[idx][1] >= meetings[idx+1][0]:
            # The end time of the merged meeting is the later end_time
            end_time = max(meetings[idx][1], meetings[idx+1][1])

            # Replace the current meeting with the merged meeting times
            meetings[idx] = (meetings[idx][0], end_time)

            # Remove the next meeting from the list
            meetings.pop(idx + 1)
        else:
            idx += 1
    return meetings
