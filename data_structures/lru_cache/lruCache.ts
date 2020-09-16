import {
  ListNode,
  DoublyLinkedList,
} from "../doubly_linked_list/doublyLinkedList";

interface Node {
  value: any;
  prev?: Node;
  next?: Node;
  delete: Function;
}

interface DLL {
  head: Node;
  tail: Node;
  length: number;
  removeFromTail: Function;
  moveToFront: Function;
  addToHead: Function;
}

export class LRUCache {
  constructor(
    public limit: number = 10,
    private DLL: DLL = new DoublyLinkedList(),
    private storage: Object = {}
  ) {}

  set(key: string, value: string) {
    const node = this.storage[key];

    if (!node) {
      let size = Object.keys(this.storage).length;

      if (this.limit === size) {
        const lru = this.DLL.tail.value[0];
        delete this.storage[lru];
        this.DLL.removeFromTail();
      }

      this.DLL.addToHead([key, value]);
      this.storage[key] = this.DLL.head;
    } else {
      node.value = [key, value];
      this.DLL.moveToFront(node);
    }
  }

  get(key: string) {
    const node = this.storage[key];

    if (!node) {
      return null;
    }

    this.DLL.moveToFront(node);

    return node.value[1];
  }
}
