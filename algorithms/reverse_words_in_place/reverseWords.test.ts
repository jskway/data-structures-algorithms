import reverseWords from "./reverseWords";

describe("reverseWords tests", () => {
  test("reverses words with one space", () => {
    const message = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];
    const expected = ["w", "o", "r", "l", "d", " ", "h", "e", "l", "l", "o"];

    reverseWords(message);

    expect(message).toEqual(expected);
  });

  test("reverses words with three spaces", () => {
    const message = ["h", "i", " ", "i", "m", " ", "j", "a", "c", "k"];
    const expected = ["j", "a", "c", "k", " ", "i", "m", " ", "h", "i"];
    reverseWords(message);

    expect(message).toEqual(expected);
  });

  test("one word no space", () => {
    const message = ["t", "e", "s", "t", "i", "n", "g"];
    const expected = ["t", "e", "s", "t", "i", "n", "g"];
    reverseWords(message);

    expect(message).toEqual(expected);
  });
});
