import URL from '../variables/urlApi';

export const api = (page, group) => fetch(URL.words.getWords(page, group))
  .then((res) => res.json())
  .then((result) => result)
  .catch((error) => error);

export const getId = async (fn, group = 0, quantity = 20) => {
  const arr = [];
  for (let i = 0; i <= 29; i += 1) {
    arr.push(api(i, group));
  }
  const arrWords = await Promise.all(arr);
  const idWords = [];
  arrWords.forEach((el) => {
    el.forEach((elem) => {
      idWords.push(elem);
    });
  });
  const randomId = idWords
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
  return fn(randomId.slice(0, quantity));
};

export const getUrlData = (name) => `https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${name}`;
