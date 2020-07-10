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
    settings: (userId) => `${BASE_PATH}/users/${userId}/settings`,
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
    statistics: (userId) => `${BASE_PATH}/users/${userId}/statistics`,
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
  AggregatedWords: {
    words: (userId, group, wordsPerPage, filter) => `${BASE_PATH}/users/${userId}/aggregatedWords?group=${group}&wordsPerPage=${wordsPerPage}&filter=${filter}`,
    getWords: (token) => ({
      method: 'GET',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    }),
    filterComplicated: JSON.stringify({ 'userWord.difficulty': 'complicated' }),
    filterDelete: JSON.stringify({ 'userWord.difficulty': 'delete' }),
    filterAgain: JSON.stringify({ 'userWord.difficulty': 'again' }),
    filterStudy: JSON.stringify({ 'userWord.difficulty': 'study' }),
    filterNew: JSON.stringify({ userWord: null }),
    filterAgainAndNew: JSON.stringify({ $or: [{ 'userWord.difficulty': 'again' }, { userWord: null }] }),
  },
};

export default URL;
