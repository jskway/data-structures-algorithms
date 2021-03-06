# Doubly Linked Lists

A **linked list** is a linear data structure which links all the separated
elements together with pointers.

In a **doubly linked list**, items have pointers to the next and previous
items. Doubly linked lists allow us to traverse our list backwards.

Eg.

```python
class ListNode:
  def __init__(self, value, next=None, prev=None):
    self.value = value
    self.next = next
    self.prev = prev
```

An item in a linked list is called a **node**. The first node is called the
**head**. The last node is called the **tail**.

<img style="width:500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doubly-linked-list.svg/610px-Doubly-linked-list.svg.png" alt="Image of Doubly Linked List">

### Strengths

- **Fast operators on the ends**. Adding elements at either the head or tail of
  a linked list is _O(1)_. Removing the first element is also _O(1)_.
- **Flexible size**. There's no need to specify a fixed number of items to
  store when creating a linked list. You can keep adding items as long as you
  have memory.

### Weaknesses

- **Costly lookups, inserts and deletes.** To access, insert or modify an item
  in a linked list, you have to take _O(n)_ time to traverse from the head of
  the list to the _nth_ item.

### Performance

|               | Worst Case |
| ------------- | ---------- |
| **_space_**   | _O(n)_     |
| **_prepend_** | _O(1)_     |
| **_append_**  | _O(1)_     |
| **_lookup_**  | _O(n)_     |
| **_insert_**  | _O(n)_     |
| **_delete_**  | _O(n)_     |
