interface Node {
  value: any;
  prev: Node;
  next: Node;
  delete: Function;
}

interface DLL {
  head: Node;
  tail: Node;
  length: number;
}

export class ListNode implements Node {
  constructor(
    public value: any,
    public prev: Node = null,
    public next: Node = null
  ) {}

  insertAfter(value) {
    const currentNext = this.next;
    this.next = new ListNode(value, this, currentNext);
    if (currentNext) {
      currentNext.prev = this.next;
    }
  }

  insertBefore(value) {
    const currentPrev = this.prev;
    this.prev = new ListNode(value, currentPrev, this);
    if (currentPrev) {
      currentPrev.next = this.prev;
    }
  }

  delete() {
    if (this.prev) {
      this.prev.next = this.next;
    }
    if (this.next) {
      this.next.prev = this.prev;
    }
  }
}

export class DoublyLinkedList implements DLL {
  public head: Node = null;
  public tail: Node = null;
  public length: number;

  constructor(node: Node = null) {
    this.head = node;
    this.tail = node;
    this.length = 0;
    if (node !== null) {
      this.length = 1;
    }
  }

  addToHead(value) {
    const newNode = new ListNode(value);

    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  removeFromHead() {
    // Check if there is a head
    if (this.head === null) {
      return null;
    }

    // Store the current head
    const currentHead = this.head;

    if (this.head.next !== null) {
      // If there's at next two nodes
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      // If there's only one node
      this.head = null;
      this.tail = null;
    }

    this.length -= 1;

    return currentHead.value;
  }

  addToTail(value) {
    const newNode = new ListNode(value, null, null);

    // If there is a tail
    if (this.tail !== null) {
      // Point the new node's prev to the current tail
      newNode.prev = this.tail;

      // Point the current tail's next to the new node
      this.tail.next = newNode;

      // Update our tail pointer
      this.tail = newNode;
    } else {
      // Otherwise, this is the first node in the list
      this.head = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  removeFromTail() {
    // Check if there is a tail
    if (this.tail === null) {
      return null;
    }

    // Store the current tail
    const currentTail = this.tail;

    // If there's at least two nodes in the list
    if (this.tail.prev !== null) {
      // Set the tail to the node right before the tail
      this.tail = this.tail.prev;
      // Set the new tail's next pointer to null
      this.tail.next = null;
    } else {
      // Otherwise there was only one node in the list
      this.tail = null;
      this.head = null;
    }

    this.length -= 1;

    return currentTail.value;
  }

  delete(node: Node) {
    // If the list is empty
    if (this.head === null) return null;

    // If there's only one node in the list
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    // If we have at least two nodes, and the node we want to delete is the head
    if (node === this.head) {
      this.head = node.next;
      this.head.prev = null;
    }

    // If we have at least two nodes, and the node we want to delete is the tail
    if (node === this.tail) {
      this.tail = node.prev;
      this.tail.next = null;
    } else {
      node.delete();
    }

    this.length -= 1;
  }

  moveToFront(node: Node) {
    // Check if it's already the head
    if (node === this.head) {
      return null;
    }

    // Remove it from the list
    this.delete(node);

    // Add it to the head
    this.addToHead(node.value);
  }

  moveToEnd(node: Node) {
    // Check if it's already the tail
    if (node === this.tail) {
      return null;
    }

    // Remove it from the list
    this.delete(node);

    // Add it to the tail
    this.addToTail(node.value);
  }

  getMax() {
    let max = 0;
    let node = this.head;

    while (node !== null) {
      if (node.value > max) {
        max = node.value;
      }
      node = node.next;
    }
    return max;
  }
}
