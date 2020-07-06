/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import DEFAULT_WORDS from '../../variables/defaultWords';
import Card from '../card/Card';

const renderBlockWithCards = () => {
  const arr = DEFAULT_WORDS.map((e) => (
    <div key={e.word}><Card data={e} /></div>
  ));

  const params = {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
  };

  return (
    <Swiper
      {...params}
    >
      {arr}
    </Swiper>
  );
};

export default renderBlockWithCards;
