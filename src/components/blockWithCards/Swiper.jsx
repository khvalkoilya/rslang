import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import SwiperCore, { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../card/Card';
import UserProgressBar from '../progressBar/ProgressBar';
import ApplicationData from '../context/Context';

SwiperCore.use([Navigation, A11y]);

const RenderBlockWithCards = ({ words }) => {
  const [swiper, setSwiper] = useState();
  const [arrData, setArrData] = useState(words);
  const [doneCards, setDoneCards] = useState(0);
  const { settings } = useContext(ApplicationData);
  const { wordsPerDay } = settings;
  useEffect(() => {
    setArrData(words);
  }, [words]);
  return (
    <Swiper
      spaceBetween={30}
      allowTouchMove={false}
      navigation
      onSwiper={(obj) => {
        setSwiper(obj);
        document.querySelector('.swiper-button-next').classList.add('swiper-button-disabled');
        document.querySelector('.swiper-slide-active > div > div > span  > input').focus();
      }}
      onSlidePrevTransitionEnd={() => {
        document.querySelector('.swiper-button-prev').classList.add('swiper-button-disabled');
        document.querySelector('.swiper-button-next').classList.remove('swiper-button-disabled');
      }}
      onSlideNextTransitionEnd={() => {
        document.querySelector('.swiper-button-prev').classList.remove('swiper-button-disabled');
        document.querySelector('.swiper-button-next').classList.add('swiper-button-disabled');
        document.querySelector('.swiper-slide-active > div > div > span  > input').focus();
      }}
    >
      {arrData.map((e) => (
        <SwiperSlide key={`${e.id}`}>
          <Card
            word={e}
            swiper={swiper}
            settings={settings.optional}
            setDoneCards={setDoneCards}
          />
        </SwiperSlide>
      ))}
      <UserProgressBar doneCards={doneCards} maxCards={wordsPerDay} />
    </Swiper>
  );
};
RenderBlockWithCards.propTypes = {
  words: PropTypes.arrayOf(PropTypes.object),
};

RenderBlockWithCards.defaultProps = {
  words: undefined,
};

export default RenderBlockWithCards;
