import URL from '../variables/UrlApi';

export const getWordsData = async (setState, group = 0, page = 0) => {
  const arrWords = await fetch(URL.words.getWords(page, group))
    .then((res) => res.json())
    .then((result) => result)
    .catch((error) => error);
  return setState(arrWords);
};

export const getUrlData = (name) => `https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${name}`;
