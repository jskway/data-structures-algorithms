export const wordCount = (s: string): object => {
  const counts = {};

  // Regex expression to select all characters
  // that are not ' or alphabetical
  const regex = /[^a-zA-Z']/g;

  s = s.replace(regex, " ");

  s = s.toLowerCase();

  const wordList = s.split(" ");

  wordList.forEach((word) => {
    if (word.length === 0) {
      return;
    }

    const keys = Object.keys(counts);

    if (keys.includes(word)) {
      counts[word]++;
    } else {
      counts[word] = 1;
    }
  });

  return counts;
};
