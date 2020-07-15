function getСhart(date, data, data2) {
  const cards = document.getElementById('cards').getContext('2d');
  const chart = new Chart(cards, {
    type: 'line',
    data: {
      labels: date,
      datasets: [{
        label: 'Новые слова',
        borderColor: '#87a7ba',
        data,
      },
      {
        label: 'Ошибки',
        borderColor: '#c20000',
        data: data2,
      }],
    },

    options: {
      tooltips: {
        mode: 'x',
      },
    },
  });
}

function getСhart2(date, data, data2) {
  const cards = document.getElementById('cards2').getContext('2d');
  const chart = new Chart(cards, {
    type: 'line',
    data: {
      labels: date,
      datasets: [{
        label: 'Процент правильных ответов',
        borderColor: '#87a7ba',
        data,
      },
      {
        label: 'Процент ошибок',
        borderColor: '#c20000',
        data: data2,
      }],
    },

    options: {
      tooltips: {
        mode: 'x',
      },
    },
  });
}

const DEFAULT_STATISTIC_1 = {
  learnedWords: 27,
  optional: {
    days: [
      {
        day: 'вт, 5 июл.',
        lw: 1,
        qE: 1,
        qR: 5,
      },
      {
        day: 'вт, 6 июл.',
        lw: 5,
        qE: 3,
        qR: 9,
      },
      {
        day: 'вт, 7 июл.',
        lw: 4,
        qE: 5,
        qR: 11,
      },
      {
        day: 'вт, 8 июл.',
        lw: 2,
        qE: 7,
        qR: 15,
      },
      {
        day: 'вт, 9 июл.',
        lw: 1,
        qE: 0,
        qR: 6,
      },
      {
        day: 'вт, 10 июл.',
        lw: 0,
        qE: 9,
        qR: 11,
      },
      {
        day: 'вт, 11 июл.',
        lw: 7,
        qE: 7,
        qR: 19,
      },
      {
        day: 'вт, 12 июл.',
        lw: 3,
        qE: 9,
        qR: 13,
      },
      {
        day: 'вт, 13 июл.',
        lw: 1,
        qE: 7,
        qR: 11,
      },
      {
        day: 'вт, 14 июл.',
        lw: 6,
        qE: 3,
        qR: 9,
      },
    ],
    sN: {
      learnedWords: 6,
      optional: {
        days: 'вт, 14 июл.',
        sN: {
          lW: 6,
          qE: 3,
          qR: 9,
          w: ['createUser', 'createUser', 'createUser', 'createUser', 'createUser', 'createUser'],
        },
      },
    },
  },
};

const arrDays = DEFAULT_STATISTIC_1.optional.days.map((e) => e.day);

const arrWords = DEFAULT_STATISTIC_1.optional.days.map((e) => e.lw);

const arrError = DEFAULT_STATISTIC_1.optional.days.map((e) => e.qE);

const arrPercError = DEFAULT_STATISTIC_1.optional.days.map((e) => Math.floor(e.qE / e.qR * 100));

const arrPercCorrect = DEFAULT_STATISTIC_1.optional.days.map((e) => Math.floor((e.qR - e.qE) / e.qR * 100));

getСhart(arrDays, arrWords, arrError);
getСhart2(arrDays, arrPercCorrect, arrPercError);
