import { wordCount } from "./wordCount";

describe("wordCount tests", () => {
  let x;

  test("empty count", () => {
    x = wordCount("");
    expect(x).toEqual({});
  });

  test("case 1", () => {
    x = wordCount("Hello    hello");
    expect(x).toEqual({ hello: 2 });
  });

  test("case 2", () => {
    x = wordCount('Hello, my cat.  And my cat doesn\'t say "hello" back.');
    expect(x).toEqual({
      hello: 2,
      my: 2,
      cat: 2,
      and: 1,
      "doesn't": 1,
      say: 1,
      back: 1,
    });
  });

  test("case 3", () => {
    x = wordCount(
      "This is a test of the  Emergency  Broadcast  Network. This is only a test."
    );
    expect(x).toEqual({
      this: 2,
      is: 2,
      a: 2,
      test: 2,
      of: 1,
      the: 1,
      emergency: 1,
      broadcast: 1,
      network: 1,
      only: 1,
    });
  });

  test("case 4", () => {
    x = wordCount('":;,.-+=/\\|[]{}()*^&');
    expect(x).toEqual({});
  });

  test("case 5", () => {
    x = wordCount(`a a\ra\na\ta \t\r\n`);
    expect(x).toEqual({ a: 5 });
  });
});
