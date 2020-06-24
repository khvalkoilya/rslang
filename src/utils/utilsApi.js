import URL from '../variables/UrlApi';

const data = async (arg) => {
  const arr = await fetch(...arg)
    .then((res) => res.json())
    .then((result) => result)
    .catch((error) => error);
  return arr;
};

export const getWordsData = (group = 0, page = 0) => data([URL.getWords(page, group)]);

export const getUrlData = (name) => `https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${name}`;
