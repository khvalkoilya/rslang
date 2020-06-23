import URL from '../variables/UrlApi';

export const getWordsData = async (fn, group = 0, page = 0) => {
  const arrWords = await fetch(URL.words.getWords(page, group))
    .then((res) => res.json())
    .then((result) => result)
    .catch((error) => error);
  return fn(arrWords);
};

export const loginUser = async (fn, user) => {
  const arr = await fetch(URL.userApi.loginUser, URL.userApi.headerUser(user))
    .then((res) => res.json())
    .then((result) => result)
    .catch((error) => error);
  return fn(arr);
};

export const putSettingUser = async (idUser, token, option) => {
  await fetch(URL.userSetting.setting(idUser), URL.userSetting.putSetting(token, option));
};

export const getSettingUser = async (fn, idUser, token) => {
  const setting = await fetch(
    URL.userSetting.setting(idUser),
    URL.userSetting.getSetting(token),
  ).then((res) => res.json())
    .then((result) => result)
    .catch((error) => error);
  return fn(setting);
};

export const putStatisticUser = async (idUser, token, option) => {
  await fetch(URL.userStatistic.statistic(idUser), URL.userStatistic.putStatistic(token, option));
};

export const getStatisticUser = async (fn, idUser, token) => {
  const setting = await fetch(
    URL.userStatistic.statistic(idUser),
    URL.userStatistic.getStatistic(token),
  ).then((res) => res.json())
    .then((result) => result)
    .catch((error) => error);
  return fn(setting);
};

export const getUrlData = (name) => `https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${name}`;
