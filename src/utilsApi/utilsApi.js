import URL from '../variables/urlApi';

const fetchData = async (arg) => {
  const res = await fetch(...arg);
  const result = await res.json();
  return result;
};

export const getWordsData = (group = 0, page = 0) => fetchData([URL.getWords(page, group)]);

export const getUrlData = (name) => `https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${name}`;
