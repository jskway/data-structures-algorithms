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

    """ Returns the highest value in the list"""
    def get_max(self):
        max_value = 0
        node = self.head

        while node is not None:
            if node.value > max_value:
                max_value = node.value
            node = node.next

        return max_value

    """ Takes a reference to a node in the list and removes it
    from the list"""
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

    """Wraps the given value in a ListNode and inserts it
    as the new head of the list."""
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

    """Removes the head node and returns the value stored
    in it"""
    def remove_from_head(self):
        # Check if there is a head
        if self.head is None:
            return None

        # Store the current head
        current_head = self.head

        # If there's at least two nodes
        if self.head.next:
            self.head = self.head.next
            self.head.previous = None

        # If there is only one node
        else:
            self.head = None
            self.tail = None

        self.length -= 1

        return current_head.value

    """Wraps the given value in a ListNode and inserts it
    as the new tail of the list."""
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

    """Removes the tail node and returns the value stored
    in it"""
    def remove_from_tail(self):
        # Check if there is a tail
        if self.tail is None:
            return None

        # Store the current tail
        current_tail = self.tail

        # If there's at least two nodes
        if self.tail.prev:
            self.tail = self.tail.prev
            self.tail.next = None

        # If there's only one node
        else:
            self.tail = None
            self.head = None

        self.length -= 1

        return current_tail.value

    """Takes a reference to a node in the list and moves it
    to the front of the list, shifting all other list nodes down"""
    def move_to_front(self, node):
        # Check if it's already at the front
        if node == self.head:
            return None

        # Remove it from the list
        self.delete(node)

        # Add it to the head
        self.add_to_head(node.value)


    """Takes a reference to a node in the list and moves it
    to the end of the list, shifting all other list nodes up"""
    def move_to_end(self, node):
        # Check if it's already at the end
        if node == self.tail:
            return None

        # Remove it from the list
        self.delete(node)

        # Add it the the tail
        self.add_to_tail(node.value)


