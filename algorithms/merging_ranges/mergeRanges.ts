export const mergeRanges = (meetings) => {
  // Sort by start time
  meetings.sort((a, b) => a[0] - b[0]);

  let idx = 0;

  while (idx < meetings.length - 1) {
    // If the end of the current meeting is equal to or
    // later than the start of the next meeting
    if (meetings[idx][1] >= meetings[idx + 1][0]) {
      // Get the later of the two end times
      const endTime = Math.max(meetings[idx][1], meetings[idx + 1][1]);
      // Replace the current meeting with the merged meeting times
      meetings[idx] = [meetings[idx][0], endTime];

      // Remove the next meeting from the list
      meetings.splice(idx + 1, 1);
    } else {
      idx++;
    }
  }

  return meetings;
};
