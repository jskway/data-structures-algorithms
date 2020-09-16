class HashTableEntry:
    """
    Linked List hash table key/value pair
    """
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None

    def __str__(self):
        return f'{self.key}, {self.value}'

class HashLinkedList:
    def __init__(self):
        self.head = None

    def find(self, key):
        current = self.head

        while current is not None:
            if current.key == key:
                return current

            current = current.next

        return None

    def add_to_head(self, key, value):
        node = HashTableEntry(key, value)

        if self.head is not None:
            node.next = self.head

        self.head = node

    def delete(self, key):
        current = self.head

        if current is None:
            return None

        # when deleting head
        if current.key == key:
            self.head = current.next
            current.next = None
            return current

        # when deleting something else
        else:
            previous = current
            current = current.next

            while current is not None:
                if current.key == key:
                    previous.next = current.next  # cut current out!
                    return current
                else:
                    previous = current
                    current = current.next
            return None

# Hash table can't have fewer than this many slots
MIN_CAPACITY = 8

class HashTable:
    """
    A hash table that with `capacity` buckets
    that accepts string keys
    """
    def __init__(self, capacity):
        if capacity < MIN_CAPACITY:
            capacity = MIN_CAPACITY

        self.table = [None] * capacity
        self.capacity = capacity
        self.item_count = 0

        for num in range(self.capacity):
            self.table[num] = HashLinkedList()


    def get_num_slots(self):
        return self.capacity

    def get_load_factor(self):
        return self.item_count / self.capacity

    def djb2(self, key):
        """
        DJB2 hash, 32-bit
        """
        hash = 5381

        for char in key:
           hash = (( hash << 5) + hash) + ord(char)

        return hash

    def hash_index(self, key):
        """
        Take an arbitrary key and return a valid integer index
        between within the storage capacity of the hash table.
        """
        return self.djb2(key) % self.capacity

    def put(self, key, value):
        load_factor = self.get_load_factor()
        if load_factor > 0.7:
            self.resize(self.capacity * 2)

        hash_index = self.hash_index(key)

        existing_node = self.table[hash_index].find(key)

        if existing_node is not None:
            existing_node.value = value
        else:
            self.table[hash_index].add_to_head(key, value)
            self.item_count += 1

    def delete(self, key):
        """
        Remove the value stored with the given key.
        Print a warning if the key is not found.
        """
        hash_index = self.hash_index(key)

        result = self.table[hash_index].delete(key)

        if result is None:
            print('Key not found!')
        else:
            self.item_count -= 1


    def get(self, key):
        """
        Retrieve the value stored with the given key.
        Returns None if the key is not found.
        """
        hash_index = self.hash_index(key)

        result = self.table[hash_index].find(key)

        if result is None:
            return None

        return result.value

    def resize(self, new_capacity):
        """
        Changes the capacity of the hash table and
        rehashes all key/value pairs.
        """
        old_table = self.table

        new_table = [None] * new_capacity

        for num in range(new_capacity):
            new_table[num] = HashLinkedList()

        self.table = new_table

        self.capacity = new_capacity

        self.item_count = 0

        for bucket in old_table:
            current = bucket.head

            # iterate through the nodes in each bucket (linked list)
            while current is not None:
                # store it in the new array
                self.put(current.key, current.value)

                current = current.next

