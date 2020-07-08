const BASE_PATH = 'https://afternoon-falls-25894.herokuapp.com';

const URL = {
  getWords: (page, group) => `${BASE_PATH}/words?page=${page}&group=${group}`,
  userApi: {
    createUser: `${BASE_PATH}/users`,
    loginUser: `${BASE_PATH}/signin`,
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
    settings: (idUser) => `${BASE_PATH}/users/${idUser}/settings`,
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
    statistics: (idUser) => `${BASE_PATH}/users/${idUser}/statistics`,
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
