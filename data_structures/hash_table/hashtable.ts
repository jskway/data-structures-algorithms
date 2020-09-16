type key = string;
type value = string | number;

interface Entry {
  key: key;
  value: value;
  next?: null | Entry;
}

interface LinkedList {
  head?: Entry;
  find: any;
  addToHead: any;
  delete: any;
}

class HTEntry implements Entry {
  constructor(
    public key: string,
    public value: any,
    public next?: null | Entry
  ) {}
}

class HTLinkedList {
  constructor(public head: Entry = null) {}

  find(key: key) {
    let current = this.head;

    while (current) {
      if (current.key === key) {
        return current;
      }
      current = current.next;
    }

    return null;
  }

  addToHead(key: key, value: value) {
    const node = new HTEntry(key, value);

    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }

  delete(key: key) {
    let current = this.head;

    if (!current) return null;

    // When deleting the head
    if (current.key === key) {
      this.head = current.next;
      current.next = null;
      return current;
    } else {
      // when deleting other entries
      let previous = current;
      current = current.next;

      while (current !== null) {
        if (current.key === key) {
          previous.next = current.next; // cuts out current
          return current;
        } else {
          previous = current;
          current = current.next;
        }
      }
      return null;
    }
  }
}

export class HashTable {
  constructor(
    public capacity: number,
    public minCapacity: number = 8,
    private table?: LinkedList[],
    private itemCount: number = 0
  ) {
    if (capacity < minCapacity) {
      capacity = minCapacity;
    }
    this.table = Array(capacity).fill(new HTLinkedList());
    this.capacity = capacity;
  }

  getNumSlots() {
    return this.capacity;
  }

  getLoadFactor() {
    return this.itemCount / this.capacity;
  }

  djb2(key: key) {
    let hash = 5381;

    for (let char of key) {
      hash = (hash << 5) + hash + char.charCodeAt(0);
    }

    return hash;
  }

  hashIndex(key: key) {
    return this.djb2(key) % this.capacity;
  }

  put(key: key, value: value) {
    const loadFactor = this.getLoadFactor();

    if (loadFactor > 0.7) {
      this.resize(this.capacity * 2);
    }

    const hashIdx = this.hashIndex(key);
    const existingNode = this.table[hashIdx].find(key);

    if (existingNode !== null) {
      existingNode.value = value;
    } else {
      this.table[hashIdx].addToHead(key, value);
      this.itemCount++;
    }
  }

  get(key: key) {
    const hashIdx = this.hashIndex(key);
    const result = this.table[hashIdx].find(key);

    if (!result) {
      return null;
    }

    return result.value;
  }

  delete(key: key) {
    const hashIdx = this.hashIndex(key);
    const result = this.table[hashIdx].delete(key);

    if (!result) {
      console.log("Key not found!");
    } else {
      this.itemCount--;
    }
  }

  resize(newCapacity: number) {
    const oldTable = this.table;
    const newTable = Array(newCapacity).fill(new HTLinkedList());

    this.table = newTable;
    this.capacity = newCapacity;
    this.itemCount = 0;

    for (let i = 0; i < oldTable.length; i++) {
      let current = oldTable[i].head;

      while (current) {
        this.put(current.key, current.value);
        current = current.next;
      }
    }
  }
}
