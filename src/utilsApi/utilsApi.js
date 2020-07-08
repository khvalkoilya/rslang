import URL from '../variables/url';

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

export const putSettingUser = ({ idUser, token }, option) => {
  fetchData([URL.userSetting.settings(idUser), URL.userSetting.putSettings(token, option)]);
};

export const getSettingUser = ({ idUser, token }) => {
  fetchData([URL.userSetting.settings(idUser), URL.userSetting.getSettings(token)]);
};

export const putStatisticUser = ({ idUser, token }, option) => {
  fetchData([URL.userStatistic.statistics(idUser), URL.userStatistic.putStatistics(token, option)]);
};

export const getStatisticUser = ({ idUser, token }) => {
  fetchData([URL.userStatistic.statistics(idUser), URL.userStatistic.getStatistics(token)]);
};

export const getWordsData = (group = 0, page = 0) => fetchData([URL.getWords(page, group)]);

export const getUrlData = (name) => `https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${name}`;
