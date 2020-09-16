# Hash Table

**Hash tables** organize data using arrays and _hash functions_ to support
quick insertion, search and removal.

A **hash function** is a function that takes in some data (eg. string, file
input, number) and returns a number to be used as the index.

A hash function should:

- Be deterministic — each time it receives the same input, it must return the
  same output
- Return different outputs for different inputs
- Return numbers within a specific range

Hash tables use arrays for storing data. What each array slot holds depends on
the collision handling method that's implemented.

A **hash collision** occurs when the hash function returns the same number for
different inputs.

Two ways of handling hash collisions:

- **Chaining**: Each slot in the array stores the head of a _linked list_. When
  a hash collision occurs, the item is appended to the end of the linked list
  stored at that index.
- **Open addressing**: All items are stored in the array directly. When a
  collision occurs, the hash table looks for the next available slot in the
  array and places it there.

### Performance

The performance of a hash table depends on its _load factor_.

The **load factor** of a hash table is calculated by dividing the total number
of items by the number of slots in the array.

`load factor = number of items / number of slots in the array`

As the load factor of a hash table increases, so does the likelihood of a hash
collision. The more collisions occur, the worse the performance of the hash
table becomes.

The solution is to implement automatic resizing.

**Automatic resizing** done by creating a new array (usually twice the size of
the original) and rehashing all of the existing items into the new array. The
general rule of thumb is to resize your hash table when the load factor becomes
greater than 0.7.

|              | Average Case | Worst Case |
| ------------ | ------------ | ---------- |
| **_space_**  | _O(n)_       | _O(n)_     |
| **_lookup_** | _O(1)_       | _O(n)_     |
| **_insert_** | _O(1)_       | _O(n)_     |
| **_delete_** | _O(1)_       | _O(n)_     |
