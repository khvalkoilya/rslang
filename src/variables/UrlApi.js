const BASE_PATH = 'https://afternoon-falls-25894.herokuapp.com';
const WORDS = 'words';
const USERS = 'users';
const SIGNIN = 'signin';
const STATISTICS = 'statistics';
const SETTINGS = 'settings';

const URL = {
  getWords: (page, group) => `${BASE_PATH}/${WORDS}?page=${page}&group=${group}`,
  userApi: {
    createUser: `${BASE_PATH}/${USERS}`,
    loginUser: `${BASE_PATH}/${SIGNIN}`,
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
    settings: (idUser) => `${BASE_PATH}/${USERS}/${idUser}/${SETTINGS}`,
    putSettings: (token, option) => ({
      method: 'PUT',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(option),
    }),
    getSettings: (token) => ({
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
    statistics: (idUser) => `${BASE_PATH}/${USERS}/${idUser}/${STATISTICS}`,
    putStatistics: (option, token) => ({
      method: 'PUT',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(option),
    }),
    getStatistics: (token) => ({
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
