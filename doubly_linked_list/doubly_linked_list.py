"""Each ListNode holds a reference to its previous node
as well as its next node in the List."""
class ListNode:
    def __init__(self, value, prev=None, next=None):
        self.value = value
        self.prev = prev
        self.next = next

    """Wrap the given value in a ListNode and insert it
    after this node. Note that this node could already
    have a next node it is point to."""
    def insert_after(self, value):
        current_next = self.next
        self.next = ListNode(value, self, current_next)
        if current_next:
            current_next.prev = self.next

    """Wrap the given value in a ListNode and insert it
    before this node. Note that this node could already
    have a previous node it is point to."""
    def insert_before(self, value):
        current_prev = self.prev
        self.prev = ListNode(value, current_prev, self)
        if current_prev:
            current_prev.next = self.prev

    """Rearranges this ListNode's previous and next pointers
    accordingly, effectively deleting this ListNode."""
    def delete(self):
        if self.prev:
            self.prev.next = self.next
        if self.next:
            self.next.prev = self.prev


"""Our doubly-linked list class. It holds references to
the list's head and tail nodes."""
class DoublyLinkedList:
    def __init__(self, node=None):
        self.head = node
        self.tail = node
        self.length = 1 if node is not None else 0

    def __len__(self):
        return self.length

    def find_middle(self):
        # Start at the head, set up two pointers
        middle = self.head
        end = self.head

        while end.next != None and end.next.next != None:
            middle = middle.next
            end = end.next.next

        return middle

    def get_max(self):
        max_value = 0
        node = self.head

        while node is not None:
            if node.value > max_value:
                max_value = node.value
            node = node.next

        return max_value

    def delete(self, node):
        # If list is empty
        if self.head is None:
            print('Empty List!')
            return None

        # If list has one item
        if self.head == self.tail:
            self.head = None
            self.tail = None

        # If we have at least two nodes, and the node we want to delete is the
        # head
        if node == self.head:
            self.head = node.next
            self.head.prev = None

        ## If we have at least two nodes, and the node we want to delete is the
        # tail
        if node == self.tail:
            self.tail = node.prev
            self.tail.next = None

        else:
            node.delete()

        self.length -=1

    def add_to_head(self, value):
        new_node = ListNode(value, None, None)
        self.length += 1

        if self.head:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node
        else:
            self.head = new_node
            self.tail = new_node

    def remove_from_head(self):
        pass

    def add_to_tail(self, value):
        new_node = ListNode(value, None, None)
        self.length += 1

        if self.tail:
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node
        else:
            self.head = new_node
            self.tail = new_node


