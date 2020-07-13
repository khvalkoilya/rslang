import URL from '../variables/url';
import WORD_OPTIONAL_DEFAULT from '../variables/defaultOptionalWord';

const fetchData = async (arg) => {
  const res = await fetch(...arg);
  const result = await res.json();
  return result;
};

export const loginUser = (user) => fetchData([URL.userApi.loginUser, URL.userApi.headerUser(user)]);

export const createUser = async (user) => {
  await fetchData([URL.userApi.createUser, URL.userApi.headerUser(user)]);
  const res = await loginUser(user);
  return res;
};

export const putSettingUser = ({ userId, token }, option) => fetchData(
  [URL.userSetting.settings(userId), URL.userSetting.putSettings(token, option)],
);

export const getSettingUser = ({ userId, token }) => fetchData(
  [URL.userSetting.settings(userId), URL.userSetting.getSettings(token)],
);

export const putStatisticUser = ({ userId, token }, option) => fetchData(
  [URL.userStatistic.statistics(userId), URL.userStatistic.putStatistics(token, option)],
);

export const getStatisticUser = ({ userId, token }) => fetchData(
  [URL.userStatistic.statistics(userId), URL.userStatistic.getStatistics(token)],
);

export const getWordsData = (group = 0, page = 0) => fetchData([URL.getWords(page, group)]);

export const getWordsAgainAndNew = (
  { userId, token },
  group = 0,
  wordsPerPage = 20,
) => fetchData(
  [
    URL.AggregatedWords.words(userId, group, wordsPerPage, URL.AggregatedWords.filterAgainAndNew),
    URL.AggregatedWords.getWords(token),
  ],
);

export const getWordsComplicated = (
  { userId, token },
  group = 0,
  wordsPerPage = 600,
) => fetchData(
  [
    URL.AggregatedWords.words(userId, group, wordsPerPage, URL.AggregatedWords.filterComplicated),
    URL.AggregatedWords.getWords(token),
  ],
);

export const getWordsDelete = (
  { userId, token },
  group = 0,
  wordsPerPage = 600,
) => fetchData(
  [
    URL.AggregatedWords.words(userId, group, wordsPerPage, URL.AggregatedWords.filterDelete),
    URL.AggregatedWords.getWords(token),
  ],
);

export const createWord = (
  { userId, token },
  id,
  option = WORD_OPTIONAL_DEFAULT,
) => fetchData(
  [
    URL.word.words(userId, id),
    URL.word.createWord(token, option),
  ],
);

export const putWord = (
  { userId, token },
  id, option,
) => fetchData(
  [
    URL.word.words(userId, id),
    URL.word.putWord(token, option),
  ],
);
export const getUrlData = (name) => `https://raw.githubusercontent.com/AndreyAmelchenia/rslang-data/master/${name}`;
// export const getUrlData = (name) => `https://raw.githubusercontent.com/irinainina/rslang-data/master/${name}`;
