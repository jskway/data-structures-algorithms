import { ListNode, DoublyLinkedList } from "./doublyLinkedList";

describe("DoublyLinkedList tests", () => {
  const node = new ListNode(1);
  const dll = new DoublyLinkedList(node);

  test("remove from tail", () => {
    dll.removeFromTail();
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.length).toEqual(0);
  });
});
