/* eslint-disable no-param-reassign */
export const outputArr = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const currentWordInButtons = (array, word) => {
  const arrWithcurrentWords = array.filter((e) => e.id !== word.id);

  const arr = outputArr(outputArr(arrWithcurrentWords)
    .slice(0, 3)
    .concat([word]));
  return arr;
};

export const getRandomWord = (words) => {
  const wordsA = outputArr(words)[Math
    .floor(Math.random() * (Math.floor(outputArr(words).length)))];
  return wordsA;
};
