import { Stack } from "./stack";

describe("Stack tests", () => {
  let s;

  beforeEach(() => {
    s = new Stack();
  });

  test("length returns 0 for empty stack", () => {
    expect(s.length).toEqual(0);
  });

  test("length returns correct length after push", () => {
    expect(s.length).toEqual(0);
    s.push(2);
    expect(s.length).toEqual(1);
    s.push(4);
    expect(s.length).toEqual(2);
    s.push(6);
    s.push(8);
    s.push(10);
    s.push(12);
    s.push(14);
    s.push(16);
    s.push(18);
    expect(s.length).toEqual(9);
  });

  test("empty pop should return null", () => {
    expect(s.pop()).toBeNull();
    expect(s.length).toEqual(0);
  });

  test("pop respects order", () => {
    s.push(100);
    s.push(101);
    s.push(105);
    expect(s.pop()).toEqual(105);
    expect(s.length).toEqual(2);
    expect(s.pop()).toEqual(101);
    expect(s.length).toEqual(1);
    expect(s.pop()).toEqual(100);
    expect(s.length).toEqual(0);
    expect(s.pop()).toBeNull();
    expect(s.length).toEqual(0);
  });
});
