import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import ApplicationData from '../context/Context';

const Statistics = () => {
  const {
    statistic,
  } = useContext(ApplicationData);
  const arrDays = statistic.optional.days.map((e) => e.day);

  const arrWords = statistic.optional.days.map((e) => e.lw);

  const arrError = statistic.optional.days.map((e) => e.qE);

  const arrCorrAns = statistic.optional.days.map((e) => e.sOfcA);
  const data = {
    labels: arrDays,
    datasets: [{
      label: 'Изученные слова',
      borderColor: '#00202e',
      data: arrWords,
    },
    {
      label: 'Ошибки',
      borderColor: '#c20000',
      data: arrError,
    },
    {
      label: 'Серия правильных ответов',
      borderColor: '#fdc54d',
      data: arrCorrAns,
    }],
  };
  return (
    <div className="card">
      <div className="card-wrapper">
        <Line
          data={data}
          height={550}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
};

export default Statistics;
