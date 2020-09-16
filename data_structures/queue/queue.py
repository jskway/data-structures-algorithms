import sys
sys.path.append('../doubly_linked_list')
from doubly_linked_list import DoublyLinkedList

"""
A queue is a data structure whose primary purpose is to store and
return elements in First In First Out order.
"""
class Queue:
    def __init__(self):
        self.size = 0
        self.storage = DoublyLinkedList()

    def __len__(self):
        return self.size

    def enqueue(self, item):
        self.storage.add_to_tail(item)
        self.size += 1

    def dequeue(self):
        if self.size == 0:
            return None
        else:
            self.size -=1
            return self.storage.remove_from_head()




