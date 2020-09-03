# Selection Sort

**Selection Sort** is an in-place comparison sorting algorithm.

Imagine a row of playing cards in random order. To use _Selection Sort_ to sort
the cards:

1. Set the left-most card as the 'card to swap'
2. Look at each remaining card to find the smallest card
3. Swap the smallest card with the 'card to swap'
4. Set the card to the right of the current 'card to swap' as the new 'card to
   swap'
5. Repeat steps 2 through 4 until the last card becomes the 'card to swap'

The time complexity for selection sort is **O(n^2)**
