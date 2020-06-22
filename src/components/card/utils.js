export const getLetterArr = (word, innerWord) => {
  const arr = [];
  let j = 0;
  for (let i = 0; i < word.length; i += 1) {
    arr.push({ letter: word[i], isCorect: word[i] === innerWord[j] });
    if (word[i] === innerWord[j]) j += 1;
  }

  return arr;
};

export const arr = [];
