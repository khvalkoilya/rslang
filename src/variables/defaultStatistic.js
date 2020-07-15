import { putStatisticUser } from '../utilsApi/utilsApi';

const time = new Date();
const optionsTime = {
  month: 'short',
  day: 'numeric',
  weekday: 'short',
};

const DAY = [{
  day: time.toLocaleString('ru-Ru', optionsTime),
  lw: 0,
  qE: 0,
  qR: 0,
  sOfcA: 0,
}];

const STATISTIC_NOW = {
  lW: 0,
  qE: 0,
  qR: 0,
  sOfcA: 0,
  cA: 0,
  c: false,
  nW: 0,
  w: [],
};

export const DEFAULT_STATISTIC = {
  learnedWords: 0,
  optional: {
    days: DAY,
    sN: STATISTIC_NOW,
  },
};

export const stringifyStatistic = (statistic, user) => {
  let { days } = statistic.optional;
  let { sN } = statistic.optional;
  days = JSON.stringify(statistic.optional.days);
  sN = JSON.stringify(statistic.optional.sN);
  const stat = {
    learnedWords: statistic.learnedWords,
    optional: {
      days,
      sN,
    },
  };
  putStatisticUser(user, stat);
};

export const parseStatistic = (statisticJson, setStatistic) => {
  const day = (e) => e.day === time.toLocaleString('ru-Ru', optionsTime);
  let { days } = statisticJson.optional;
  let { sN } = statisticJson.optional;
  if (!JSON.parse(days).some(day)) {
    days = JSON.parse(statisticJson.optional.days).concat(DAY);
    sN = STATISTIC_NOW;
  } else {
    days = JSON.parse(statisticJson.optional.days);
    sN = JSON.parse(statisticJson.optional.sN);
  }
  const stat = {
    learnedWords: statisticJson.learnedWords,
    optional: {
      days,
      sN,
    },
  };
  setStatistic(stat);
  return stat;
};
