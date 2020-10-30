function reverseChars(word: string[], leftIdx: number, rightIdx: number) {
  while (leftIdx < rightIdx) {
    let temp = word[leftIdx];
    word[leftIdx] = word[rightIdx];
    word[rightIdx] = temp;

    leftIdx++;
    rightIdx--;
  }
}

function reverseWords(message: string[]) {
  // Reverse all the characters
  reverseChars(message, 0, message.length - 1);

  // Now we need to re-reverse each word

  // Variable to track the starting index of each word
  let wordStart = 0;

  // Iterate through each character
  for (let i = 0; i <= message.length + 1; i++) {
    // If we find the end of the current word
    if (i === message.length || message[i] === " ") {
      // Reverse the current word
      reverseChars(message, wordStart, i - 1);
      // Update wordStart to the index of the next word
      wordStart = i + 1;
    }
  }
}

export default reverseWords;
