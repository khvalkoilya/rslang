import URL from '../variables/urlApi';

const fetchData = async (arg) => {
  try {
    const res = await fetch(...arg);
    const result = await res.json();
    return result;
  } catch (error) {
    return error;
  }
};

export const getWordsData = (group = 0, page = 0) => fetchData([URL.getWords(page, group)]);

export const loginUser = async (user) => {
  const res = await fetchData([URL.userApi.loginUser, URL.userApi.headerUser(user)]);
  return res;
};

// const func = (fn) => {
//   const obj = [];
//   fn().then((res) => obj = res);
//   return obj;
// };
export const createUser = async (user) => {
  try {
    await fetchData([URL.userApi.createUser, URL.userApi.headerUser(user)]);
    const res = await loginUser(user);
    return res;
  } catch (error) {
    return error;
  }
};

export const putSettingUser = ({ idUser, token }, option) => {
  fetchData([URL.userSetting.settings(idUser), URL.userSetting.putSettings(token, option)]);
};

export const getSettingUser = (idUser, token) => {
  fetchData([URL.userSetting.settings(idUser), URL.userSetting.getSettings(token)]);
};

export const putStatisticUser = (idUser, token, option) => {
  fetchData([URL.userStatistic.statistics(idUser), URL.userStatistic.putStatistics(token, option)]);
};

export const getStatisticUser = (idUser, token) => {
  fetchData([URL.userStatistic.statistics(idUser), URL.userStatistic.getStatistics(token)]);
};

export const getUrlData = (name) => `https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${name}`;
