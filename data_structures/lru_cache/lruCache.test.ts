import { LRUCache } from "./lruCache";

describe("LRU Cache tests", () => {
  let cache;

  beforeEach(() => {
    cache = new LRUCache(3);
  });

  test("overwrites appropriately", () => {
    cache.set("item1", "a");
    cache.set("item2", "b");
    cache.set("item3", "c");

    cache.set("item2", "z");

    expect(cache.get("item1")).toEqual("a");
    expect(cache.get("item2")).toEqual("z");
  });

  test("insertion and retrieval", () => {
    cache.set("item1", "a");
    cache.set("item2", "b");
    cache.set("item3", "c");

    expect(cache.get("item1")).toEqual("a");
    cache.set("item4", "d");

    expect(cache.get("item1")).toEqual("a");
    expect(cache.get("item3")).toEqual("c");
    expect(cache.get("item4")).toEqual("d");
    expect(cache.get("item2")).toBeNull();
  });

  test("nonexistent retrieval", () => {
    expect(cache.get("nonexistent")).toBeNull();
  });
});
