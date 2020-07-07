import React, { useState } from 'react';

import SwiperCore, {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import DEFAULT_WORDS from '../../variables/defaultWords';
import Card from '../card/Card';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const renderBlockWithCards = () => {
  const [swiper, setSwiper] = useState();
  const arr = DEFAULT_WORDS.map((e) => (
    <SwiperSlide key={e.word}>
      <Card data={e} swiper={swiper} />
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        spaceBetween={100}
        allowTouchMove={false}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(obj) => {
          setSwiper(obj);
        }}
        onSlideChange={() => console.log('slide change')}
      >
        {console.log(swiper)}
        {arr}
      </Swiper>
      {/* <button type="button" onClick={() => swiper.slideNext()}>next</button> */}
    </>

  );
};

export default renderBlockWithCards;
