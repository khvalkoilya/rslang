/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import './_swiper.scss';

const renderBlockWithCards = () => {
  const arr = ['Slide 1', 'Slide 2', 'Slide 3']
    .map((e) => (
      <div>
        {e}
      </div>
    ));

  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      dynamicBullets: 'true',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };

  return (
    <div className="swiper">
      <Swiper {...params}>
        {arr}
      </Swiper>
    </div>
  );
};

export default renderBlockWithCards;
