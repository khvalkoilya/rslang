import URL from '../variables/urlApi';

const fetchData = async (arg) => {
  const res = await fetch(...arg);
  const result = await res.json();
  return result;
};

export const loginUser = async (user) => {
  const res = await fetchData([URL.userApi.loginUser, URL.userApi.headerUser(user)]);
  return res;
};

export const createUser = async (user) => {
  await fetchData([URL.userApi.createUser, URL.userApi.headerUser(user)]);
  const res = await loginUser(user);
  return res;
};
