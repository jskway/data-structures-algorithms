# Binary Search

Binary search is a search algorithm that finds the position of a target value
within a **sorted** array.

## Algorithm

1. Compare the target value to the middle element of the array
2. If they are equal, return the index of the element
   - If the element is less than the target, we want to search the right of the
     element. Find the middle value of the elements to the right of the current
     middle element. Set it as the new middle element
   - If the element is greater than the target, we want to search the left of the
     element. Find the middle value of the elements to the left of the current
     middle element. Set it as the new middle element
3. Go back to step 1 and repeat
4. If there are no elements left to search, the target value does not exist in
   the array
