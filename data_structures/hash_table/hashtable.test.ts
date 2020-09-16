import { HashTable } from "./hashtable";

describe("hashTable tests", () => {
  let ht;

  beforeEach(() => {
    ht = new HashTable(8);
  });

  test("insertion and retrieval", () => {
    ht.put("key-0", "val-0");
    ht.put("key-1", "val-1");
    ht.put("key-2", "val-2");
    ht.put("key-3", "val-3");
    ht.put("key-4", "val-4");
    ht.put("key-5", "val-5");
    ht.put("key-6", "val-6");
    ht.put("key-7", "val-7");
    ht.put("key-8", "val-8");
    ht.put("key-9", "val-9");

    expect(ht.get("key-0")).toEqual("val-0");
    expect(ht.get("key-1")).toEqual("val-1");
    expect(ht.get("key-2")).toEqual("val-2");
    expect(ht.get("key-3")).toEqual("val-3");
    expect(ht.get("key-4")).toEqual("val-4");
    expect(ht.get("key-5")).toEqual("val-5");
    expect(ht.get("key-6")).toEqual("val-6");
    expect(ht.get("key-7")).toEqual("val-7");
    expect(ht.get("key-8")).toEqual("val-8");
    expect(ht.get("key-9")).toEqual("val-9");
  });

  test("put overwrites correctly", () => {
    ht.put("key-0", "val-0");
    ht.put("key-1", "val-1");
    ht.put("key-2", "val-2");
    ht.put("key-3", "val-3");
    ht.put("key-4", "val-4");
    ht.put("key-5", "val-5");
    ht.put("key-6", "val-6");
    ht.put("key-7", "val-7");
    ht.put("key-8", "val-8");
    ht.put("key-9", "val-9");

    ht.put("key-0", "new-val-0");
    ht.put("key-1", "new-val-1");
    ht.put("key-2", "new-val-2");
    ht.put("key-3", "new-val-3");
    ht.put("key-4", "new-val-4");
    ht.put("key-5", "new-val-5");
    ht.put("key-6", "new-val-6");
    ht.put("key-7", "new-val-7");
    ht.put("key-8", "new-val-8");
    ht.put("key-9", "new-val-9");

    expect(ht.get("key-0")).toEqual("new-val-0");
    expect(ht.get("key-1")).toEqual("new-val-1");
    expect(ht.get("key-2")).toEqual("new-val-2");
    expect(ht.get("key-3")).toEqual("new-val-3");
    expect(ht.get("key-4")).toEqual("new-val-4");
    expect(ht.get("key-5")).toEqual("new-val-5");
    expect(ht.get("key-6")).toEqual("new-val-6");
    expect(ht.get("key-7")).toEqual("new-val-7");
    expect(ht.get("key-8")).toEqual("new-val-8");
    expect(ht.get("key-9")).toEqual("new-val-9");
  });

  test("delete removes correctly", () => {
    ht.put("key-0", "val-0");
    ht.put("key-1", "val-1");
    ht.put("key-2", "val-2");
    ht.put("key-3", "val-3");
    ht.put("key-4", "val-4");
    ht.put("key-5", "val-5");
    ht.put("key-6", "val-6");
    ht.put("key-7", "val-7");
    ht.put("key-8", "val-8");
    ht.put("key-9", "val-9");

    expect(ht.get("key-0")).toEqual("val-0");
    expect(ht.get("key-1")).toEqual("val-1");
    expect(ht.get("key-2")).toEqual("val-2");
    expect(ht.get("key-3")).toEqual("val-3");
    expect(ht.get("key-4")).toEqual("val-4");
    expect(ht.get("key-5")).toEqual("val-5");
    expect(ht.get("key-6")).toEqual("val-6");
    expect(ht.get("key-7")).toEqual("val-7");
    expect(ht.get("key-8")).toEqual("val-8");
    expect(ht.get("key-9")).toEqual("val-9");

    ht.delete("key-9");
    ht.delete("key-8");
    ht.delete("key-7");
    ht.delete("key-6");
    ht.delete("key-5");
    ht.delete("key-4");
    ht.delete("key-3");
    ht.delete("key-2");
    ht.delete("key-1");
    ht.delete("key-0");

    expect(ht.get("key-0")).toBeNull();
    expect(ht.get("key-1")).toBeNull();
    expect(ht.get("key-2")).toBeNull();
    expect(ht.get("key-3")).toBeNull();
    expect(ht.get("key-4")).toBeNull();
    expect(ht.get("key-5")).toBeNull();
    expect(ht.get("key-6")).toBeNull();
    expect(ht.get("key-7")).toBeNull();
    expect(ht.get("key-8")).toBeNull();
    expect(ht.get("key-9")).toBeNull();
  });

  test("resize works correctly", () => {
    ht.put("key-0", "val-0");
    ht.put("key-1", "val-1");
    ht.put("key-2", "val-2");
    ht.put("key-3", "val-3");
    ht.put("key-4", "val-4");
    ht.put("key-5", "val-5");
    ht.put("key-6", "val-6");
    ht.put("key-7", "val-7");
    ht.put("key-8", "val-8");
    ht.put("key-9", "val-9");

    ht.resize(1024);

    expect(ht.getNumSlots()).toEqual(1024);

    expect(ht.get("key-0")).toEqual("val-0");
    expect(ht.get("key-1")).toEqual("val-1");
    expect(ht.get("key-2")).toEqual("val-2");
    expect(ht.get("key-3")).toEqual("val-3");
    expect(ht.get("key-4")).toEqual("val-4");
    expect(ht.get("key-5")).toEqual("val-5");
    expect(ht.get("key-6")).toEqual("val-6");
    expect(ht.get("key-7")).toEqual("val-7");
    expect(ht.get("key-8")).toEqual("val-8");
    expect(ht.get("key-9")).toEqual("val-9");
  });
});
