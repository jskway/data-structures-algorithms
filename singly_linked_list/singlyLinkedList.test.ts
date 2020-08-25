import { LinkedList } from "./singlyLinkedList";

describe("Singly linked list tests", () => {
  let sll;

  beforeEach(() => {
    sll = new LinkedList();
  });

  test("addToTail", () => {
    sll.addToTail(1);
    expect(sll.tail.value).toEqual(1);
    expect(sll.head.value).toEqual(1);
    sll.addToTail(2);
    expect(sll.tail.value).toEqual(2);
    expect(sll.head.value).toEqual(1);
  });

  test("contains", () => {
    sll.addToTail(1);
    sll.addToTail(2);
    sll.addToTail(5);
    sll.addToTail(10);
    expect(sll.contains(10)).toBeTruthy();
    expect(sll.contains(2)).toBeTruthy();
    expect(sll.contains(1000)).toBeFalsy();
  });

  test("removeHead", () => {
    sll.addToTail(10);
    sll.addToTail(20);
    expect(sll.removeHead()).toEqual(10);
    expect(sll.contains(10)).toBeFalsy();
    expect(sll.removeHead()).toEqual(20);
    expect(sll.contains(20)).toBeFalsy();
  });

  test("getMax", () => {
    expect(sll.getMax()).toBeNull();
    sll.addToTail(100);
    expect(sll.getMax()).toEqual(100);
    sll.addToTail(55);
    expect(sll.getMax()).toEqual(100);
    sll.addToTail(101);
    expect(sll.getMax()).toEqual(101);
  });

  test("reverse empty list", () => {
    sll.reverseList(sll.head);
    expect(sll.head).toBeNull();
  });

  test("reverse single node", () => {
    sll.addToHead(1);
    sll.reverseList(sll.head);
    expect(sll.head.value).toEqual(1);
  });

  test("reverse longer list", () => {
    sll.addToHead(1);
    sll.addToHead(2);
    sll.addToHead(3);
    sll.addToHead(4);
    sll.addToHead(5);
    expect(sll.head.value).toEqual(5);
    sll.reverseList(sll.head);
    expect(sll.head.value).toEqual(1);
    expect(sll.head.next.value).toEqual(2);
    expect(sll.head.next.next.value).toEqual(3);
  });
});
