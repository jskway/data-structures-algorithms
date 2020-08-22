import { Queue } from "../queue/queue";
import { Stack } from "../stack/stack";

interface Node {
  value: any;
  left?: Node;
  right?: Node;
  insert: Function;
  contains: Function;
  getMax: Function;
  forEach: Function;
  inOrderPrint: Function;
  bftPrint: Function;
  dftPrint: Function;
}

export class BSTNode implements Node {
  constructor(
    public value: number,
    public left: Node = null,
    public right: Node = null
  ) {}

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BSTNode(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BSTNode(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(target: number) {
    if (target === this.value) {
      return true;
    } else if (target < this.value && this.left !== null) {
      return this.left.contains(target);
    } else if (target > this.value && this.right !== null) {
      return this.right.contains(target);
    } else {
      return false;
    }
  }

  getMax() {
    if (this.right === null) {
      return this.value;
    } else {
      return this.right.getMax();
    }
  }

  forEach(fn: Function) {
    fn(this.value);
    if (this.left !== null) {
      this.left.forEach(fn);
    }
    if (this.right !== null) {
      this.right.forEach(fn);
    }
  }

  inOrderPrint(node: Node) {
    const root = node;

    if (!root) {
      return;
    }
    this.inOrderPrint(root.left);
    console.log(root.value);
    this.inOrderPrint(root.right);
  }

  bftPrint(node: Node) {
    const q = new Queue();
    q.enqueue(node);
    let currentNode = null;

    while (q.length > 0) {
      currentNode = q.dequeue();
      console.log(currentNode.value);
      if (currentNode.left) {
        q.enqueue(currentNode.left);
      }
      if (currentNode.right) {
        q.enqueue(currentNode.right);
      }
    }
  }

  dftPrint(node: Node) {
    const s = new Stack();
    s.push(node);
    let currentNode = null;

    while (s.length > 0) {
      currentNode = s.pop();
      console.log(currentNode.value);
      if (currentNode.left) {
        s.push(currentNode.left);
      }
      if (currentNode.right) {
        s.push(currentNode.right);
      }
    }
  }
}
