import sys
sys.path.append('../stack')
from stack import Stack

from collections import deque

class BSTNode:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    """
    Inserts the value into the tree
    """
    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BSTNode(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BSTNode(value)
            else:
                self.right.insert(value)

    """
    Checks if the target value exists in the tree
    - Returns True if found
    - Otherwise returns False
    """
    def contains(self, target):
        if target == self.value:
            return True
        elif (target < self.value) and (self.left is not None):
            return self.left.contains(target)
        elif (target > self.value) and (self.right is not None):
            return self.right.contains(target)
        else:
            return False

    """
    Returns the maximum value in the tree
    """
    def get_max(self):
        if self.right is None:
            return self.value
        else:
            return self.right.get_max()

    """
    Calls fn on each node value
    """
    def for_each(self, fn):
        fn(self.value)

        if self.left is not None:
            self.left.for_each(fn)
        if self.right is not None:
            self.right.for_each(fn)

    """
    Prints all the values in order from lowest to highest
    """
    def in_order_print(self, node):
        root = node

        if root is None:
            return

        self.in_order_print(root.left)
        print(root.value)
        self.in_order_print(root.right)

    """
    Prints the value of every node, starting with the given node,
    in an iterative breadth first traversal
    """
    def bft_print(self, node):
        q = deque()
        q.appendleft(node)
        current_node =  None

        while(len(q) > 0):
            current_node = q.pop()
            print(current_node.value)
            if current_node.left:
                q.appendleft(current_node.left)
            if current_node.right:
                q.appendleft(current_node.right)

    """
    Prints the value of every node, starting with the given node,
    in an iterative depth first traversal
    """
    def dft_print(self, node):
        s = Stack()
        s.push(node)
        current_node = None

        while(len(s) > 0):
            current_node = s.pop()
            print(current_node.value)
            if current_node.left:
                s.push(current_node.left)
            if current_node.right:
                s.push(current_node.right)




