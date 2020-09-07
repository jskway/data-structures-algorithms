import { singleNumber } from "./singleNumber";

describe("singleNumber test", () => {
  const shuffle = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];

      array[i] = array[j];
      array[j] = temp;
    }
  };

  test("singleNumber", () => {
    const arr = [];

    for (let i = 0; i <= 1000; i++) {
      arr.push(i);
      arr.push(i);
    }

    shuffle(arr);

    const randomIdx = Math.random() * 1001;
    const [single] = arr.splice(randomIdx, 1);

    expect(singleNumber(arr)).toEqual(single);
  });
});
