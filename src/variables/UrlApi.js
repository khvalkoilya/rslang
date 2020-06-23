const BASE_PATH = 'https://afternoon-falls-25894.herokuapp.com';
const WORDS = '/words';
const USERS = '/users';
const SIGNIN = '/signin';
const STATISTIC = '/statistics';
const SETTING = '/settings';
const SEARCH_PARAM_PAGE = 'page=';
const SEARCH_PARAM_GROUP = 'group=';

const URL = {
  words: {
    getWords: (page, group) => `${BASE_PATH}${WORDS}?${SEARCH_PARAM_PAGE}${page}&${SEARCH_PARAM_GROUP}${group}`,
  },
  userApi: {
    createUser: `${BASE_PATH}${USERS}`,
    loginUser: `${BASE_PATH}${SIGNIN}`,
    headerUser: (user) => ({
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }),
  },
  userSetting: {
    setting: (idUser) => `${BASE_PATH}${USERS}/${idUser}${SETTING}`,
    putSetting: (token, option) => ({
      method: 'PUT',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(option),
    }),
    getSetting: (token) => ({
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }),
  },
  userStatistic: {
    statistic: (idUser) => `${BASE_PATH}${USERS}/${idUser}${STATISTIC}`,
    putStatistic: (option, token) => ({
      method: 'PUT',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(option),
    }),
    getStatistic: (token) => ({
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    }),
  },
};

export default URL;
