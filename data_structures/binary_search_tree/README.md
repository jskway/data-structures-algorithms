# Binary Search Tree

A **binary tree** is a **tree** of nodes, where every node has two or fewer
children. The children are usually called `left` and `right`.

A **binary search tree** is a binary tree that has the following properties:

- The left subtree of a node contains only nodes with values less than the
  node's value
- The right subtree of a node contains only nodes with values greater than the
  node's value
- There must be no duplicate nodes

### Balanced Trees

A tree is **balanced** when the height of the left and right subtree of every
node differs at most by 1. Where the **height** is the max distance of any node
from the root.

<img src="https://i2.wp.com/algorithms.tutorialhorizon.com/files/2014/09/BalancedTree-Example.png" style="width: 500" alt="Picture of a balanced tree vs unbalanced tree">

The runtime complexity is impacted by whether or not a BST is balanced.

|              | Non-Balanced | Balanced   |
| ------------ | ------------ | ---------- |
| **_get_**    | _O(n)_       | _O(log n)_ |
| **_insert_** | _O(n)_       | _O(log n)_ |
| **_remove_** | _O(n)_       | _O(log n)_ |
