interface Node {
  value: any;
  next: Node;
}

interface SLL {
  head: Node;
  tail: Node;
}

export class ListNode implements Node {
  constructor(public value: any, public next: Node = null) {}
}

export class LinkedList implements SLL {
  constructor(public head: Node = null, public tail: Node = null) {}

  addToHead(value) {
    const node = new ListNode(value);

    if (this.head !== null) {
      node.next = this.head;
    } else {
      this.tail = node;
    }

    this.head = node;
  }

  addToTail(value) {
    const node = new ListNode(value);

    if (this.tail !== null) {
      this.tail.next = node;
    } else {
      this.head = node;
    }

    this.tail = node;
  }

  contains(value) {
    if (this.head !== null) {
      let current = this.head;
      while (current !== null) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }

  removeHead() {
    if (this.head === null) {
      return null;
    }

    if (this.head === this.tail) {
      this.tail = null;
    }

    const oldHead = this.head;
    const newHead = this.head.next;
    this.head.next = null;
    this.head = newHead;

    return oldHead.value;
  }

  getMax() {
    if (this.head === null) {
      return null;
    }

    let max = 0;
    let current = this.head;

    while (current !== null) {
      if (current.value > max) {
        max = current.value;
      }
      current = current.next;
    }

    return max;
  }

  reverseList(head, previous = null) {
    let prev = previous;
    let curr = head;
    let next = null;

    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }
}
