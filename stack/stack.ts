import { DoublyLinkedList } from "../doubly_linked_list/doublyLinkedList";

export class Stack {
  constructor(
    public length: number = 0,
    public storage = new DoublyLinkedList()
  ) {}

  push(value) {
    this.storage.addToHead(value);
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return null;
    } else {
      this.length--;
      return this.storage.removeFromHead();
    }
  }
}
