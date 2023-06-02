var ladderLength = function (beginWord, endWord, wordList) {
  if (wordList.length < 1 || !beginWord || !endWord) return 0;

  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [beginWord];
  let level = 1;

  while (queue.length > 0) {
    let n = queue.length;

    for (let i = 0; i < n; i++) {
      let currWord = queue.shift();
      if (currWord === endWord) return level;

      for (let j = 0; j < currWord.length; j++) {
        for (let charCode = 97; charCode <= 122; charCode++) {
          const nextWord =
            currWord.slice(0, j) +
            String.fromCharCode(charCode) +
            currWord.slice(j + 1);

          if (wordSet.has(nextWord)) {
            queue.push(nextWord);
            wordSet.delete(nextWord);
          }
        }
      }
    }

    level++;
  }

  return 0;
};
