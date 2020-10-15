# Merging Ranges

**Your company built an in-house calendar tool called HiCal. You want to add a
feature to see the times in a way when _everyone_ is available.**

To do this, you'll need to know when _any_ team is having a meeting. In HiCal,
a meeting is stored as a _tuple_ of integers `(start_time, end_time)`. These
integers represent the number of 30-minute blocks past 9:00am.

For example:

```python
(2, 3) # Meeting from 10:00 - 10:30 am
(6, 9) # Meeting from 12:00 - 1:30 pm
```

Write a function `merge_ranges()` that takes a list of multiple meeting time
ranges and returns a list of condensed ranges.

Example Input:

```python
[(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]
```

Example Output:

```python
[(0, 1), (3, 8), (9, 12)]
```

**Do not assume the meetings are in order.** The meeting times are coming from
multiple teams.

[Source: Interview Cake](https://interviewcake.com)
