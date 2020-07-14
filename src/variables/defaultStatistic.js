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
}];

const STATISTIC_NOW = {
  lW: 0,
  qE: 0,
  qR: 0,
  w: [],
};

export const DEFAULT_STATISTIC = {
  learnedWords: 0,
  optional: {
    days: DAY,
    sN: STATISTIC_NOW,
  },
};

// const DEFAULT_STATISTIC_1 = {
//   learnedWords: 27,
//   optional: {
//     days: [
//       {
//         day: 'вт, 5 июл.',
//         lw: 1,
//         qE: 1,
//         qR: 5,
//       },
//       {
//         day: 'вт, 6 июл.',
//         lw: 5,
//         qE: 3,
//         qR: 9,
//       },
//       {
//         day: 'вт, 7 июл.',
//         lw: 4,
//         qE: 5,
//         qR: 11,
//       },
//       {
//         day: 'вт, 8 июл.',
//         lw: 2,
//         qE: 7,
//         qR: 15,
//       },
//       {
//         day: 'вт, 9 июл.',
//         lw: 1,
//         qE: 0,
//         qR: 6,
//       },
//       {
//         day: 'вт, 10 июл.',
//         lw: 0,
//         qE: 9,
//         qR: 11,
//       },
//       {
//         day: 'вт, 11 июл.',
//         lw: 7,
//         qE: 7,
//         qR: 19,
//       },
//       {
//         day: 'вт, 12 июл.',
//         lw: 3,
//         qE: 9,
//         qR: 13,
//       },
//       {
//         day: 'вт, 13 июл.',
//         lw: 1,
//         qE: 7,
//         qR: 11,
//       },
//       {
//         day: 'вт, 14 июл.',
//         lw: 6,
//         qE: 3,
//         qR: 9,
//       },
//     ],
//     sN: {
//       lW: 6,
//       qE: 3,
//       qR: 9,
//       w: ['createUser', 'createUser', 'createUser', 'createUser', 'createUser', 'createUser'],
//     },
//   },
// };

export const stringifyStatistic = (statistic, user) => {
  const stat = statistic;
  stat.optional.days = JSON.stringify(statistic.optional.days);
  stat.optional.sN = JSON.stringify(statistic.optional.sN);
  delete stat.id;
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
