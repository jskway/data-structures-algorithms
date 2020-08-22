import { BSTNode } from "./binarySearchTree";

describe("BST tests", () => {
  let bst;

  // Used to mock console.log in traversal tests
  let spy;

  beforeEach(() => {
    bst = new BSTNode(5);
  });

  test("insert", () => {
    bst.insert(2);
    bst.insert(3);
    bst.insert(7);
    bst.insert(6);
    expect(bst.left.right.value).toEqual(3);
    expect(bst.right.left.value).toEqual(6);
  });

  test("handles duplicate insert", () => {
    let bst2 = new BSTNode(1);
    bst2.insert(1);
    expect(bst2.right.value).toEqual(1);
  });

  test("contains", () => {
    bst.insert(2);
    bst.insert(3);
    bst.insert(7);
    expect(bst.contains(7)).toBeTruthy();
    expect(bst.contains(8)).toBeFalsy();
  });

  test("getMax", () => {
    expect(bst.getMax()).toEqual(5);
    bst.insert(30);
    expect(bst.getMax()).toEqual(30);
    bst.insert(300);
    bst.insert(3);
    expect(bst.getMax()).toEqual(300);
  });

  test("forEach", () => {
    const arr = [];
    const cb = (x) => arr.push(x);

    const v1 = Math.floor(Math.random() * 101) + 1;
    const v2 = Math.floor(Math.random() * 101) + 1;
    const v3 = Math.floor(Math.random() * 101) + 1;
    const v4 = Math.floor(Math.random() * 101) + 1;
    const v5 = Math.floor(Math.random() * 101) + 1;

    bst.insert(v1);
    bst.insert(v2);
    bst.insert(v3);
    bst.insert(v4);
    bst.insert(v5);

    bst.forEach(cb);

    expect(arr.includes(5)).toBeTruthy();
    expect(arr.includes(v1)).toBeTruthy();
    expect(arr.includes(v2)).toBeTruthy();
    expect(arr.includes(v3)).toBeTruthy();
    expect(arr.includes(v4)).toBeTruthy();
    expect(arr.includes(v5)).toBeTruthy();
  });

  test("inOrderPrint", () => {
    spy = jest.spyOn(global.console, "log").mockImplementation();

    bst = new BSTNode(1);
    bst.insert(8);
    bst.insert(5);
    bst.insert(7);
    bst.insert(6);
    bst.insert(3);
    bst.insert(4);
    bst.insert(2);

    bst.inOrderPrint(bst);

    expect(console.log).toHaveBeenCalledTimes(8);
    expect(spy.mock.calls).toEqual([[1], [2], [3], [4], [5], [6], [7], [8]]);

    spy.mockRestore();
  });

  test("bftPrint", () => {
    spy = jest.spyOn(global.console, "log").mockImplementation();

    bst = new BSTNode(1);
    bst.insert(8);
    bst.insert(5);
    bst.insert(7);
    bst.insert(6);
    bst.insert(3);
    bst.insert(4);
    bst.insert(2);

    bst.bftPrint(bst);

    expect(console.log).toHaveBeenCalledTimes(8);
    expect(spy.mock.calls).toEqual(
      [[1], [8], [5], [3], [7], [2], [4], [6]] || [
        [1],
        [8],
        [5],
        [7],
        [3],
        [6],
        [4],
        [2],
      ]
    );

    spy.mockRestore();
  });

  test("dftPrint", () => {
    spy = jest.spyOn(global.console, "log").mockImplementation();

    bst = new BSTNode(1);
    bst.insert(8);
    bst.insert(5);
    bst.insert(7);
    bst.insert(6);
    bst.insert(3);
    bst.insert(4);
    bst.insert(2);

    bst.dftPrint(bst);

    expect(console.log).toHaveBeenCalledTimes(8);
    expect(spy.mock.calls).toEqual(
      [[1], [8], [5], [7], [6], [3], [4], [2]] || [
        [1],
        [8],
        [5],
        [3],
        [2],
        [4],
        [7],
        [6],
      ]
    );

    spy.mockRestore();
  });
});
