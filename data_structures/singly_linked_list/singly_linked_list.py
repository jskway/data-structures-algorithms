class ListNode:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next

    def get_next(self):
        return self.next

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def add_to_head(self, value):
        node = ListNode(value)

        if self.head is not None:
            node.next = self.head
        else:
            self.tail = node

        self.head = node

    def add_to_tail(self, value):
        node = ListNode(value)

        if self.tail is not None:
            self.tail.next = node
        else:
            self.head = node

        self.tail = node

    def contains(self, value):
        current = self.head

        while current is not None:
            if current.value == value:
                return True
            current = current.next
        return False

    def remove_head(self):
        if self.head is None:
            return None

        if self.head == self.tail:
            self.tail = None

        old_head = self.head
        new_head = self.head.next
        self.head.next = None
        self.head = new_head

        return old_head.value

    def get_max(self):
        if self.head is None:
            return None

        max = 0
        current = self.head

        while current is not None:
            if current.value > max:
                max = current.value
            current = current.next

        return max

    def reverse_list(self, head, prev=None):
        prev = prev
        curr = head
        next = None

        while curr is not None:
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next

        self.head = prev


