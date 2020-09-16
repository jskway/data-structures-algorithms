import { ListNode, DoublyLinkedList } from "./doublyLinkedList";

describe("ListNode tests", () => {
  const node = new ListNode(1);

  test("delete", () => {
    const node1 = new ListNode(3);
    const node2 = new ListNode(4);
    const node3 = new ListNode(5);

    node1.next = node2;
    node2.next = node3;
    node2.prev = node1;
    node3.prev = node2;

    node2.delete();

    expect(node1.next).toEqual(node3);
    expect(node3.prev).toEqual(node1);
  });

  test("insert before", () => {
    node.insertBefore(0);
    expect(node.prev.value).toEqual(0);
  });

  test("insert after", () => {
    node.insertAfter(2);
    expect(node.next.value).toEqual(2);
  });
});

describe("DoublyLinkedList tests", () => {
  let node;
  let dll;
  beforeEach(() => {
    node = new ListNode(1);
    dll = new DoublyLinkedList(node);
  });

  test("remove from tail", () => {
    dll.removeFromTail();
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.length).toEqual(0);

    dll.addToTail(33);
    expect(dll.head.value).toEqual(33);
    expect(dll.tail.value).toEqual(33);
    expect(dll.length).toEqual(1);
    expect(dll.removeFromTail()).toEqual(33);
    expect(dll.length).toEqual(0);

    dll.addToTail(68);
    expect(dll.length).toEqual(1);
    expect(dll.removeFromTail()).toEqual(68);
    expect(dll.length).toEqual(0);
  });

  test("remove from head", () => {
    dll.removeFromHead();
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();
    expect(dll.length).toEqual(0);

    dll.addToHead(2);
    expect(dll.head.value).toEqual(2);
    expect(dll.tail.value).toEqual(2);
    expect(dll.length).toEqual(1);
    expect(dll.removeFromHead()).toEqual(2);
    expect(dll.length).toEqual(0);

    dll.addToHead(55);
    expect(dll.length).toEqual(1);
    expect(dll.removeFromHead()).toEqual(55);
    expect(dll.length).toEqual(0);
  });

  test("Add to tail", () => {
    dll.addToTail(1);
    expect(dll.tail.value).toEqual(1);
    expect(dll.length).toEqual(2);

    dll.addToTail(30);
    expect(dll.tail.prev.value).toBe(1);
    expect(dll.tail.value).toEqual(30);
    expect(dll.length).toEqual(3);

    dll.addToTail(20);
    expect(dll.tail.prev.value).toBe(30);
    expect(dll.tail.value).toEqual(20);
    expect(dll.length).toEqual(4);
  });

  test("Add to head", () => {
    expect(dll.head.value).toEqual(1);

    dll.addToHead(10);
    expect(dll.head.value).toEqual(10);
    expect(dll.head.next.value).toEqual(1);
    expect(dll.length).toEqual(2);
  });

  test("Move to end", () => {
    dll.addToHead(40);
    expect(dll.tail.value).toEqual(1);
    expect(dll.head.value).toEqual(40);

    dll.moveToEnd(dll.head);
    expect(dll.tail.value).toEqual(40);
    expect(dll.tail.prev.value).toEqual(1);
    expect(dll.length).toEqual(2);

    dll.addToTail(4);
    dll.moveToEnd(dll.head.next);
    expect(dll.tail.value).toEqual(40);
    expect(dll.tail.prev.value).toEqual(4);
    expect(dll.length).toEqual(3);
  });

  test("Move to front", () => {
    dll.addToTail(3);
    expect(dll.head.value).toEqual(1);
    expect(dll.tail.value).toEqual(3);

    dll.moveToFront(dll.tail);
    expect(dll.head.value).toEqual(3);
    expect(dll.head.next.value).toEqual(1);
    expect(dll.length).toEqual(2);

    dll.addToHead(29);
    dll.moveToFront(dll.head.next);
    expect(dll.head.value).toEqual(3);
    expect(dll.head.next.value).toEqual(29);
    expect(dll.length).toEqual(3);
  });

  test("delete", () => {
    dll.delete(node);
    expect(dll.head).toBeNull();
    expect(dll.head).toBeNull();
    expect(dll.length).toEqual(0);

    dll.addToTail(1);
    dll.addToHead(9);
    dll.addToTail(6);

    dll.delete(dll.head);
    expect(dll.head.value).toEqual(1);
    expect(dll.tail.value).toEqual(6);
    expect(dll.length).toEqual(2);

    dll.delete(dll.head);
    expect(dll.head.value).toEqual(6);
    expect(dll.tail.value).toEqual(6);
    expect(dll.length).toEqual(1);
  });

  test("get max", () => {
    expect(dll.getMax()).toEqual(1);
    dll.addToTail(100);
    expect(dll.getMax()).toEqual(100);
    dll.addToTail(55);
    expect(dll.getMax()).toEqual(100);
    dll.addToTail(101);
    expect(dll.getMax()).toEqual(101);
  });
});
