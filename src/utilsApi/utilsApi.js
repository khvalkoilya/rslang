import URL from '../variables/url';

const fetchData = async (arg) => {
  const res = await fetch(...arg);
  const result = await res.json();
  return result;
};

export const getWordsData = (group = 0, page = 0) => fetchData([URL.getWords(page, group)]);
export const loginUser = async (user) => {
  const res = await fetchData([URL.userApi.loginUser, URL.userApi.headerUser(user)]);
  return res;
};

export const createUser = async (user) => {
  try {
    await fetchData([URL.userApi.createUser, URL.userApi.headerUser(user)]);
    const res = await loginUser(user);
    return res;
  } catch (error) {
    return error;
  }
};

export const getUrlData = (name) => `https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${name}`;
