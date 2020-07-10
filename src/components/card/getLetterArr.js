const getLetterArr = (word, innerWord) => {
  const arr = [];
  for (let i = 0, j = 0; i < word.length; i += 1, j += 1) {
    arr.push({ letter: word[i].toLowerCase(), isCorrect: word[i].toLowerCase() === innerWord[j] });
  }
  return arr;
};

export default getLetterArr;
