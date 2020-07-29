interface Node {
  value: any;
  prev: Node;
  next: Node;
}

export class ListNode {
  value: any;
  prev: Node | null;
  next: Node | null;
  this: object;

  constructor(value: any, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }

  insertAfter(value: any) {
    const currentNext = this.next;
    this.next = new ListNode(value, this, currentNext);
    if (currentNext) {
      currentNext.prev = this.next;
    }
  }

  insertBefore(value: any) {
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

export class DoublyLinkedList {
  node: object | undefined;
  head: Node;
  tail: Node;
  length: number;

  constructor(node) {
    this.head = node || null;
    this.tail = node || null;
    this.length = 0;
    if (node !== null) {
      this.length = 1;
    }
  }

  addToHead(value: any) {
    const newNode = new ListNode(value, null, null);
    this.length += 1;

    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  }
}
