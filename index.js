const alphabet = "abcdefghijklmnopqrstuvwxyz";

function getNeighbors(word, unvisitedWords) {
  unvisitedNeighbors = [];
  for (let j = 0; j < word.length; j++) {
    for (const letter of alphabet) {
      const w = (word.slice(0, j) + letter + word.slice(j + 1)).toUpperCase();
      if (unvisitedWords.has(w)) {
        unvisitedNeighbors.push(w);
        unvisitedWords.delete(w); // mark next_word as visited
      }
    }
  }
  return unvisitedNeighbors;
}

function wordLadder(begin, end, wordList) {
  if (begin == end) return 0;
  const unvisitedWords = new Set(wordList); // make a set because existence query is O(1) vs O(N) for list
  const queue = [begin];
  unvisitedWords.delete(begin);
  let distance = 0;
  while (queue.length > 0) {
    const n = queue.length;
    distance++;
    for (let i = 0; i < n; i++) {
      const word = queue.shift();
      for (const w of getNeighbors(word, unvisitedWords)) {
        if (w == end) return distance;
        queue.push(w);
      }
    }
  }
  return -1;
}

let start = "COLD";
let end = "WARM";
let word_list = [
  "COLD",
  "GOLD",
  "CORD",
  "SOLD",
  "CARD",
  "WARD",
  "WARM",
  "TARD",
];

console.log(wordLadder(start, end, word_list));
