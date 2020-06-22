import URL from '../variables/urlApi';

export const api = (page, group) => fetch(URL.words.getWords(page, group))
  .then((res) => res.json())
  .then((result) => result)
  .catch((error) => error);

export const getId = async (fn, group = 0, page = 0) => {
  const arrWords = await api(group, page);
  return fn(arrWords);
};

export const getUrlData = (name) => `https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${name}`;
