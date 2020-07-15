import React from 'react';
import { Chart } from 'react-chartjs-2';

const Statistics = () => {
  const data = ()
  
  return (
  < Chart
    type = 'line'
    data = {
      'labels': date,
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
    }

    options = {
      tooltips: {
        mode: 'x',
      },
    }
  />
)};

export default Statistics;
