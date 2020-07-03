const getLetterArr = (word, innerWord) => {
  const arr = [];
  for (let i = 0, j = 0; i < word.length; i += 1, j += 1) {
    arr.push({ letter: word[i], isCorrect: word[i] === innerWord[j] });
    // if (word[i] === innerWord[j]) j += 1;
  }
  // console.log(arr)
  return arr;
};

export default getLetterArr;
