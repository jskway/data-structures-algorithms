const reverseString = (str: string): string => {
  let start = 0;
  let end = str.length - 1;

  let chars = str.split("");

  while (start < end) {
    let temp = chars[start];
    chars[start] = chars[end];
    chars[end] = temp;

    start++;
    end--;
  }

  return chars.join("");
};

export default reverseString;
