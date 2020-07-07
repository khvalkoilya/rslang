import React, { useState, useEffect } from 'react';
// import { render } from 'react-dom';
import SwiperCore, {
  Navigation, A11y,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import DEFAULT_WORDS from '../../variables/defaultWords';
import Card from '../card/Card';

SwiperCore.use([Navigation, A11y]);

const renderBlockWithCards = () => {
  const [swiper, setSwiper] = useState();
  const [addSlide, setAddSlide] = useState(false);

  const arr = DEFAULT_WORDS.map((e) => (
    <SwiperSlide key={e.word}>
      <Card data={e} swiper={swiper} setAddSlide={setAddSlide} />
    </SwiperSlide>
  ));
  const [arrData, setArrData] = useState(arr);

  useEffect(() => {
    if (addSlide) {
      setArrData(DEFAULT_WORDS.concat(DEFAULT_WORDS).map((e) => (
        <SwiperSlide key={e.word}>
          <Card data={e} swiper={swiper} setAddSlide={setAddSlide} />
        </SwiperSlide>
      )));
      console.log(arrData);
    }
  }, [addSlide]);
  return (
    <>
      <Swiper
        spaceBetween={100}
        allowTouchMove={false}
        navigation

        onSwiper={(obj) => {
          setArrData(arr);
          setSwiper(obj);
          document.querySelector('.swiper-button-next').classList.add('swiper-button-disabled');
        }}
        onSlidePrevTransitionEnd={() => {
          document.querySelector('.swiper-button-prev').classList.add('swiper-button-disabled');
          document.querySelector('.swiper-button-next').classList.remove('swiper-button-disabled');
        }}
        onSlideNextTransitionEnd={() => {
          document.querySelector('.swiper-button-prev').classList.remove('swiper-button-disabled');
          document.querySelector('.swiper-button-next').classList.add('swiper-button-disabled');
        }}
      >
        {addSlide && console.log('swiper.activeIndex', swiper.activeIndex)}
        {}
        {arrData}
      </Swiper>
    </>

  );
};

export default renderBlockWithCards;
