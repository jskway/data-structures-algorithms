import { DoublyLinkedList } from "../doubly_linked_list/doublyLinkedList";

export class Queue {
  constructor(
    public storage = new DoublyLinkedList(),
    public length: number = 0
  ) {}

  enqueue(item) {
    this.storage.addToTail(item);
    this.length++;
  }

  dequeue() {
    if (this.length === 0) {
      return null;
    } else {
      this.length--;
      return this.storage.removeFromHead();
    }
  }
}
