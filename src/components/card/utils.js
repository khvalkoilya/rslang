export const getLetterAtt = (word, innerWord) => {
  const arr1 = word.split('');
  const arr2 = innerWord.split('');

  const arr = [];
  for (let i = 0; i < word.length + 1; i++ ) {
    arr.push({ letter: word[i], isCorect: word[i] === innderWord[i]});
    
  }

  return [
    {
      letter: '',
      isCorrect: false
  }
};
