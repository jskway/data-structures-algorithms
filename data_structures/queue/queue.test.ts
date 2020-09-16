import { Queue } from "./queue";

describe("Queue tests", () => {
  let q;

  beforeEach(() => {
    q = new Queue();
  });

  test("len returns 0 for empty queue", () => {
    expect(q.length).toEqual(0);
  });

  test("length returns correct length after enqueue", () => {
    expect(q.length).toEqual(0);
    q.enqueue(2);
    expect(q.length).toEqual(1);
    q.enqueue(4);
    expect(q.length).toEqual(2);
    q.enqueue(6);
    q.enqueue(8);
    q.enqueue(10);
    q.enqueue(12);
    q.enqueue(14);
    q.enqueue(16);
    q.enqueue(18);
    expect(q.length).toEqual(9);
  });

  test("empty dequeue", () => {
    expect(q.dequeue()).toBeNull();
    expect(q.length).toEqual(0);
  });

  test("dequeue respects order", () => {
    q.enqueue(100);
    q.enqueue(101);
    q.enqueue(105);
    expect(q.dequeue()).toEqual(100);
    expect(q.length).toEqual(2);
    expect(q.dequeue()).toEqual(101);
    expect(q.length).toEqual(1);
    expect(q.dequeue()).toEqual(105);
    expect(q.length).toEqual(0);
    expect(q.dequeue()).toBeNull();
    expect(q.length).toEqual(0);
  });
});
