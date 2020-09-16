# Merge Sort

**Merge Sort** is a [divide and conquer](https://www.geeksforgeeks.org/divide-and-conquer-introduction/)
sorting algorithm. It divides an array into two halves, recursively calls
itself on the two halves, and then merges the two sorted halves.

The algorithm can be divided into two main parts:

### 1. Merge Function

**Inputs:** a _left_ array and _right_ array

1. Create a new array with enough slots to hold the values in both the left and
   right arrays
2. Initialize variables to track indexes of the left array, right
   array and new array while iterating
3. Iterate through the left and right arrays

   - Compare the values of the left and right array at their current indexes
   - Copy the smaller of the two into the new array (if they're equal, copy the
     left one)
   - Increment the index of the array that was copied from
   - Increment the index of the new array
   - Repeat this step (3) until we reach the end of either the left or right array

4. Iterate through any remaining values (the array we haven't reached the end of),
   and copy them into the new array
5. Return the new array

### 2. Merge Sort function

**Inputs:** array

1. If the length of the array is less than 2, return it
2. Call merge sort recursively on the left half of the array, and store the
   result
3. Call merge sort recursively on the right half of the array, and store the
   result
4. Call the merge function, passing in the sorted left and right halves
5. Return the result of calling the merge function

The time complexity of merge sort is **O(n log n)**. Dividing the array into
halves takes logarithmic time and merge takes linear time.

The space complexity (non in-place) is **O(n)**.
